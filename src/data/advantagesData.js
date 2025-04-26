const AdvantagesData = (
  FaShieldAlt,
  FaRegCreditCard,
  FaTruckFast,
  FaCartArrowDown
) => {
  const advantagesData = [
    {
      id: 1,
      icon: FaTruckFast,
      heading: "Fast Delivery",
      content:
        "Get your order quickly with our lightning-fast shipping services, ensuring you receive what you need, when you need it.",
    },
    {
      id: 2,
      icon: FaRegCreditCard,
      heading: "Free Shipping",
      content:
        "Enjoy free shipping on all orders with no hidden fees, making your shopping experience even better.",
    },
    {
      id: 3,
      icon: FaShieldAlt,
      heading: "Secure Checkout",
      content:
        "Shop with confidence knowing your personal information and payments are protected by industry-leading security measures.",
    },
    {
      id: 4,
      icon: FaCartArrowDown,
      heading: "Easy Returns",
      content:
        "Not satisfied? No worries. Our easy returns process makes exchanges and refunds simple and hassle-free.",
    },
  ];

  return advantagesData;
};

export default AdvantagesData;
