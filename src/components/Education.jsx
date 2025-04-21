function Education() {
  const education = [
    {
      institution: "Tezpur University",
      location: "Tezpur, Assam",
      degree: "Master of Computer Applications",
      grade: "CGPA: 8.35",
      duration: "Nov. 2022 – June 2024",
    },
    {
      institution: "Simdega College",
      location: "Simdega, Jharkhand",
      degree: "B.Sc. Computer Applications",
      grade: "Percentage: 82.83%",
      duration: "Aug. 2017 – Oct. 2020",
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
                {edu.institution}
              </h3>
              <p className="text-gray-600 mb-1 text-sm sm:text-base">
                {edu.location}
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-800 mb-2">
                {edu.degree}
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-1">
                <strong>Grade:</strong> {edu.grade}
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Duration:</strong> {edu.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
