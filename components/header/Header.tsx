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
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const shouldCondense = window.scrollY > 120;
      setCondensed(shouldCondense);
      if (!shouldCondense) setSearchOpen(false);
    };
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

  const openSearch = () => {
    setSearchOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("site-search")?.focus();
    });
  };

  return (
    <header
      className={`site-header${condensed ? " is-condensed" : ""}${
        searchOpen ? " search-is-open" : ""
      }`}
    >
      <PromoBar />
      <MainHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
        onSearchOpen={openSearch}
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
