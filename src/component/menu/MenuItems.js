import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import DropDown from "./DropDown";

const MenuItems = ({ menu, depthLevel }) => {
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <Nav.Item>
      {menu.submenu ? (
        <>
          <LinkContainer to="#">
            <Nav.Link
              rol="button"
              aria-expanded={dropdown}
              onClick={() => setDropdown((prev) => !prev)}
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
          </LinkContainer>
          <DropDown
            submenus={menu.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <LinkContainer to="#">
          <Nav.Link>{menu.title}</Nav.Link>
        </LinkContainer>
      )}
    </Nav.Item>
  );
};

export default MenuItems;
