import { Container } from "@/components/ui/container";
import { BagIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from "./Icons";

const Action = ({ href, label, children, mobileHidden = false }: { href: string; label: string; children: React.ReactNode; mobileHidden?: boolean }) => <a className={`header-action${mobileHidden ? " header-action--optional" : ""}`} href={href} aria-label={label}>{children}<span>{label}</span></a>;

export function MainHeader({ menuOpen, onMenuToggle }: { menuOpen: boolean; onMenuToggle: () => void }) {
  return <div className="brand-row"><Container className="brand-row-inner"><button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={onMenuToggle}><MenuIcon/></button><a className="zahbro-logo" href="/" aria-label="Zahbro Sports home"><span className="logo-mark" aria-hidden="true">Z</span><span className="logo-words"><strong>Zahbro</strong><small>Sports</small></span></a><div className="header-actions"><a className="mobile-search-link" href="#product-search" aria-label="Go to product search"><SearchIcon/></a><Action href="#account" label="Account"><UserIcon/></Action><Action href="#wishlist" label="Wishlist" mobileHidden><HeartIcon/></Action><Action href="#cart" label="Cart"><span className="cart-icon"><BagIcon/><b aria-label="0 items in cart">0</b></span></Action></div></Container></div>;
}
