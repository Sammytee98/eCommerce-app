import { motion } from "framer-motion";
import Hero from "../components/contact/Hero";
import InfoCards from "../components/contact/InfoCards";
import ContactForm from "../components/forms/ContactForm";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import ScrollToTop from "../layouts/ScrollToTop";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setContactFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAllInputField = Object.values(contactFormData).every(Boolean);

    if (!isAllInputField) {
      return;
    }

    setIsMessageSent(true);
    setContactFormData((prevData) => ({
      ...prevData,
      fullName: "",
      email: "",
      subject: "",
      message: "",
    }));

    setTimeout(() => {
      setIsMessageSent(false);
    }, 8000);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="font-oswald pb-10 bg-gray-50 space-y-10"
    >
      {isMessageSent && (
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-14 flex items-center justify-center space-x-2 border-b-2 border-b-orange-500 bg-gray-50 shadow"
        >
          <ScrollToTop />
          <FaCircleCheck className="text-green-600 text-base" />
          <span>Your Message has been sent successfully.</span>
        </motion.section>
      )}

      <Hero />
      <InfoCards />
      <ContactForm
        contactFormData={contactFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </motion.main>
  );
};

export default Contact;
