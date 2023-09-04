import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isABoveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const alertMessage = (e) => {
    let text = "Would you like to download Marvin's Resume?"
    let confirmVal = window.confirm(text);
    if (confirmVal === true) {
      return true
    } else {
      e.preventDefault();
    }
  }

  return (
    <section id="skills" className="skillspage mb-[12vh]">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-32 mt-32">
        <motion.div
          className="md:w-[40vw]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-5 mb-7 font-playfair">
            This is a very brief summary of my skillsets that I have had experience in projects or my internships.
          </p>
          <a href="assets/marvinleow_resume.pdf" onClick={(e) => alertMessage(e)} className="font-playfair bg-red py-2 px-4 rounded" download>
            Click here to download my Resume!
          </a>
          
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isABoveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="skills h-[100%] md:flex md:justify-between gap-20 font-playfair">
        {/* Programming Languages */}
        <motion.div
          className="md:w-1/3 mt-[8vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10 h-32">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-1">
                Programming Languages
              </p>
            </div>
            <div className="w-1/2 md:w-2/3 h-32 bg-blue absolute right-0 top-0 z-[-1]" />

            <p className="mt-[3vh] md:mt-[5vh] text-md">
              <p> <span className="font-semibold text-blue">Development:</span> Python, Java, JavaScript, Elixir </p>
              <p> <span className="font-semibold text-blue">Data-related:</span>  Python, R, MySQL, PostgreSQL</p>  
            </p>
          </div>
        </motion.div>

        {/* Data-related */}
        <motion.div
          className="md:w-1/3 mt-[8vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10 h-32">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Data-related
              </p>
            </div>
            <div className="w-1/2 md:w-2/3 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            <p className="mt-[3vh] md:mt-[5vh] text-md">
            <p><span className="font-semibold text-yellow">Data Visualisation:</span> Tableu, Excel, Matplotlib, Seaborn </p>
            <p><span className="font-semibold text-yellow">Data Manipulation and Cleaning:</span> Handling missing data, outliers with pandas </p>
            <p><span className="font-semibold text-yellow">Statistical Analysis:</span> Regression Analysis, ANOVA, Hypothesis testing </p>
            <p><span className="font-semibold text-yellow">Machine Learning:</span> Linear/Multi-Regression, Classification, Convolutional Neural Network, Random Forest, Support Vector Machine, K-Means Clustering, XGBoost, Learning-to-Rank Model </p>

            </p>
          </div>
        </motion.div>

        {/* Web Development */}
        <motion.div
          className="md:w-1/3 mt-[8vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10 h-32">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-2/3 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            <p className="mt-[3vh] md:mt-[5vh] text-md">
            <p><span className="font-semibold text-red">Frontend:</span> ReactJS, VueJS, Tkinter, HTML, CSS, Phoenix Frontend</p>
            <p><span className="font-semibold text-red">Backend:</span> Firebase, Phoenix Backend</p>
            <p><span className="font-semibold text-red">Database:</span> MySQL</p>
            <p><span className="font-semibold text-red">Others:</span> Agile(SCRUM), Confluence, Jiras, Git, Docker</p>
            </p>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default MySkills;
