import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import Slider from "../components/Slider";

const About = () => {
  return (
    <section id="about" className="pt-20 pb-48 ">
      {/* HEADINGS */}
      <motion.div
        className="md:w-6/7 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            ABOUT<span className="text-red"> ME</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <div className="mt-[5vh]">
            <Slider />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
