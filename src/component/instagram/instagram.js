import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "react-bootstrap/Image";
const Instagram = ({ img }) => {
  return (
    <div className="instagram-content position-relative">
      <Link to="#">
        <Image variant="top" src={img}></Image>
        <FontAwesomeIcon
          className="instagram-icon position-absolute top-50"
          icon={faInstagram}
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default Instagram;
