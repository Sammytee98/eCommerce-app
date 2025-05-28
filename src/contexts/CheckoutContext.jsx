import { useCallback, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Country } from "country-state-city";
import { useStoreActions } from "easy-peasy";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CheckoutContext = createContext({});

// Billing Input validation
const schema = z.object({
  billFirstName: z
    .string()
    .min(2, { message: "This field must contain at least 2 character(s)" }),
  billLastName: z
    .string()
    .min(2, { message: "This field must contain at least 2 character(s)" }),
  billEmail: z.string().email({ message: "Invalid email address" }),
  billAddress1: z.string().min(1, { message: "This field cannot be empty" }),
  billAddress2: z.string().optional(),
  billCity: z.string().min(1, { message: "This field cannot be empty" }),
  billState: z.string().min(1, { message: "This field cannot be empty" }),
  billCountry: z.string().min(1, { message: "Please select a country" }),
  billZipCode: z.string().min(5, { message: "This field cannot be empty" }),

  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms." }),
  }),

  // Shipping input validation
  sameAsBilling: z.boolean().optional(),

  shipFirstName: z
    .string()
    .min(2, { message: "This field must contain at least 2 character(s)" }),
  shipLastName: z
    .string()
    .min(2, { message: "This field must contain at least 2 character(s)" }),
  shipEmail: z.string().email({ message: "Invalid email address" }),
  shipAddress1: z.string().min(1, { message: "This field cannot be empty" }),
  shipAddress2: z.string().optional(),
  shipCity: z.string().min(1, { message: "This field cannot be empty" }),
  shipState: z.string().min(1, { message: "This field cannot be empty" }),
  shipCountry: z.string().min(1, { message: "Please select a country" }),
  shipZipCode: z.string().min(5, { message: "This field cannot be empty" }),

  //Payment method shema
  paymentMethod: z.enum(["card", "paypal", "cod"], {
    errorMap: () => ({ message: "please select a payment method" }),
  }),
});

export const CheckoutProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    control,
    getValues,
  } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const { errors, isValid, isSubmitting } = useFormState({ control });

  const setCustomerAddress = useStoreActions(
    (action) => action.setCustomerAddress
  );
  const setCustomerCC = useStoreActions((action) => action.setCustomerCC);
  const setUserPaymentMethod = useStoreActions(
    (action) => action.setUserPaymentMethod
  );
  const setTotalPaid = useStoreActions((action) => action.setTotalPaid);
  const clearCartItems = useStoreActions((action) => action.clearCartItems);

  const [orderTotal, setOrderTotal] = useState(0.0);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  // const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    billFirstName: "",
    billLastName: "",
    billEmail: "",
    billAddress1: "",
    billAddress2: "",
    billCity: "",
    billState: "",
    billCountry: "",
    billZipCode: "",
    terms: false,
    sameAsBilling: false,
    shipFirstName: "",
    shipLastName: "",
    shipEmail: "",
    shipAddress1: "",
    shipAddress2: "",
    shipCity: "",
    shipState: "",
    shipCountry: "",
    shipZipCode: "",
  });

  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    cardExp: "",
    cardCVV: "",
  });

  const countries = Country.getAllCountries();
  const title = {
    0: "Billing Info",
    1: "Shipping Info",
    2: "Review & Confirm Order",
    3: "Payment Section",
  };

  const sameAsBilling = watch("sameAsBilling");

  useEffect(() => {
    if (sameAsBilling) {
      setValue("shipFirstName", getValues("billFirstName"));
      setValue("shipLastName", getValues("billLastName"));
      setValue("shipEmail", getValues("billEmail"));
      setValue("shipAddress1", getValues("billAddress1"));
      setValue("shipAddress2", getValues("billAddress2"));
      setValue("shipCity", getValues("billCity"));
      setValue("shipState", getValues("billState"));
      setValue("shipCountry", getValues("billCountry"));
      setValue("shipZipCode", getValues("billZipCode"));
    } else {
      setValue("shipFirstName", "");
      setValue("shipLastName", "");
      setValue("shipEmail", "");
      setValue("shipAddress1", "");
      setValue("shipAddress2", "");
      setValue("shipCity", "");
      setValue("shipState", "");
      setValue("shipCountry", "");
      setValue("shipZipCode", "");
    }
  }, [sameAsBilling]);

  const billingFields = [
    "billFirstName",
    "billLastName",
    "billEmail",
    "billAddress1",
    "billCity",
    "billState",
    "billCountry",
    "billZipCode",
  ];

  const shippingFields = [
    "shipFirstName",
    "shipLastName",
    "shipEmail",
    "shipAddress1",
    "shipCity",
    "shipState",
    "shipCountry",
    "shipZipCode",
  ];
  console.log(getValues("paymentMethod"));

  const watchBillingValues = watch(billingFields);
  const watchShippingValues = watch(shippingFields);

  const isBillingValid = billingFields.every(
    (field, i) => !!watchBillingValues[i] && !errors[field]
  );

  const isShippingValid = shippingFields.every(
    (field, i) => !!watchShippingValues[i] && !errors[field]
  );

  const key = Number(
    Object.entries(title).find(
      ([_, value]) => value === "Review & Confirm Order"
    )?.[0]
  );

  const disablePrev = page === 0;

  const disableNext =
    (page === 0 && !isBillingValid) || (page === 1 && !isShippingValid);
  console.log(disableNext);

  const prevHide = (page === 0 || page > key) && "hidden";

  const nextHide = page >= key && "hidden";

  const continueToPaymentHide =
    title[page] !== "Review & Confirm Order" && "hidden";

  const confirmAndPayButtonHide =
    page !== Object.keys(title).length - 1 && "hidden";

  const handleChange = (e) => {
    const { name, type } = e.target;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };
  const handleSameAsBilling = (e) => {
    console.log(e.target.checked);
    setValue("sameAsBilling", e.target.checked);
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      const raw = value.replace(/\D/g, "").slice(0, 16);
      formattedValue = raw.match(/.{1,4}/g)?.join(" ") || "";
    }

    if (name === "cardExp") {
      let cleaned = value.replace(/\D/g, "").slice(0, 4);

      if (cleaned.length > 2) {
        formattedValue = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
      } else {
        formattedValue = cleaned;
      }
    }

    if (name === "cardCVV") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setCardDetails((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const onSubmit = async (data) => {
    const paymentMethod = getValues("paymentMethod");

    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          setCustomerAddress(data);
          setCustomerCC(cardDetails);
          setUserPaymentMethod(paymentMethod);
          setTotalPaid(orderTotal);

          navigate("/checkout/order-confirmation");
          clearCartItems();
        }, 8000)
      );
    } catch (error) {
      setError("root");
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        countries,
        title,
        page,
        setPage,
        formData,
        setFormData,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        continueToPaymentHide,
        confirmAndPayButtonHide,
        cardDetails,
        handleCardDetailsChange,
        sameAsBilling,
        handleSameAsBilling,
        getValues,
        register,
        handleSubmit,
        onSubmit,
        errors,
        watch,
        setValue,
        isValid,
        isSubmitting,
        orderTotal,
        setOrderTotal,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
