import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { mapUrl, telUrl, waUrl, fbUrl } from "../utils";

export default function PlaceModal({ place, typeName, onClose }) {
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const map = mapUrl(place.mapCode);
  const wa = waUrl(place.whatsapp);
  const fb = fbUrl(place.facebook);
  const contacts = place.contacts.filter((c) => c.phone);
  const paid = place.fee === "paid";

  return (
    <div className="scrim" onClick={onClose}>
      <article
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="place-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet-head">
          <div>
            <h2 id="place-title">{place.title}</h2>
            <div className="meta">
              <span className="type">{typeName}</span>
              <span className={`badge ${paid ? "paid" : ""}`}>
                {paid ? `Paid${place.feeAmount ? `: ${place.feeAmount}` : ""}` : "Free entry"}
              </span>
            </div>
          </div>
          <button className="close" onClick={onClose} aria-label="Close">
            <Icon name="x" />
          </button>
        </div>

        {place.description && <p className="desc">{place.description}</p>}

        {(place.address || map) && (
          <section className="section">
            <h4>Address</h4>
            <div className="addr-row">
              <p>{place.address || "Address not added"}</p>
              {map && (
                <a className="btn primary" href={map} target="_blank" rel="noopener noreferrer" aria-label="Open in map app">
                  <Icon name="pin" size={18} /> Map
                </a>
              )}
            </div>
          </section>
        )}

        {(contacts.length > 0 || wa || fb) && (
          <section className="section">
            <h4>Contact</h4>
            <div className="btn-row">
              {contacts.map((c, i) => (
                <a key={i} className="btn" href={telUrl(c.phone)} aria-label={`Call ${c.name || c.phone}`}>
                  <Icon name="phone" size={18} /> {c.name || "Call"}
                </a>
              ))}
              {wa && (
                <a className="btn wa" href={wa} target="_blank" rel="noopener noreferrer">
                  <Icon name="chat" size={18} /> WhatsApp
                </a>
              )}
              {fb && (
                <a className="btn fb" href={fb} target="_blank" rel="noopener noreferrer">
                  <Icon name="facebook" size={18} /> Facebook
                </a>
              )}
            </div>
          </section>
        )}

        {place.tags.length > 0 && (
          <section className="section">
            <button className="btn" onClick={() => setShowTags((s) => !s)} aria-expanded={showTags}>
              <Icon name="tag" size={18} /> {showTags ? "Hide tags" : `Show tags (${place.tags.length})`}
            </button>
            {showTags && (
              <div className="tags">
                {place.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}
      </article>
    </div>
  );
}
