import type { SVGProps } from "react";

const Icon = ({ children, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>
);
export const SearchIcon = (props: SVGProps<SVGSVGElement>) => <Icon {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Icon>;
export const UserIcon = (props: SVGProps<SVGSVGElement>) => <Icon {...props}><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></Icon>;
export const HeartIcon = (props: SVGProps<SVGSVGElement>) => <Icon {...props}><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/></Icon>;
export const BagIcon = (props: SVGProps<SVGSVGElement>) => <Icon {...props}><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></Icon>;
export const MenuIcon = (props: SVGProps<SVGSVGElement>) => <Icon {...props}><path d="M3 6h18M3 12h18M3 18h18"/></Icon>;
export const CloseIcon = (props: SVGProps<SVGSVGElement>) => <Icon {...props}><path d="m5 5 14 14M19 5 5 19"/></Icon>;
export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => <Icon {...props}><path d="m8 10 4 4 4-4"/></Icon>;
