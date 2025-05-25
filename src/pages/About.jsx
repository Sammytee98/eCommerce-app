import { motion } from "framer-motion";
import Hero from "../components/about/Hero";
import Story from "../components/about/Story";
import Values from "../components/about/Values";
import Commitment from "../components/about/Commitment";
import CTA from "../components/about/CTA";

const About = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="font-oswald pb-10 bg-gray-50"
    >
      <Hero />
      <Story />
      <Values />
      <Commitment />
      <CTA />
    </motion.article>
  );
};

export default About;
