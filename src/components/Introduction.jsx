import headshot from "/headshot.png"; // Headshot located in public/

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
            Frontend Developer Crafting Engaging User Experiences
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Hi, I'm Vishal, an aspiring Full-Stack Developer with expertise in
            React, SQL, Problem Solving, HTML, CSS, and JavaScript. I love
            building intuitive and dynamic user interfaces that solve real-world
            problems. My goal is to create seamless digital experiences that
            delight users and drive impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1mlF1DVtgmen2LMpuKeGe1AHnNGigO8xr/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
