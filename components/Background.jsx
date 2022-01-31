import React from "react";
import { bgwrap, bgtext } from "../styles/bg.module.css";
import Image from "next/image";
import bgpicture1 from "../public/images/hymn_app-bg.jpg";

const background = () => {
  return (
    <div className={bgwrap} >
    
      <Image
        objectfit="cover"
        src={bgpicture1}
        alt="logo"
        layout="fill"
        priority="true"
      />

    </div>
  );
};

export default background;
