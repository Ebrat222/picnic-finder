import { useMemo, useState } from "react";
import { usePlaces, useCategories } from "../data";
import PlaceModal from "../components/PlaceModal.jsx";
import Icon from "../components/Icon.jsx";

const FEES = [
  ["all", "All"],
  ["free", "Free"],
  ["paid", "Paid"],
];

export default function Home() {
  const places = usePlaces();
  const cats = useCategories();
  const [fee, setFee] = useState("all");
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState(null);

  const catName = useMemo(
    () => Object.fromEntries(cats.items.map((c) => [c.id, c.name])),
    [cats.items]
  );

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return places.items
      .filter((p) => fee === "all" || p.fee === fee)
      .filter((p) => cat === "all" || p.category === cat)
      .filter(
        (p) =>
          !s || [p.title, p.address, ...p.tags].join(" ").toLowerCase().includes(s)
      )
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }, [places.items, fee, cat, q]);

  const openPlace = places.items.find((p) => p.id === openId);
  const filtered = fee !== "all" || cat !== "all" || q.trim() !== "";

  function clearFilters() {
    setFee("all");
    setCat("all");
    setQ("");
  }

  return (
    <>
      <header className="hero">
        <div className="plate">
          <h1>Find a picnic spot</h1>
          <p className="lede">Parks, swimming pools and forests, with entry fee, directions and who to call.</p>
          <div className="search">
            <Icon name="search" size={18} />
            <input
              className="input"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, address or tag"
              aria-label="Search places"
            />
          </div>
        </div>
      </header>

      <main className="wrap">
        <div className="filters">
          <div className="fgroup" role="group" aria-label="Filter by entry fee">
            <span className="fgroup-label">Entry fee</span>
            {FEES.map(([v, label]) => (
              <button key={v} className="chip" aria-pressed={fee === v} onClick={() => setFee(v)}>
                {label}
              </button>
            ))}
          </div>
          <div className="fgroup" role="group" aria-label="Filter by place type">
            <span className="fgroup-label">Place</span>
            <button className="chip" aria-pressed={cat === "all"} onClick={() => setCat("all")}>
              All
            </button>
            {cats.items.map((c) => (
              <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {places.error && (
          <p className="err">Couldn't load places: {places.error}. Check the database rules allow public reads.</p>
        )}
        {places.loading && <p className="count">Loading places…</p>}

        {!places.loading && !places.error && (
          <>
            <p className="count">
              {shown.length} {shown.length === 1 ? "place" : "places"}
            </p>
            {shown.length === 0 ? (
              <div className="empty">
                <p>{filtered ? "No places match these filters." : "No places have been added yet."}</p>
                {filtered && (
                  <button className="btn" onClick={clearFilters}>
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <ul className="list">
                {shown.map((p) => (
                  <li key={p.id}>
                    <button className={`item ${p.fee === "paid" ? "paid" : ""}`} onClick={() => setOpenId(p.id)}>
                      <span className="item-top">
                        <h3>{p.title}</h3>
                        <span className={`badge ${p.fee === "paid" ? "paid" : ""}`}>
                          {p.fee === "paid" ? "Paid" : "Free"}
                        </span>
                      </span>
                      <span className="type">{catName[p.category] || "Other"}</span>
                      {p.address && <p>{p.address}</p>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </main>

      {openPlace && (
        <PlaceModal place={openPlace} typeName={catName[openPlace.category] || "Other"} onClose={() => setOpenId(null)} />
      )}
    </>
  );
}
