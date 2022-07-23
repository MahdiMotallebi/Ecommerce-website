import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import MegaMenu from './megaMenu';

const MenuItems = ({ menu, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [height, setHeight] = useState(0);

  const handleCLick = () => {
    setDropdown((prev) => !prev);
    setHeight(height === 0 ? 'auto' : 0);
  };
  return (
    <>
      {menu.submenu ? (
        <Nav.Item>
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
                <BsChevronRight />
              </span>
            ) : (
              <span className="arrow-menu">
                <BsChevronDown />
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
        </Nav.Item>
      ) : (
        <>
          {menu.megaMenu ? (
            <Nav.Item className="mega">
              <Nav.Link onClick={handleCLick} as={Link} to={menu.to}>
                {menu.title}
                <span className="arrow-menu">
                  <BsChevronDown />
                </span>
              </Nav.Link>
              <MegaMenu menu={menu} height={height} />
            </Nav.Item>
          ) : (
            <Nav.Item>
              <Nav.Link as={Link} to={menu.to}>
                {menu.title}
              </Nav.Link>
            </Nav.Item>
          )}
        </>
      )}
    </>
  );
};

export default MenuItems;
