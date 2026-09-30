import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";
import { normalizePlace } from "./utils";

export const DEFAULT_CATEGORIES = [
  { id: "park", name: "Park" },
  { id: "swimming_pool", name: "Swimming pool" },
  { id: "forest", name: "Forest" },
];

// Live subscription: the UI updates the moment an admin saves a change.
function useList(path, mapItem) {
  const [state, setState] = useState({ items: [], loading: true, error: null });
  useEffect(() => {
    const unsub = onValue(
      ref(db, path),
      (snap) => {
        const val = snap.val() || {};
        setState({
          items: Object.entries(val).map(([id, v]) => mapItem(id, v)),
          loading: false,
          error: null,
        });
      },
      (err) => setState({ items: [], loading: false, error: err.message })
    );
    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  return state;
}

export const usePlaces = () => useList("places", normalizePlace);

export function useCategories() {
  const s = useList("categories", (id, v) => ({
    id,
    name: v.name || id,
    createdAt: v.createdAt || 0,
  }));
  const fromDb = s.items.length > 0;
  const items = fromDb
    ? [...s.items].sort((a, b) => a.createdAt - b.createdAt)
    : DEFAULT_CATEGORIES;
  return { ...s, items, isDefault: !fromDb && !s.loading };
}
