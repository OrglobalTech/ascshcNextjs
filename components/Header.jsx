import React from "react";
import Image from "next/image";
import logo1 from "../public/images/asc_logo_1.png";

const Header = () => {
  return (
    <div className=" mt-2 ">
      <div className="text-center">
        <Image
          objectfit="cover"
          src={logo1}
          alt="logo"
          width={50}
          height={50}
          priority="true"
        />
      </div>
      <div>
        <h1 className="mb-2 lg:text-lg text-xl font-bold text-white text-center ">
          All Saints Church Supplementary Hymns and Choruses
        </h1>
      </div>
    </div>
  )
}

export default Header;
