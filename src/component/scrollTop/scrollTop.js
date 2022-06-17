import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const ScrollTop = () => {
  const [visible, setVisible] = React.useState(false);

  const handleScrollTop = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleScrollTop);

  return (
    <div className={`go-to-top ${visible && "showScroll"}`} onClick={goToTop}>
      <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
    </div>
  );
};

export default ScrollTop;
