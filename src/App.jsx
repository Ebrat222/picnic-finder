import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";

// Hash routing (#/admin) keeps GitHub Pages happy: no server rewrites needed.
function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHash();
  return hash.startsWith("#/admin") ? <Admin /> : <Home />;
}
