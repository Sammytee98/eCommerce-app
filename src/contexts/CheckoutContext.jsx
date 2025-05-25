import { useCallback, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Country, State } from "country-state-city";
import { useStoreActions } from "easy-peasy";

const CheckoutContext = createContext({});

export const CheckoutProvider = ({ children }) => {
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
    tacAgreement: false,
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
  const [paymentMethod, setPaymentMethod] = useState({
    card: false,
    paypal: false,
    cod: false,
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

  useEffect(() => {
    if (formData.sameAsBilling) {
      setFormData((prevData) => ({
        ...prevData,
        shipFirstName: prevData.billFirstName,
        shipLastName: prevData.billLastName,
        shipEmail: prevData.billEmail,
        shipAddress1: prevData.billAddress1,
        shipAddress2: prevData.billAddress2,
        shipCity: prevData.billCity,
        shipState: prevData.billState,
        shipCountry: prevData.billCountry,
        shipZipCode: prevData.billZipCode,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        shipFirstName: "",
        shipLastName: "",
        shipEmail: "",
        shipAddress1: "",
        shipAddress2: "",
        shipCity: "",
        shipState: "",
        shipCountry: "",
        shipZipCode: "",
      }));
    }
  }, [formData.sameAsBilling]);

  // Auto-update Country when State changes
  useEffect(() => {
    const allStates = State.getAllStates();

    // For Billing State
    if (formData.billState) {
      const matchedBill = allStates.find(
        (s) => s.name.toLowerCase() === formData.billState.toLowerCase()
      );

      if (matchedBill) {
        const countryName = Country.getCountryByCode(
          matchedBill.countryCode
        )?.name;

        if (countryName && formData.billCountry !== countryName) {
          setFormData((prevData) => ({
            ...prevData,
            billCountry: countryName,
          }));
        }
      }
    }

    // For Shipping State
    if (formData.shipState) {
      const matchedShip = allStates.find(
        (s) => s.name.toLowerCase() === formData.shipState.toLowerCase()
      );

      if (matchedShip) {
        const countryName = Country.getCountryByCode(
          matchedShip.countryCode
        )?.name;

        if (countryName && formData.shipCountry !== countryName) {
          setFormData((prevData) => ({
            ...prevData,
            shipCountry: countryName,
          }));
        }
      }
    }
  }, [formData.billState, formData.shipState]);

  const { billAddress2, sameAsBilling, shipAddress2, ...requiredInputs } =
    formData;

  const canSubmit = [...Object.values(requiredInputs)].every(Boolean);

  const emailValidation = useCallback((value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(value);
    return isValidEmail;
  }, []);

  const canNextPage1 =
    Object.keys(formData)
      .filter((key) => key.startsWith("bill") && key !== "billAddress2")
      .map((key) => formData[key])
      .every(Boolean) && emailValidation(formData.billEmail);

  const canNextPage2 =
    Object.keys(formData)
      .filter((key) => key.startsWith("ship") && key !== "shipAddress2")
      .map((key) => formData[key])
      .every(Boolean) && emailValidation(formData.billEmail);

  const key = Object.entries(title).find(
    ([_, value]) => value === "Review & Confirm Order"
  )?.[0];

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2);

  const prevHide = (page === 0 || page > key) && "hidden";

  // const nextHide = page === Object.keys(title).length - 1 && "invisible";
  const nextHide = page >= key && "hidden";

  // const submitHide = page !== Object.keys(title).length - 1 && "hidden";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setCustomerAddress(formData);
    setCustomerCC(cardDetails);
    setUserPaymentMethod(paymentMethod);
    setTotalPaid(orderTotal);

    navigate("/checkout/order-confirmation");
    clearCartItems();
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
        paymentMethod,
        setPaymentMethod,
        cardDetails,
        handleCardDetailsChange,
        canSubmit,
        handleSubmit,
        orderTotal,
        setOrderTotal,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
