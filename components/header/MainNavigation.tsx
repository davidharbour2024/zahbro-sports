import { Container } from "@/components/ui/container";
import { ChevronIcon } from "./Icons";
import { navigation } from "./navigation";

export function MainNavigation() {
  return <nav className="main-navigation" aria-label="Product categories"><Container><ul>{navigation.map((item) => <li key={item.label} className={item.children ? "has-submenu" : ""}>{item.children ? <details><summary>{item.label}<ChevronIcon/></summary><div className="nav-dropdown"><p>Shop {item.label}</p>{item.children.map((child) => <a href={child.href} key={child.label}>{child.label}</a>)}<a className="view-all" href={item.href}>View all {item.label}</a></div></details> : <a className={item.label === "Deals" ? "nav-deal" : ""} href={item.href}>{item.label}</a>}</li>)}</ul></Container></nav>;
}
