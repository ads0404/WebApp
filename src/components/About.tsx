import { useEffect, useState } from "react";
import "./About.css"; // Ensure you have proper styling for the page
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";

const images = [image1, image2, image3, image4];

const About = () => {
  const [scrolledImages, setScrolledImages] = useState<number[]>([]);

  // Function to handle scroll effect
  const handleScroll = () => {
    const scrolledPositions: number[] = [];

    // Get all images and their positions
    const imageElements = document.querySelectorAll(".image-item");
    imageElements.forEach((img,) => {
      const rect = img.getBoundingClientRect();
      const imgCenter = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;

      // Determine if the image is in the center
      const distanceFromCenter = Math.abs(imgCenter - windowCenter);
      scrolledPositions.push(distanceFromCenter);
    });

    setScrolledImages(scrolledPositions);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-wrapper" id="about-me">
      <div className="about-container">
        {/* About Me Card */}
        <div className="about-card">
          <h2>About Me</h2>
          <p>I have a genuine passion for learning, and I enjoy creating new and unique ways to create visually pleasing user-interfaces.</p>
        </div>

        {/* Images Section */}
        <div className="image-section">
          {images.map((img, index) => {
            const scale = 1 - (scrolledImages[index] ?? 0) / 1000; // Adjust scale factor
            const transformStyle = `scale(${Math.max(0.5, scale)})`;

            return (
              <div key={index} className="image-item" style={{ transform: transformStyle }}>
                <img src={img} alt={`Image ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
