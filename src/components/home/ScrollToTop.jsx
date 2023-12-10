import { useState, useEffect } from "react";
// import Arrow from "../../assets/images/Arrow-up-light.svg";
// import arrow_light from "../../assets/images/Arrow-up-light.png";
import { ReactComponent as Arrow } from "../../assets/images/Arrow-up-light.svg";
import { ReactComponent as WhatsApp } from "../../assets/images/whatsapp.svg";
// import { ReactComponent as arrow } from "../assets/images/Arrow - Down 2.svg";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollToTop = () => {
    if (isAnimating) return; // Prevent overlapping animations

    setButtonClicked(true);
    setIsAnimating(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Reset the button state and animation flag after the animation completes
    setTimeout(() => {
      setButtonClicked(false);
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        id="myBtn"
        onClick={scrollToTop}
        className={buttonClicked ? "clicked" : ""}
        style={{ display: showButton ? "flex" : "none" }}
      >
        {/* <img src={isLightMode ? (arrow_light) : (arrow)} alt="Arrow-up Icon" /> */}
        <Arrow />
      </button>

      <a href="http://wa.me/+201015721754" target="_blank" rel="noreferrer">
        <WhatsApp className="whatsapp-button" />
      </a>
    </>
  );
};

export default ScrollToTopButton;
