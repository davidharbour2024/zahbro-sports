"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { PromoBar } from "./PromoBar";
import { MainHeader } from "./MainHeader";
import { SearchBar } from "./SearchBar";
import { MainNavigation } from "./MainNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const update = () => setCondensed(window.scrollY > 120);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return <header className={`site-header${condensed ? " is-condensed" : ""}`}><PromoBar/><MainHeader menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((value) => !value)}/><div id="product-search" className="search-layer"><Container><SearchBar/></Container></div><MainNavigation/><MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)}/></header>;
}
