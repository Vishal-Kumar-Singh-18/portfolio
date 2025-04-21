function About() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          About Me
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            I'm a Frontend Developer with a passion for creating user-centric
            web applications. My journey into tech started with a curiosity for
            how websites work, leading me to master tools like React, Node.js,
            and Next.js. I thrive on solving complex problems and delivering
            pixel-perfect designs.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Outside of coding, I enjoy playing sports, started a new habit of
            reading books. My development philosophy is simple: write clean,
            maintainable code and always prioritize the user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
