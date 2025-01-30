import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi"; // Import the down arrow icon
import "./IntroScreen.css"; 

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [textVisible, setTextVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Show text after 0.5s
    setTimeout(() => setTextVisible(true), 500);

    // Show down arrow after 1.5s
    setTimeout(() => setArrowVisible(true), 1500);

    // Auto-enter after 4 seconds
    const autoEnter = setTimeout(() => {
      handleEnter();
    }, 10000);

    // Detect scroll attempt (mouse wheel or touch swipe)
    const handleScrollAttempt = () => {
      handleEnter();
    };

    window.addEventListener("wheel", handleScrollAttempt); // Detect mouse scroll
    window.addEventListener("touchmove", handleScrollAttempt); // Detect mobile swipe

    // Cleanup listeners & timeout on unmount
    return () => {
      clearTimeout(autoEnter);
      window.removeEventListener("wheel", handleScrollAttempt);
      window.removeEventListener("touchmove", handleScrollAttempt);
    };
  }, []);

  const handleEnter = () => {
    setFadingOut(true);

    // After fade-out animation, trigger onEnter
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div className={`intro-screen ${fadingOut ? "hidden" : ""}`}>
      <h1 className={`greeting-text ${textVisible ? "visible" : ""}`}>
        Welcome to Alex's Portfolio
      </h1>

      {/* Down Arrow */}
      {arrowVisible && (
        <FiChevronDown className="down-arrow" onClick={handleEnter} />
      )}
    </div>
  );
}
