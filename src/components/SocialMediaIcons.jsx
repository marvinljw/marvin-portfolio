const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-7 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="http://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/marvinljw"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="http://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="http://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
