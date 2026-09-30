import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, get, remove } from "firebase/database";
import { auth, db } from "../firebase";
import { usePlaces, useCategories } from "../data";
import PlaceForm from "../admin/PlaceForm.jsx";
import Categories from "../admin/Categories.jsx";
import Icon from "../components/Icon.jsx";

function Shell({ children, user }) {
  return (
    <div className="wrap admin">
      <div className="topbar">
        <a href="#/" className="back">Back to the site</a>
        {user && (
          <button className="btn" onClick={() => signOut(auth)}>
            <Icon name="logout" size={18} /> Sign out
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (ex) {
      const bad = ["auth/invalid-credential", "auth/wrong-password", "auth/user-not-found", "auth/invalid-email"];
      setErr(bad.includes(ex.code) ? "Email or password is incorrect." : ex.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Shell>
      <form className="panel login" onSubmit={submit}>
        <h1>Admin sign in</h1>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" className="input" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="field">
          <label htmlFor="pw">Password</label>
          <input id="pw" className="input" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {err && <p className="err" role="alert">{err}</p>}
        <button className="btn primary" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      </form>
    </Shell>
  );
}

function Dashboard({ user }) {
  const places = usePlaces();
  const cats = useCategories();
  const [tab, setTab] = useState("places");
  const [editing, setEditing] = useState(null); // null | "new" | place
  const [err, setErr] = useState("");

  const catName = Object.fromEntries(cats.items.map((c) => [c.id, c.name]));
  const allTags = [...new Set(places.items.flatMap((p) => p.tags))].sort();
  const sorted = [...places.items].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  async function del(p) {
    if (!window.confirm(`Delete "${p.title}"? This can't be undone.`)) return;
    try {
      await remove(ref(db, `places/${p.id}`));
    } catch (ex) {
      setErr(ex.message);
    }
  }

  if (editing) {
    return (
      <Shell user={user}>
        <PlaceForm
          place={editing === "new" ? null : editing}
          categories={cats.items}
          allTags={allTags}
          onDone={() => setEditing(null)}
        />
      </Shell>
    );
  }

  return (
    <Shell user={user}>
      <h1>Admin panel</h1>
      <div className="tabs" role="tablist">
        <button className="tab" role="tab" aria-selected={tab === "places"} onClick={() => setTab("places")}>Places</button>
        <button className="tab" role="tab" aria-selected={tab === "types"} onClick={() => setTab("types")}>Place types</button>
      </div>

      {tab === "places" ? (
        <>
          <button className="btn primary" onClick={() => setEditing("new")}>
            <Icon name="plus" size={18} /> Add place
          </button>
          {err && <p className="err">{err}</p>}
          <div className="admin-list">
            {sorted.length === 0 && <p className="count">No places yet. Add the first one.</p>}
            {sorted.map((p) => (
              <div className="admin-row" key={p.id}>
                <div>
                  <strong>{p.title}</strong>
                  <div className="count">
                    {catName[p.category] || "Other"} · {p.fee === "paid" ? "Paid" : "Free"}
                  </div>
                </div>
                <div className="btn-row">
                  <button className="btn" onClick={() => setEditing(p)} aria-label={`Edit ${p.title}`}>
                    <Icon name="edit" size={18} /> Edit
                  </button>
                  <button className="btn danger" onClick={() => del(p)} aria-label={`Delete ${p.title}`}>
                    <Icon name="trash" size={18} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Categories cats={cats} />
      )}
    </Shell>
  );
}

export default function Admin() {
  const [user, setUser] = useState(undefined); // undefined = still checking
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, async (u) => {
        setUser(u);
        setIsAdmin(null);
        if (!u) return;
        try {
          const snap = await get(ref(db, `admins/${u.uid}`));
          setIsAdmin(snap.val() === true);
        } catch {
          setIsAdmin(false);
        }
      }),
    []
  );

  if (user === undefined || (user && isAdmin === null)) {
    return <Shell><p className="count">Checking sign-in…</p></Shell>;
  }
  if (!user) return <Login />;
  if (!isAdmin) {
    return (
      <Shell user={user}>
        <div className="panel">
          <h1>This account isn't an admin</h1>
          <p>Ask the site owner to add this user ID under <code>admins</code> in the database:</p>
          <p><code>{user.uid}</code></p>
        </div>
      </Shell>
    );
  }
  return <Dashboard user={user} />;
}
