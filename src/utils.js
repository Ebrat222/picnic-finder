// Country code used when a WhatsApp number is written in local format (01XXXXXXXXX).
export const DEFAULT_COUNTRY_CODE = "880";

// Realtime Database turns arrays into objects; this brings them back.
export function toArr(v) {
  if (!v) return [];
  return (Array.isArray(v) ? v : Object.values(v)).filter(Boolean);
}

export function normalizePlace(id, raw) {
  return {
    id,
    title: "",
    description: "",
    category: "",
    fee: "free",
    feeAmount: "",
    address: "",
    mapCode: "",
    whatsapp: "",
    facebook: "",
    ...raw,
    contacts: toArr(raw.contacts),
    tags: toArr(raw.tags),
  };
}

// Accepts a Google Maps link, "lat,lng", a Plus Code, or a place name.
export function mapUrl(code) {
  const c = (code || "").trim();
  if (!c) return null;
  if (/^https?:\/\//i.test(c)) return c;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c)}`;
}

export function telUrl(phone) {
  return `tel:${(phone || "").replace(/[^\d+]/g, "")}`;
}

export function waUrl(number) {
  let d = (number || "").replace(/\D/g, "");
  if (!d) return null;
  if (d.startsWith("0")) d = DEFAULT_COUNTRY_CODE + d.slice(1);
  return `https://wa.me/${d}`;
}

// Accepts a full link, a page username, or a numeric profile ID.
export function fbUrl(v) {
  const s = (v || "").trim();
  if (!s) return null;
  if (/^https?:\/\//i.test(s)) return s;
  if (/^\d+$/.test(s)) return `https://www.facebook.com/profile.php?id=${s}`;
  return `https://www.facebook.com/${s.replace(/^@/, "")}`;
}
