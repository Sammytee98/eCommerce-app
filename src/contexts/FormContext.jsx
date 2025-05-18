import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { Country, State } from "country-state-city";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const countries = Country.getAllCountries();
  const title = {
    0: "Billing Info",
    1: "Shipping Info",
    2: "Review & Confirm Order",
    3: "Payment",
  };
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

  // const canSubmit =
  //   [...Object.values(requiredInputs)].every(Boolean) &&
  //   title[page] === "Review & Confirm";

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
    ([_, value]) => value === "Review & Confirm"
  )?.[0];

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2);

  const prevHide = page === 0 && "hidden";

  // const nextHide = page === Object.keys(title).length - 1 && "invisible";
  const nextHide =
    (title[page] === "Review & Confirm" || page > key) && "hidden";

  // const submitHide = page !== Object.keys(title).length - 1 && "hidden";
  const continueToPaymentHide = title[page] !== "Review & Confirm" && "hidden";

  const handleChange = (e) => {
    const { name, type } = e.target;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormContext.Provider
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
