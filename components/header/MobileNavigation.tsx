import { CloseIcon, ChevronIcon, UserIcon } from "./Icons";
import { navigation } from "./navigation";

export function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  return <><div className={`mobile-scrim${open ? " is-open" : ""}`} onClick={onClose} aria-hidden="true"/><nav id="mobile-navigation" className={`mobile-navigation${open ? " is-open" : ""}`} aria-label="Mobile product categories" aria-hidden={!open}><div className="mobile-nav-head"><span>Shop gear</span><button type="button" onClick={onClose} aria-label="Close navigation menu"><CloseIcon/></button></div><div className="mobile-nav-body">{navigation.map((item) => item.children ? <details key={item.label}><summary>{item.label}<ChevronIcon/></summary><div>{item.children.map((child) => <a onClick={onClose} href={child.href} key={child.label}>{child.label}</a>)}<a onClick={onClose} href={item.href}>View all</a></div></details> : <a onClick={onClose} href={item.href}>{item.label}</a>)}</div><a className="mobile-account" href="#account" onClick={onClose}><UserIcon/>My account</a></nav></>;
}
