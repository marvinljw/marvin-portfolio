import { useEffect } from "react";
import Slider from "../components/Slider";
import LineGradient from "../components/LineGradient";

const FraudProject = () => {
  const items = [
    {
      title: "",
      url: "../assets/projects/carfraud.webp",
      content: [],
    },
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page h-full mt-[12vh] md:flex md:justify-center">
      <Slider
        items={items}
        width={"md:w-[30vw]"}
        height={"100%"}
        isAbout={false}
      />
      <div className="text-box font-playfair md:w-1/2 h-full mx-[5vw]">
        <p className="font-semibold text-3xl mt-[1vh] mb-[2vh]">
          Car Insurance Fraud Detection -{" "}
          <span className="text-red">Predictive Models</span>
        </p>
        <LineGradient width="1/2" />

        <p className="mt-[3vh] text-sm font-opensans">
          <div className="flex justify-around">
            <a
              className="bg-red rounded-md cursor-pointer p-2 hover:bg-blue inline-flex items-center"
              href="https://docs.google.com/document/d/1wi7MzmPW7tb34IdDI6IYKuMCgbrdt8zswH5trHH2ATo/edit?usp=sharing"
            >
              Documentation
            </a>
            <a
              className="bg-red rounded-md cursor-pointer p-2 hover:bg-blue inline-flex items-center"
              href="https://github.com/hewtungyuen/car-insurance-fraud-BT4012"
            >
              {" "}
              CodeBase{" "}
            </a>
          </div>


          {/* Room Booking and Management */}
          <div className="feature-chat mt-5">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Step 1:</span> Cleaning and
              Preprocessing
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Checked for NA or illogical data points with panda profiling to
              get a better overview.
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Train-test-split in order to avoid potential data leakage.
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Conducted correlation analysis to avoid multicollinearity.
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Feature encoding (one-hot-encoding) and Normalisation for Age.
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              As fraud cases are significantly lesser than fraud cases, we had
              to perform oversampling and undersampling using SMOTENN.
            </li>
          </div>

          {/* Announcement */}
          <div className="feature-chat mt-5">
            <p className="font-semibold text-xl mb-2">
              <span className="text-red">Step 2:</span> Models
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              Each of us did one/two models. We evaluated the data with
              one-class SVM, Logistic Regression, K-neighbours classifier,
              Decision tree, Random Forest, XGBoost.
            </li>
          </div>

          {/* Report */}
          <div className="feature-chat mt-5 mb-[10vh]">
            <p className="font-semibold text-xl mb-2 ">
              <span className="text-red">Step 3:</span> Evaluation Methods
            </p>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              We first evaluated with recall as the objective function. However,
              the precision score is really low, indicating that most of them
              are false postive.
            </li>
            <li className="list-none before:content-['\27A4'] before:mr-5">
              We then evaluated with F score where beta is 2 indicating that
              recall is twice as important as precision. In this context, recall
              is more important so as to flag out more true positive cases.
            </li>
          </div>
        </p>
      </div>
    </div>
  );
};

export default FraudProject;
