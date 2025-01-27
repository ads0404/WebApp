import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 projects per row */
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  /* For normal screens (above 768px), layout 2 projects on top, 1 spanning below */
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr; /* Two columns for the first row */
    grid-template-rows: auto auto; /* Two rows */
    grid-template-areas:
      "project-1 project-2"
      "project-3 project-3"; /* One project spanning across two columns for the second row */
  }

  /* For smaller screens (force vertical layout) */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column; /* Force vertical layout */
    align-items: center;    /* Center content horizontally */
    gap: 1.5rem;            /* Space between cards */
    grid-template-columns: none; /* Disable grid */
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  position: relative;
  height: auto; /* Allow dynamic height based on content */
  display: flex;
  flex-direction: column;

  /* For smaller screens */
  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust padding to fit better on smaller screens */
    margin-bottom: 1.5rem; /* Space between cards */
    width: 90%; /* Adjust width for smaller screens */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: #333333;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #555555;
  margin-bottom: 1.5rem;
`;

const ProjectLink = styled.a`
  font-size: 1.1rem;
  color: #007BFF;
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
  margin-top: 1rem;
`;

const SkillTag = styled.span`
  background-color: #007BFF;
  color: white;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const Title = styled.h2`
  color: #333333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;

  /* For smaller screens */
  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust title size for smaller screens */
    margin-bottom: 1.5rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>My Projects</Title>
      <ProjectsContainer>
        {/* Project 1 */}
        <ProjectCard style={{ gridArea: 'project-1' }}>
          <ProjectTitle>Full-Stack Web Application: Django & WordPress</ProjectTitle>
          <ProjectDescription>
            This project involved creating a basic homepage with a fully functional WordPress/WooCommerce page, along with a full-stack application where users could sign up artists and link artwork to them. It achieved this by connecting a MySQL database to an EC2 instance, which also hosted a secure web-page using HTML/CSS/Bootstrap.
          </ProjectDescription>
          <ProjectLink href="https://github.com/ads0404/WebDevelopment/tree/main/Django_Files" target="_blank">
            View on GitHub
          </ProjectLink>
          <SkillsList>
            <SkillTag>AWS</SkillTag>
            <SkillTag>Python</SkillTag>
            <SkillTag>PHP</SkillTag>
            <SkillTag>JavaScript</SkillTag>
            <SkillTag>HTML/CSS</SkillTag>
            <SkillTag>UI/UX</SkillTag>
            <SkillTag>AGILE</SkillTag>
            <SkillTag>MySQL</SkillTag>
          </SkillsList>
        </ProjectCard>

        {/* Project 2 */}
        <ProjectCard style={{ gridArea: 'project-2' }}>
          <ProjectTitle>Networking and the Internet of Things</ProjectTitle>
          <ProjectDescription>
            The "Networking and IOT" class laid the foundation for my programming journey, where I learned to build real-world applications like controlling garage doors, alarms, and lighting systems. We integrated physical devices using switch states and sensors, and explored communication protocols like TCP/UDP for data exchange. We also worked with online APIs, integrating them via JSON to display live data, such as weather reports, enhancing the interactivity of our projects.
          </ProjectDescription>
          <SkillsList>
            <SkillTag>Networking</SkillTag>
            <SkillTag>IOT</SkillTag>
            <SkillTag>APIs</SkillTag>
            <SkillTag>JSON</SkillTag>
            <SkillTag>Python</SkillTag>
          </SkillsList>
        </ProjectCard>

        {/* Project 3 (spanning across both columns) */}
        <ProjectCard style={{ gridColumn: 'span 2' }}>
          <ProjectTitle>Ako Aotearoa personalised AI | Internship</ProjectTitle>
          <ProjectDescription>
            Ako Aotearoa is New Zealand's leading educational institute. I led the development of an AI-driven grammar tool aimed at helping foundation and bridging learners by providing a personalised learning experience. The tool utilised AI to customise grammar exercises and feedback, enhancing student engagement and learning outcomes. I also designed and developed the user interface (UI) for the tool using HTML, CSS, JavaScript, and Bootstrap to ensure a responsive and intuitive user experience.
          </ProjectDescription>
          <ProjectDescription>Due to intellectual property concerns, the project must be screenshared locally.</ProjectDescription>
          <SkillsList>
            <SkillTag>AI</SkillTag>
            <SkillTag>Machine Learning</SkillTag>
            <SkillTag>Natural Language Processing</SkillTag>
            <SkillTag>JavaScript</SkillTag>
            <SkillTag>UI Design</SkillTag>
            <SkillTag>Customer Requirements Gathering</SkillTag>
            <SkillTag>HTML/CSS/Bootstrap</SkillTag>
            <SkillTag>Python</SkillTag>
            <SkillTag>Javascript</SkillTag>
            <SkillTag>Scrumban</SkillTag>
          </SkillsList>
        </ProjectCard>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
