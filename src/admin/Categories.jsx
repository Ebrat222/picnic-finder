import { useState } from "react";
import { ref, set, push, remove, serverTimestamp } from "firebase/database";
import { db } from "../firebase";
import { DEFAULT_CATEGORIES } from "../data";
import Icon from "../components/Icon.jsx";

function Row({ cat }) {
  const [name, setName] = useState(cat.name);
  const [err, setErr] = useState("");

  async function rename() {
    try {
      await set(ref(db, `categories/${cat.id}`), { name: name.trim(), createdAt: cat.createdAt || Date.now() });
      setErr("");
    } catch (ex) {
      setErr(ex.message);
    }
  }
  async function del() {
    if (!window.confirm(`Delete "${cat.name}"? Places using it will show as Other.`)) return;
    try {
      await remove(ref(db, `categories/${cat.id}`));
    } catch (ex) {
      setErr(ex.message);
    }
  }

  return (
    <div className="admin-row">
      <input className="input" aria-label="Place type name" value={name} onChange={(e) => setName(e.target.value)} />
      <div className="btn-row">
        <button className="btn" onClick={rename} disabled={!name.trim() || name.trim() === cat.name}>Save</button>
        <button className="btn danger" onClick={del} aria-label={`Delete ${cat.name}`}><Icon name="trash" size={18} /></button>
      </div>
      {err && <p className="err">{err}</p>}
    </div>
  );
}

export default function Categories({ cats }) {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  async function add(e) {
    e.preventDefault();
    if (!name.trim()) return;
    try {
      await push(ref(db, "categories"), { name: name.trim(), createdAt: serverTimestamp() });
      setName("");
      setErr("");
    } catch (ex) {
      setErr(ex.message);
    }
  }

  async function saveDefaults() {
    try {
      const now = Date.now();
      await Promise.all(
        DEFAULT_CATEGORIES.map((c, i) => set(ref(db, `categories/${c.id}`), { name: c.name, createdAt: now + i }))
      );
    } catch (ex) {
      setErr(ex.message);
    }
  }

  return (
    <div>
      <p className="count">These appear as the "Place" filter on the public list.</p>

      {cats.isDefault && (
        <div className="panel">
          <p>You're seeing the built-in types (Park, Swimming pool, Forest). Save them to the database to rename or delete them.</p>
          <button className="btn primary" onClick={saveDefaults}>Save built-in types</button>
        </div>
      )}

      <form className="admin-row" onSubmit={add}>
        <input className="input" aria-label="New place type" placeholder="New place type, e.g. Resort" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn primary"><Icon name="plus" size={18} /> Add type</button>
      </form>
      {err && <p className="err">{err}</p>}

      {!cats.isDefault && cats.items.map((c) => <Row key={c.id + c.name} cat={c} />)}
    </div>
  );
}
