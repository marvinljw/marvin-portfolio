import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage: { setSelectedPage } }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 "
    >
      {/*  IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-24">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20
                            before:rounded-t-[400px] before:w-[29vw] before:h-full
                            before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:scale-110 transition duration-500 z-10 w-full
                                max-w-[35vw] md:max-w-[29vw] rounded-t-[400px]"
              src="assets/DSC09687.jpg"
            />
          </div>
        ) : (
          <div>
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
              src="assets/DSC09687.jpg"
            />
          </div>
        )}
      </div>

      {/* MAIN SECTION  */}
      <div className="z-30 basis-1/2 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Marvin {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 pl-2 pt-2
                            xs:before:content-brush before:absolute before:-left-[25px]
                            before:-top-[70px] before:z-[-1]"
            >
              Leow
            </span>
          </p>

          <p className="mt-10 mb-8 text-md font-opensans text-center md:text-start">
            Hello there! I have created this website using ReactJS for learning
            and also to tell you more about myself. Welcome to my life here!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <div className="font-opensans mt-5">
          <p>Mobile: +65 9696 2707</p>
          <p>Email: marvin.leow999@gmail.com</p>
          <p>City: Singapore</p>
        </div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
