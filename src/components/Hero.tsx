import styled from 'styled-components';

// Global font imports (if you're using them directly in JS, you can use these in your HTML head as well)
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@400;500&display=swap');
`;

const HeroHeader = styled.h1`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;  /* Updated header font */
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Slightly smaller on tablets */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Smaller font size for phones */
  }
`;


const HeroSection = styled.section`
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: relative;
  padding: 0 7rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Paragraph = styled.p`
  color: rgb(189, 189, 189);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;  /* Use Roboto for paragraph text */

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;


const Hero = () => (
  <>
    <GlobalStyle />  {/* Make sure GlobalStyle is applied */}
    <HeroSection>
      <HeroContent>
        <HeroHeader>Hi, I'm Alex Stewart</HeroHeader>
        <Paragraph>
          I hold a Bachelor of Information and Communication Technologies, specialising in Software Development. With a broad skill set, I am eager to specialise in front-end and full-stack development. I am a young, driven individual looking for opportunities with a company where I can grow and contribute.
        </Paragraph>
      </HeroContent>
    </HeroSection>
  </>
);

export default Hero;
