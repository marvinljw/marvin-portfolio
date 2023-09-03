import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-full bg-red py-3 mt-[5vh]">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center pb-3">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Marvin Leow
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;