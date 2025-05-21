import ScrollToTop from "../../layouts/ScrollToTop";
import BillingInfoReview from "./BillingInfoReview";
import ShippingInfoReview from "./ShippingInfoReview";
import OrderSummary from "./OrderSummary";

const ReviewOrder = () => {
  const listStyle =
    "flex space-x-5 justify-between items-center w-full text-xs";
  const labelStyle = "text-sm font-medium";

  return (
    <section className="w-full col-span-full space-y-6">
      <ScrollToTop />
      <BillingInfoReview labelStyle={labelStyle} listStyle={listStyle} />
      <ShippingInfoReview labelStyle={labelStyle} listStyle={listStyle} />
      <OrderSummary />

      {/* <div className="w-full bg-gray-100 p-4 rounded-md">

        <hr className="border border-gray-200 my-6" />


        <hr className="border border-gray-200 my-6" />
      </div> */}
    </section>
  );
};

export default ReviewOrder;
