import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  /* Translucent white background */
  background-color: rgba(255, 255, 255, 0.3); /* White with 80% opacity */
`;


const AboutText = styled.p`
  color: #333333;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const SectionTitle = styled.h3`
  color: #333333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;


const About = () => (
  <AboutSection id="about">
    <AboutContainer>
      {/* Section 1: Personal Introduction */}
      <ContentBox>
        <SectionTitle>About Me</SectionTitle>
        <AboutText>
          I’m a dedicated developer with a strong passion for clean, efficient code and user-centred design. With hands-on experience in AWS, database management, and customer requirements gathering, I specialise in crafting dynamic, high-performance web applications using React, TypeScript, and the latest web technologies.
        </AboutText>
      </ContentBox>
      
      {/* Section 2: Internship at Ako Aotearoa */}
      <ContentBox>
        <SectionTitle>Internship with Ako Aotearoa</SectionTitle>
        <AboutText>
          I completed a 300-hour internship with Ako Aotearoa, where I contributed to the development of an AI foundation and a bridging learner tool aimed at enhancing personalised grammar learning. This experience allowed me to work with cutting-edge technologies while applying my skills in real-world applications, particularly in education technology.
        </AboutText>
      </ContentBox>

      {/* Section 3: Freelance Developer at Nomino AI */}
      <ContentBox>
        <SectionTitle>Freelance Developer at Nomino AI</SectionTitle>
        <AboutText>
          As a freelance developer for Nomino AI, I specialise in optimising code solutions to maximise efficiency and drive profitability. I work alongside other skilled developers to create high-quality solutions while ensuring that client requirements are met, contributing to seamless and impactful development processes. This has allowed me to strengthen my skills in dealing one on one with clients and their requirements in a software development environment.
        </AboutText>
      </ContentBox>
    </AboutContainer>
  </AboutSection>
);

export default About;
