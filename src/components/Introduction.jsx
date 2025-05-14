import headshot from "/headshot.png"; // Headshot located in public/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Correct package for faEnvelope
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Introduction() {
  return (
    <section id="introduction" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src={headshot}
            alt="Vishal"
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 mx-auto object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Hi, I'm Vishal! 👋
          </h2>
          <h2 className="text-2xl sm:text-2xl font-bold mb-4">
            Software Developer Crafting Engaging User Experiences 💻✨
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            I love building intuitive and dynamic user interfaces that solve real-world
            problems. My goal is to create seamless digital experiences that
            delight users and drive impact. 🚀
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1pbKawz9lHwS547Vsxni5XN7hfQNk8kkS/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Download Resume
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="mailto:vishalkr.18singh1999@gmail.com"
                className="text-teal-600 hover:text-teal-700 transform hover:scale-110 transition-transform"
                aria-label="Email Vishal"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-singh-1458a1256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-transform"
                aria-label="Vishal's LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href="https://github.com/Vishal-Kumar-Singh-18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 transform hover:scale-110 transition-transform"
                aria-label="Vishal's GitHub"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
