import { useEffect } from "react";
import Slider from "../components/Slider";
import LineGradient from "../components/LineGradient";

const MyTeamProject = () => {
  const items = [
    {
      title: "",
      url: "../assets/projects/",
      content: [],
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page h-full mt-[14vh] md:flex md:justify-center">
      <Slider
        items={items}
        width={"md:w-[30vw]"}
        height={"100%"}
        isAbout={false}
      />
      <div className="text-box font-playfair md:w-1/2 h-full mx-[5vw]">
        <p className="font-semibold text-3xl mt-[1vh] mb-[2vh]">
          MyTeam -{" "}
          <span className="text-red">Project Management Applicaiton</span>
        </p>
        <LineGradient width="1/2" />

        <p className="mt-[3vh] text-sm font-opensans">
          <div className="flex justify-around">
            <a
              className="bg-red rounded-md cursor-pointer p-2 hover:bg-blue inline-flex items-center"
              href="https://github.com/hewtungyuen/MyTeam"
            >
              {" "}
              CodeBase{" "}
            </a>
            <a
              className="bg-red rounded-md cursor-pointer p-2 hover:bg-blue inline-flex items-center"
              href="https://docs.google.com/document/d/1NYOZHW3doMqW5vzDhjHEOdfrmdiC0RHoX0wmGJR5YXA/edit?usp=sharing"
            >
              Report
            </a>
            <a
              className="bg-red rounded-md cursor-pointer p-2 hover:bg-blue inline-flex items-center"
              href="https://myteam-b976d.web.app"
            >
              Deployed App
            </a>
          </div>

          <br />
          <p>
            {" "}
            The project was established to improve the management of work and
            the distribution of tasks within our BT3103 school project. This
            project consists of 5 team members and follows the SCRUM Agile
            methodology with weekly standups and sprints. We are pleased to note
            that we received an outstanding A+ grade for this module at NUS. The
            techstack that we used are VueJs, HTML, CSS and Firebase.
          </p>

          {/* Room Booking and Management */}
          <div className="feature-chat mt-5">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Key Learning 1:</span> SCRUM Agile
              Methodology
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Conducted daily standups, bi-weekly sprints and retrospectives to
              understand the full process software development lifecycle
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Carefully translated our project requirements into well-defined
              technical specifications, facilitating efficient allocation to
              developers and ultimately ensuring the fulfillment of user
              stories.
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Understood the importance of SCRUM iterative nature where it
              allows effective time management, continuous feedbacks and
              opportunities to enhance processes leading to the project success
            </li>
          </div>

          {/* Announcement */}
          <div className="feature-chat mt-5">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Key Learning 2:</span> Frontend Development
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Learnt new valuable tips and honed my CSS and javascript skills as I implemented the design directly from Figma
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Understood the significance of software architecture and the value
              of reusable components. As our application becomes increasingly
              complex, these elements will not only assist me but also benefit
              others in achieving a more comprehensive understanding.
            </li>
          </div>

          {/* Report */}
          <div className="feature-chat mt-5 mb-[10vh]">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Key Learning 3:</span> Backend Development
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Learnt how to set up firebase and connect to Vue.
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Created the ERD diagrams to ensure data integrity, clarity and visualisation.
            </li>
          </div>
        </p>
      </div>
    </div>
  );
};

export default MyTeamProject;
