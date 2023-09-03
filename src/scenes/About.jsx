import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import Slider from "../components/Slider";

const About = () => {
  const items = 
  [{
    title: "Am a Student!",
    url: "../assets/front_img.jpg",
    content: [
      "Graduating from National University of Singapore on May 2024",
      "Am an independent, fast Learner and hard worker",
      "My motto in life is to be 1% every single day and enjoy the journey",
    ],
  },
  {
    title: "Love Adventures!",
    url: "../assets/paragliding.jpg",
    content: [
      "Went to paraglide in Chamonix, France on Feb 2023",
      "Went to fly a glider in Sweden on April 2023",
      "Adventures brings the thrills and happiness for me",
      "Open to overseas opportunities if possible!",
    ],
  },
  {
    title: "Love talking to people!",
    url: "../assets/friends.jpg",
    content: [
      "Made lots of loving friends in Delft, Netherlands on my exchange",
      "Love to have meaningful discussion to generate new innovative ideas",
      "Everyone is unique and has their special story to tell :D",
    ],
  },
  { title: "I Love Nature", url: "../assets/nature.jpg", content: ["xxxx"] },
]
  return (
    <section id="about" name="about" className="pt-20 pb-48 ">
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

        <div className="mt-[5vh] flex justify-center">
            <Slider items={items} width={"w-[90%]"} height={"100%"} isAbout={true}/>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
