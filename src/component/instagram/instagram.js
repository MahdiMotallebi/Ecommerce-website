import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import Image from 'react-bootstrap/Image';
const Instagram = ({ img }) => {
  return (
    <div className="instagram-content position-relative">
      <Link to="#">
        <Image variant="top" src={img} loading="lazy" />
        <BsInstagram className="instagram-icon position-absolute top-50" />
      </Link>
    </div>
  );
};

export default Instagram;
