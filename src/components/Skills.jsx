function Skills() {
  const skills = {
    "Programming Languages": ["JavaScript", "SQL", "XML/XSLT", "HTML", "CSS"],
    "Frameworks/Libraries": ["React", "Bootstrap", "Node.js", "Tailwind CSS"],
    Tools: ["Git", "GitHub", "VS Code"],
    "Soft Skills": ["Problem-Solving", "Communication", "Teamwork"],
  };

  return (
    <section id="skills" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
