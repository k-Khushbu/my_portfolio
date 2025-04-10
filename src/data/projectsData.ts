const reactogramProjectLink = import.meta.env.VITE_PROJECT_REACTOGRAM;
const ECProjectLink = import.meta.env.VITE_PROJECT_ECWEBSITE;
export const projectsData = [
    {
      title: "Reacto-Gram",
      description:
        "This project is the clone of the available application. Associated with Intern-shala Trainings program Full Stack Development Course. This project build using the following technologies.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      link: reactogramProjectLink,
    },
    {
      title: "E-commerce Website",
      description:
        "This website displays the UI for E-commerce website. Associated with Intern-shala Trainings program Full Stack Development Course. This project build using the following technologies.",
      technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
      link: ECProjectLink,
    },
  ];
  