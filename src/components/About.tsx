import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';  // Import framer-motion for animation

// Type for content item
interface ContentItem {
  title: string;
  text: string[];
}

// Section container with flex layout
const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 10rem;  /* Adjusted for better spacing */
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// Wrapper for content display
const ContentWrapper = styled.div`
  width: 60%;
  max-width: 800px;
  text-align: left;
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;  /* Space for button navigation */

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

// Section title styling
const SectionTitle = styled.h3`
  color: rgb(255, 255, 255);
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Bullet point list styling
const BulletList = styled.ul`
  color: rgb(202, 202, 202);
  font-size: 0.9rem;
  margin: 0 auto 2rem;
  line-height: 1.8;
  max-width: 600px;
  list-style-type: disc;
  padding-left: 20px;
  font-family: 'Roboto', sans-serif; /* or any desired font */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Individual bullet point
const BulletItem = styled.li`
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

// Navigation buttons container (Center vertically)
const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  /* Ensures the buttons are vertically centered */
  width: 100%;
  max-width: 60rem;
  margin-top: 3rem; /* Added spacing between content and buttons */
  padding: 0 2rem;
  transform: translateY(-16rem); /* Move buttons up by 6rem */
`;

const Button = styled.button`
  background: none;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
  
  &:hover {
    background-color: #fff;
    color: #1a73e8;
    transform: scale(1.1);  /* Slight scaling effect on hover */
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1rem 1.5rem;
  }
`;

// Motion div for animated transitions
const AnimatedContent = motion.div;

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentWrapperRef = useRef<HTMLDivElement | null>(null);  // UseRef for div to manage size

  const content: ContentItem[] = [
    {
      title: "About Me",
      text: [
        "Passionate developer with a focus on clean, efficient code.",
        "Specialized in crafting high-performance web applications using React, TypeScript, and the latest web technologies.",
        "Experienced in AWS, database management, and customer requirements gathering.",
        "Strong advocate for user-centered design and dynamic web development."
      ]
    },
    {
      title: "Internship with Ako Aotearoa",
      text: [
        "Completed a 300-hour internship focused on AI foundation development.",
        "Contributed to the creation of a bridging learner tool for grammar learning.",
        "Worked with cutting-edge technologies, particularly in educational tech.",
        "Gained hands-on experience applying my skills to real-world projects."
      ]
    },
    {
      title: "Freelance Developer at Nomino AI",
      text: [
        "Optimized code solutions for improved efficiency and profitability.",
        "Collaborated with skilled developers to deliver high-quality solutions.",
        "Handled client requirements and ensured seamless project delivery.",
        "Developed strong skills in client interaction and understanding project goals."
      ]
    }
  ];

  const nextSection = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevSection = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  // Ensuring the ContentWrapper stays the same size
  useEffect(() => {
    if (contentWrapperRef.current) {
      const currentHeight = contentWrapperRef.current.offsetHeight;
      contentWrapperRef.current.style.height = `${currentHeight}px`;
    }
  }, [currentIndex]); // Re-run when the content changes

  return (
    <AboutSection id="about-me">
      <ContentWrapper ref={contentWrapperRef}>
        <AnimatedContent
          key={currentIndex}  // Use key to trigger a re-mount on index change
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}  // Transition duration
        >
          <SectionTitle>{content[currentIndex].title}</SectionTitle>
          <BulletList>
            {content[currentIndex].text.map((point, idx) => (
              <BulletItem key={idx}>{point}</BulletItem>
            ))}
          </BulletList>
        </AnimatedContent>
      </ContentWrapper>
      <NavButtons>
        <Button onClick={prevSection}>&lt;</Button>
        <Button onClick={nextSection}>&gt;</Button>
      </NavButtons>
    </AboutSection>
  );
};

export default About;
