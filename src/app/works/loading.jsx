import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import RingLoader from "react-spinners/RingLoader";
const Loading = () => {
  return (
    <div className="container h-screen w-screen  ">
      <div className="flex justify-center items-center m-auto h-full">
        <div className="absolute z-0">
          {" "}
          <RingLoader color="#8f51ea" size={165} />
        </div>

        <Image
          src={Logo}
          alt="portfolio Logo"
          width={100}
          height={50}
          className="z-50"
        />
      </div>
    </div>
  );
};

export default Loading;
