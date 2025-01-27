// src/components/Hero.tsx

import styled from 'styled-components';

const Button = styled.a`
  background-color: #1a73e8;  /* Deep blue */
  color: white;
  padding: 0.8rem 2rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1558b0;  /* Darker blue on hover */
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  background-color: transparent; /* Remove white background to show Vanta */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #666666;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6; /* Improve readability */
`;

const TechStack = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  color: #555555;
`;

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <h1 style={{ color: '#333333', fontSize: '3rem', marginBottom: '1rem' }}>
        Hi, I'm Alex Stewart
      </h1>
      <Paragraph>
        I hold a Bachelor of Information and Communication Technologies, specialising in Software Development. With a broad skill set, I am eager to specialise in front-end and full-stack development. I am a young, driven individual looking for opportunities with a company where I can grow and contribute.
      </Paragraph>
      <Button href="#projects">See My Work</Button>
    </HeroContent>
    <TechStack>
      <p>Page built with AWS EC2, React, HTML, CSS, and TypeScript from scratch.</p>
    </TechStack>
  </HeroSection>
);

export default Hero;
