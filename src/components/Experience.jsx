function Experience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Clinicea Healthcare India Private Limited',
      location: 'Remote',
      duration: 'Aug. 2024 – Present',
      responsibilities:
        'Implemented intuitive drag-and-drop task management and multilingual features in Clinicea, boosting user engagement. Provided XSLT/XML client support and user guidance via Supademo. 💡',
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Experience 
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-gray-800 mb-1">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <p className="text-sm sm:text-base text-gray-700">{exp.duration}</p>
                  <p className="text-sm sm:text-base text-gray-600">{exp.location}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700">{exp.responsibilities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;