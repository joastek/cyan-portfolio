import React from "react";
import Link from "next/link";
const MainButton = ({ text, href }) => {
  return (
    <>
      <Link href={href} alt="" className="curosor-pointer  ">
        {" "}
        <button
          className="btn flex justify-center text-center items-center m-auto"
          type="button"
        >
          <strong className="text-white mrRobot font-extralight">{text}</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </Link>
    </>
  );
};

export default MainButton;
