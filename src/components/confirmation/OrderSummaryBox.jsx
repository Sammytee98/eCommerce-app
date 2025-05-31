import { format, addBusinessDays } from "date-fns";
import useCheckoutContext from "../../hooks/useCheckoutContext";
import { motion } from "framer-motion";
import { useStoreState } from "easy-peasy";

const OrderSummaryBox = () => {
  const totalPaid = useStoreState((state) => state.totalPaid);
  const customerAddress = useStoreState((state) => state.customerAddress);
  const customerCC = useStoreState((state) => state.customerCC);
  // const { paymentMethod } = useCheckoutContext();
  const userPaymentMethod = useStoreState((state) => state.userPaymentMethod);

  const orderNumber = "GTS" + Date.now();
  const orderDate = new Date();
  const estimatedDate = addBusinessDays(orderDate, 5);

  const formattedOrderDate = format(orderDate, "MMMM d, yyyy");
  const formattedEstimedDate = format(estimatedDate, "MMMM d, yyyy");

  const { shipEmail } = customerAddress;
  const { cardNumber } = customerCC;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    intial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="animate"
      variants={containerVariants}
      className="p-4 grid grid-cols-1 tablet:space-x-6 space-y-4 tablet:grid-cols-2 bg-gray-100 rounded-md shadow-md"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col space-y-1 text-sm text-gray-500"
      >
        <p>Order Number</p>
        <p className="text-base text-gray-800 font-medium">{orderNumber}</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col space-y-1 text-sm text-gray-500"
      >
        <p>Date Placed</p>
        <p className="text-base text-gray-800 font-medium">
          {formattedOrderDate}
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col space-y-1 text-sm text-gray-500"
      >
        <p>Email</p>
        <p className="text-base text-gray-800 font-medium">{shipEmail}</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col space-y-1 text-sm text-gray-500"
      >
        <p>Total Paid</p>
        <p className="text-base text-gray-800 font-medium">${totalPaid}</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col space-y-1 text-sm text-gray-500"
      >
        <p>Payment Method</p>
        <p className="text-base text-gray-800 font-medium">
          {userPaymentMethod === "paypal"
            ? "Paypal"
            : userPaymentMethod === "cod"
            ? "Cash on Delivery"
            : `Card ending in ${cardNumber.slice(14)}`}
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col space-y-1 text-sm text-gray-500"
      >
        <p>Estimated Delivery</p>
        <p className="text-base text-gray-800 font-medium">
          {`${formattedOrderDate} - ${formattedEstimedDate}`}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default OrderSummaryBox;
