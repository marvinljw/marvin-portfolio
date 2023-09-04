import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, content, url, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <Link to={link}>
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{content}</p>
        </div>
        <div className="image-box h-[35vh] flex justify-center object-scale-down	">
          <img
            src={url}
            alt={projectTitle}
            className="h-full w-full object-contain"
          />
        </div>
      </motion.div>
    </Link>
  );
};

const Projects = (setSelectedPage) => {
  return (
    <section id="projects" className="projects py-20">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Software Development Projects
          </div>
          <Project
            title="Room-Booking System"
            content="May-Oct 2022"
            url="../assets/projects/pixium-logo.jpg"
            link="/pixium"
          />
          <Project
            title="Project Management Web Application"
            content="Jan-Apr 2022"
            url="../assets/projects/MyTeam.png"
            link="/myteam"
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Analytics Project
          </div>

          {/* ROW 2 */}
          <Project
            title="Car Insurance Fraud Detection"
            content="Aug-Nov 2022"
            url="../assets/projects/carfraud.webp"
            link="/fraudproject"
          />
          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
