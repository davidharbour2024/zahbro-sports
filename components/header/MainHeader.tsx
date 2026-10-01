import { Container } from "@/components/ui/container";
import { BagIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from "./Icons";

const Action = ({ href, label, children, mobileHidden = false }: { href: string; label: string; children: React.ReactNode; mobileHidden?: boolean }) => <a className={`header-action${mobileHidden ? " header-action--optional" : ""}`} href={href} aria-label={label}>{children}<span>{label}</span></a>;

export function MainHeader({ menuOpen, onMenuToggle, onSearchOpen }: { menuOpen: boolean; onMenuToggle: () => void; onSearchOpen: () => void }) {
  return <div className="brand-row"><Container className="brand-row-inner"><button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={onMenuToggle}><MenuIcon/></button><a className="zahbro-logo" href="/" aria-label="Zahbro Sports home"><span className="logo-mark" aria-hidden="true">Z</span><span className="logo-words"><strong>Zahbro</strong><small>Sports</small></span></a><div className="header-actions"><button className="mobile-search-link" type="button" onClick={onSearchOpen} aria-label="Open product search" aria-controls="product-search"><SearchIcon/></button><Action href="#account" label="Account"><UserIcon/></Action><Action href="#wishlist" label="Wishlist" mobileHidden><HeartIcon/></Action><Action href="#cart" label="Cart"><span className="cart-icon"><BagIcon/><b aria-label="0 items in cart">0</b></span></Action></div></Container></div>;
}
