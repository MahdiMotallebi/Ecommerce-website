import React from "react";
import AnimateHeight from "react-animate-height";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const MegaMenu = ({ menu, height }) => {
  return (
    <AnimateHeight id="dropdown-control-area" duration={800} height={height}>
      <Nav
        as="ul"
        className="mega-menu custom-dropdown p-lg-4 d-lg-flex gap-lg-4 align-items-lg-start justify-content-lg-between"
      >
        {menu.megaMenu.map((subMegaMenu, index) => {
          return (
            <Nav.Item
              className={`mt-2 mb-3 mt-lg-0 mb-lg-0 col${index}`}
              key={uuidv4()}
            >
              <h6 className="text-white text-capitalize bg-dark p-2 ">
                {subMegaMenu.title}
              </h6>

              {subMegaMenu.submenu.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.to} key={uuidv4()}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav.Item>
          );
        })}
      </Nav>
    </AnimateHeight>
  );
};

export default MegaMenu;
