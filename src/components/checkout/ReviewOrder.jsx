import ScrollToTop from "../../layouts/ScrollToTop";
import BillingInfoReview from "./BillingInfoReview";
import ShippingInfoReview from "./ShippingInfoReview";
import OrderSummary from "./OrderSummary";

const ReviewOrder = () => {
  const listStyle =
    "flex space-x-5 justify-between items-center w-full text-base";
  const labelStyle = "text-base font-medium";

  return (
    <section className="w-full col-span-full space-y-6">
      <ScrollToTop />
      <BillingInfoReview labelStyle={labelStyle} listStyle={listStyle} />
      <ShippingInfoReview labelStyle={labelStyle} listStyle={listStyle} />
      <OrderSummary />
    </section>
  );
};

export default ReviewOrder;
