"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { MainHeader } from "./MainHeader";
import { MainNavigation } from "./MainNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { PromoBar } from "./PromoBar";
import { SearchBar } from "./SearchBar";

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

    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${condensed ? " is-condensed" : ""}`}>
      <PromoBar />
      <MainHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
      />
      <div id="product-search" className="search-layer">
        <Container>
          <SearchBar />
        </Container>
      </div>
      <MainNavigation />
      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
