import { useEffect, useState } from "react";
import styled from "styled-components";

// Define styled components directly with font styling
const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Roboto', sans-serif; /* Apply font-family directly here */
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40rem; /* 1200px in rem */
  margin: 0 auto;
  width: 100%;

  @media (min-width: 48rem) {
    width: 80%;
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
  text-align: left;
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  font-family: 'Roboto', sans-serif; /* Apply font-family here as well */
`;

const ProjectTitle = styled.h3`
  font-family: 'Poppins', sans-serif; /* Title font-family */
  font-size: 2rem;
  color: rgb(250, 250, 250);
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Roboto', sans-serif; /* Apply font-family to description */
  font-size: 1.2rem;
  color: rgb(167, 167, 167);
  margin-bottom: 2rem;
`;

const ProjectLink = styled.a`
  font-size: 1.1rem;
  color: #e6af2e;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const SkillTag = styled.span`
  background-color: #007bff;
  color: white;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif; /* Title font-family */
  color: rgb(255, 255, 255);
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: center;

  @media (max-width: 48rem) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

type Project = {
  title: string;
  description: string;
  link: string;
  skills: string[];
};

const projects: Project[] = [
  {
    title: "Full-Stack Web Application: Django & WordPress",
    description:
      "This project involved creating a basic homepage with a fully functional WordPress/WooCommerce page, along with a full-stack application where users could sign up artists and link artwork to them. It achieved this by connecting a MySQL database to an EC2 instance, which also hosted a secure web-page using HTML/CSS/Bootstrap.",
    link: "https://github.com/ads0404/WebDevelopment/tree/main/Django_Files",
    skills: [
      "AWS",
      "Python",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "UI/UX",
      "AGILE",
      "MySQL",
    ],
  },
  {
    title: "Networking and the Internet of Things",
    description:
      "The 'Networking and IOT' class laid the foundation for my programming journey, where I learned to build real-world applications like controlling garage doors, alarms, and lighting systems. We integrated physical devices using switch states and sensors, and explored communication protocols like TCP/UDP for data exchange. We also worked with online APIs, integrating them via JSON to display live data, such as weather reports, enhancing the interactivity of our projects.",
    link: "",
    skills: ["Networking", "IOT", "APIs", "JSON", "Python"],
  },
  {
    title: "Ako Aotearoa personalised AI | Internship",
    description:
      "Ako Aotearoa is New Zealand's leading educational institute. I led the development of an AI-driven grammar tool aimed at helping foundation and bridging learners by providing a personalised learning experience. The tool utilised AI to customise grammar exercises and feedback, enhancing student engagement and learning outcomes. I also designed and developed the user interface (UI) for the tool using HTML, CSS, JavaScript, and Bootstrap to ensure a responsive and intuitive user experience. Due to intellectual property concerns, the project must be screenshared locally.",
    link: "",
    skills: [
      "AI",
      "Machine Learning",
      "Natural Language Processing",
      "JavaScript",
      "UI Design",
      "Customer Requirements Gathering",
      "HTML/CSS/Bootstrap",
      "Python",
      "Scrumban",
    ],
  },
];

const Projects = () => {
  const [inViewProjects, setInViewProjects] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewProjects((prev) => new Set(prev.add(Number(entry.target.id)))); 
          } else {
            setInViewProjects((prev) => {
              const newSet = new Set(prev);
              newSet.delete(Number(entry.target.id));
              return newSet;
            });
          }
        });
      },
      { threshold: 0.2 } // Trigger when a smaller portion is visible
    );

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  const getScaleFromIntersectionRatio = (intersectionRatio: number) => {
    return 0.8 + (intersectionRatio * 0.2); // Scale from 0.8 to 1.0
  };

  return (
    <ProjectsSection id="projects">
      <Title>My Projects</Title>
      <ProjectsContainer>
        {projects.map((project, cardIndex: number) => (
          <ProjectCard
            key={cardIndex}
            id={cardIndex.toString()}
            className={`project-card ${inViewProjects.has(cardIndex) ? "in-view" : ""}`}
            style={{
              transform: inViewProjects.has(cardIndex)
                ? `scale(${getScaleFromIntersectionRatio(0.5)})` // Scale based on intersection ratio
                : "scale(0.8)", // Cards start smaller when not in view
            }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            {project.link && (
              <ProjectLink href={project.link} target="_blank">
                View on GitHub
              </ProjectLink>
            )}
            <SkillsList>
              {project.skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillsList>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
