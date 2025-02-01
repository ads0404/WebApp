import { useEffect, useState } from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40rem;
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
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  opacity: 0.5;
`;

const ProjectTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: rgb(250, 250, 250);
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Roboto', sans-serif;
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
    skills: ["AWS", "Python", "PHP", "JavaScript", "HTML/CSS", "UI/UX", "AGILE", "MySQL"],
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
    skills: ["AI", "Machine Learning", "Natural Language Processing", "JavaScript", "UI Design"],
  },
];

const Projects = () => {
  const [inViewProjects, setInViewProjects] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInViewProjects((prev) => {
          const newViewProjects = { ...prev };
          entries.forEach((entry) => {
            newViewProjects[Number(entry.target.id)] = entry.intersectionRatio;
          });
          return newViewProjects;
        });
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
    );

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        {projects.map((project, cardIndex) => {
          const ratio = inViewProjects[cardIndex] || 0;
          const scale = 0.9 + ratio * 0.1;
          const opacity = 0.4 + ratio * 0.6;

          return (
            <ProjectCard
              key={cardIndex}
              id={cardIndex.toString()}
              className="project-card"
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
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
          );
        })}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
