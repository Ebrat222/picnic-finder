import { useState } from "react";
import { ref, set, push, serverTimestamp } from "firebase/database";
import { db } from "../firebase";
import Icon from "../components/Icon.jsx";

function initial(p) {
  return {
    title: p?.title || "",
    description: p?.description || "",
    category: p?.category || "",
    fee: p?.fee || "free",
    feeAmount: p?.feeAmount || "",
    address: p?.address || "",
    mapCode: p?.mapCode || "",
    contacts: p?.contacts?.length ? p.contacts.map((c) => ({ name: c.name || "", phone: c.phone || "" })) : [{ name: "", phone: "" }],
    whatsapp: p?.whatsapp || "",
    facebook: p?.facebook || "",
    tags: p?.tags || [],
  };
}

export default function PlaceForm({ place, categories, allTags, onDone }) {
  const [f, setF] = useState(() => initial(place));
  const [tagInput, setTagInput] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const up = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  function setContact(i, k, v) {
    setF((s) => ({ ...s, contacts: s.contacts.map((c, j) => (j === i ? { ...c, [k]: v } : c)) }));
  }

  function addTag(raw) {
    const t = raw.trim().replace(/,$/, "").trim();
    if (!t) return;
    setF((s) => (s.tags.some((x) => x.toLowerCase() === t.toLowerCase()) ? s : { ...s, tags: [...s.tags, t] }));
    setTagInput("");
  }

  async function save(e) {
    e.preventDefault();
    setErr("");
    if (!f.title.trim()) return setErr("Add a title.");
    if (!f.category) return setErr("Choose a place type.");
    setBusy(true);
    try {
      const pending = tagInput.trim();
      const tags = pending && !f.tags.includes(pending) ? [...f.tags, pending] : f.tags;
      const data = {
        title: f.title.trim(),
        description: f.description.trim(),
        category: f.category,
        fee: f.fee,
        feeAmount: f.fee === "paid" ? f.feeAmount.trim() : "",
        address: f.address.trim(),
        mapCode: f.mapCode.trim(),
        contacts: f.contacts
          .map((c) => ({ name: c.name.trim(), phone: c.phone.trim() }))
          .filter((c) => c.name || c.phone),
        whatsapp: f.whatsapp.trim(),
        facebook: f.facebook.trim(),
        tags,
        updatedAt: serverTimestamp(),
      };
      if (place) {
        data.createdAt = place.createdAt || serverTimestamp();
        await set(ref(db, `places/${place.id}`), data);
      } else {
        data.createdAt = serverTimestamp();
        await push(ref(db, "places"), data);
      }
      onDone();
    } catch (ex) {
      setErr(ex.message);
      setBusy(false);
    }
  }

  return (
    <form className="panel" onSubmit={save}>
      <h1>{place ? "Edit place" : "Add place"}</h1>

      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" className="input" value={f.title} onChange={up("title")} placeholder="American Park" />
      </div>

      <div className="field">
        <label htmlFor="desc">Description</label>
        <textarea id="desc" className="input" rows={4} value={f.description} onChange={up("description")} placeholder="What makes this place good for a picnic?" />
      </div>

      <div className="row-2">
        <div className="field">
          <label htmlFor="cat">Place type</label>
          <select id="cat" className="input" value={f.category} onChange={up("category")}>
            <option value="">Choose…</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fee">Entry fee</label>
          <select id="fee" className="input" value={f.fee} onChange={up("fee")}>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>

      {f.fee === "paid" && (
        <div className="field">
          <label htmlFor="amt">Fee details (optional)</label>
          <input id="amt" className="input" value={f.feeAmount} onChange={up("feeAmount")} placeholder="৳50 per person" />
        </div>
      )}

      <div className="field">
        <label htmlFor="addr">Address</label>
        <input id="addr" className="input" value={f.address} onChange={up("address")} placeholder="Road, area, city" />
      </div>

      <div className="field">
        <label htmlFor="map">Google Map link or code</label>
        <input id="map" className="input" value={f.mapCode} onChange={up("mapCode")} placeholder="https://maps.app.goo.gl/… or 23.8103,90.4125" />
        <span className="hint">Paste a Google Maps share link, latitude and longitude, or a Plus Code.</span>
      </div>

      <fieldset className="field">
        <legend>Phone contacts</legend>
        {f.contacts.map((c, i) => (
          <div className="contact-edit" key={i}>
            <input className="input" aria-label={`Owner name ${i + 1}`} value={c.name} onChange={(e) => setContact(i, "name", e.target.value)} placeholder="Owner name" />
            <input className="input" aria-label={`Phone number ${i + 1}`} type="tel" value={c.phone} onChange={(e) => setContact(i, "phone", e.target.value)} placeholder="01XXXXXXXXX" />
            <button type="button" className="btn danger" aria-label={`Remove contact ${i + 1}`} onClick={() => setF((s) => ({ ...s, contacts: s.contacts.filter((_, j) => j !== i) }))}>
              <Icon name="trash" size={18} />
            </button>
          </div>
        ))}
        <div>
          <button type="button" className="btn" onClick={() => setF((s) => ({ ...s, contacts: [...s.contacts, { name: "", phone: "" }] }))}>
            <Icon name="plus" size={18} /> Add contact
          </button>
        </div>
      </fieldset>

      <div className="row-2">
        <div className="field">
          <label htmlFor="wa">WhatsApp number</label>
          <input id="wa" className="input" type="tel" value={f.whatsapp} onChange={up("whatsapp")} placeholder="01XXXXXXXXX" />
        </div>
        <div className="field">
          <label htmlFor="fb">Facebook ID or link</label>
          <input id="fb" className="input" value={f.facebook} onChange={up("facebook")} placeholder="americanpark or full link" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="tags">Tags</label>
        <input
          id="tags"
          className="input"
          list="tag-suggestions"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addTag(tagInput);
            }
          }}
          onBlur={() => addTag(tagInput)}
          placeholder="Type a tag, then press Enter"
        />
        <datalist id="tag-suggestions">
          {allTags.map((t) => <option key={t} value={t} />)}
        </datalist>
        <div className="tags">
          {f.tags.map((t) => (
            <button type="button" className="tag removable" key={t} onClick={() => setF((s) => ({ ...s, tags: s.tags.filter((x) => x !== t) }))} aria-label={`Remove tag ${t}`}>
              {t} ×
            </button>
          ))}
        </div>
      </div>

      {err && <p className="err" role="alert">{err}</p>}
      <div className="btn-row">
        <button className="btn primary" disabled={busy}>{busy ? "Saving…" : "Save place"}</button>
        <button type="button" className="btn" onClick={onDone} disabled={busy}>Cancel</button>
      </div>
    </form>
  );
}
