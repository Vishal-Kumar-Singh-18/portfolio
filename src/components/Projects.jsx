import project1 from "../assets/project1.png"; // Blood Bank Management System screenshot in src/assets/
import project2 from "../assets/project2.jpg"; // Todo List App screenshot in src/assets/

function Projects() {
  const projects = [
    {
      title: "Blood Bank Management System",
      overview:
        "A comprehensive system to manage blood donations, inventory, and distribution using the MERN stack.",
      role: "Lead Frontend Developer",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "User interfaces for donors, hospitals, and organizations",
        "Real-time inventory tracking",
        "Secure authentication",
        "Comprehensive administrative control",
      ],
      demo: "https://blood-bank-management-system-c7po.onrender.com/login",
      github:
        "https://github.com/Vishal-Kumar-Singh-18/Blood-bank-management-system",
      image: project1,
    },
    {
      title: "Todo List App",
      overview:
        "A To-Do list application for efficient task management with localStorage persistence.",
      role: "Frontend Developer",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Add, delete, and mark tasks as complete",
        "Task persistence using localStorage",
        "User-friendly interface",
        "Optimized performance",
      ],
      demo: "https://vishal-kumar-singh-18.github.io/Todo-list-App-in-JS/",
      github: "https://github.com/Vishal-Kumar-Singh-18/Todo-list-App-in-JS",
      image: project2,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {project.overview}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Features:</strong> {project.features.join(", ")}
                </p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
