import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const MenuItems = ({ menu, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [height, setHeight] = useState(0);

  const handleCLick = () => {
    setDropdown((prev) => !prev);
    setHeight(height === 0 ? "auto" : 0);
  };
  return (
    <Nav.Item>
      {menu.submenu ? (
        <>
          <Nav.Link
            as={Link}
            to={menu.to}
            aria-expanded={dropdown}
            aria-controls="dropdown-control-area"
            onClick={handleCLick}
          >
            {menu.title}
            {depthLevel > 0 ? (
              <span className="arrow-menu">
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </span>
            ) : (
              <span className="arrow-menu">
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
              </span>
            )}
          </Nav.Link>

          <AnimateHeight
            id="dropdown-control-area"
            duration={300}
            height={height}
          >
            <DropDown
              submenus={menu.submenu}
              dropdown={dropdown}
              depthLevel={depthLevel}
            />
          </AnimateHeight>
        </>
      ) : (
        <Nav.Link as={Link} to={menu.to}>
          {menu.title}
        </Nav.Link>
      )}
    </Nav.Item>
  );
};

export default MenuItems;
