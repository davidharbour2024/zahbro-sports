import { Container } from "@/components/ui/container";

export function PromoBar() {
  return <div className="promo-bar"><Container className="promo-inner"><p><strong>Free UK delivery</strong> on orders over £75 <span aria-hidden="true">/</span> USA shipping available</p><nav aria-label="Utility navigation"><a href="#track">Track order</a><a href="#help">Help</a></nav></Container></div>;
}
