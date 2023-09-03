import { useEffect } from "react";
import Slider from "../components/Slider";
import LineGradient from "../components/LineGradient";


const PixiumProject = () => {
  const items = [
    {
      title: "",
      url: "../assets/projects/pixium_req.mp4",
      content: [],
    },{
        title: "",
        url: "../assets/projects/pixium_req.mp4",
        content: [],
      }
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page h-full mt-[12vh] md:flex md:justify-center">
      <Slider items={items} width={"md:w-[30vw]"} height={"100%"} isAbout={false} />
      <div className="text-box font-playfair md:w-1/2 h-full mx-[5vw]">
        <p className="font-semibold text-3xl mt-[1vh] mb-[2vh]">
          Room Booking System -{" "}
          <span className="text-red">Pixium Digital Internship</span>
        </p>
        <LineGradient width="1/2" />

        <p className="mt-[4vh] text-md font-opensans">
          <p>
            In this project, there are three roles: Requestor, Admin and Staff.
            The 1st video showcases the features of a Requestor and the 2nd
            video showcases the features of an Admin.
          </p>
          <br />
          <p>
            {" "}
            I took one month to learn the new language, Elixir and the Phoenix
            framework through lots of reading and practising. After my 6-month
            internship, I have successfully built this application from scratch
            which I am very proud of. Builting this application has taught me a
            lot in terms of frontend, backend development, how to build an
            efficient and reuseable code as well as quality software engineering
            practices.
          </p>

          {/* Room Booking and Management */}
          <div className="feature-chat mt-5">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Feature 1:</span> Room Booking &
              Management
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Requestor are able to select date and time and book a room
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Admins are able to edit, create and delete rooms
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Admins are able add specific locations on Google Maps directly
              with the exact lat and lng
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Requestor are able to select date and time and book a room
            </li>
          </div>

          {/* Announcement */}
          <div className="feature-chat mt-5">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Feature 2:</span> Announcement
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Admin are able to view and create Announcement
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              These announcements will be displayed in real time without the
              need for refresh with the use of PubSub
            </li>
          </div>

          {/* Report */}
          <div className="feature-chat mt-5">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Feature 3:</span> Report
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Admins are able to view the overall statistics of the rooms that
              are booked
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Admins are able filter specfic rooms to see statistics accordingly{" "}
            </li>
          </div>
        </p>
      </div>
    </div>
  );
};

export default PixiumProject;
