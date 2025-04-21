function Experience() {
    const experiences = [
      {
        title: 'Frontend Developer',
        company: 'Clinicea Healthcare India Private Limited',
        location: 'Remote',
        duration: 'Aug. 2024 – Present',
        responsibilities: [
          'Built a task management app with drag-and-drop functionality for efficient task handling',
          'Resolved client issues using XSLT and XML for tailored solutions',
          'Added multilingual support to Clinicea app, improving accessibility',
          'Tested Clinicea to enhance UX and fix bugs pre-release',
          'Created articles and Supademo videos to guide clients on Clinicea features',
        ],
      },
    ];
  
    return (
      <section id="experience" className="py-12 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Experience</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">{exp.title}</h3>
                    <p className="text-base sm:text-lg font-medium text-gray-800 mb-1">{exp.company}</p>

                  </div>
                  <div className="mt-4 sm:mt-0 sm:text-right">
                    <p className="text-sm sm:text-base text-gray-700">{exp.duration}</p>
                    <p className="text-sm sm:text-base text-gray-600">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      {responsibility}
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
  
  export default Experience;