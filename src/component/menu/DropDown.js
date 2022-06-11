import React from "react";
import { Nav } from "react-bootstrap";
import MenuItems from "./MenuItems";

const DropDown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const subMenuDropdown = depthLevel > 1 ? "subMenuDropdown" : "";
  return (
    <Nav className={`custom-dropdown ${subMenuDropdown}`}>
      {submenus.map((submenu, index) => (
        <MenuItems menu={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </Nav>
  );
};

export default DropDown;
