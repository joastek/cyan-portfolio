"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import backgroundImage from "../../../public/Ellipse.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";
import SubPageBacground from "@/components/cube/SubpageBacground";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const About = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const onButtonClick = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="absolute h-screen w-screen">
        {" "}
        <SubPageBacground />
      </div>{" "}
      <header className=" fixed w-screen z-50 ">
        <div className="   w-full   mx-auto flex">
          <div className="cursor-pointer flex-end flex">
            <Link href="/" className="cursor-pointer flex-end ">
              <Image
                src={Logo}
                alt="portfolio Logo"
                width={100}
                height={50}
                className="cursor-pointer z-50 m-4"
              />
            </Link>
          </div>
          <div className="    justify-end w-full">
            <Header
              menuIsActive={menuIsActive}
              setMenuIsActive={setMenuIsActive}
            />{" "}
          </div>{" "}
        </div>
      </header>{" "}
      {menuIsActive ? (
        <>
          {" "}
          <div className="w-full h-full">
            {" "}
            <BurgerHeader
              menuIsActive={menuIsActive}
              setMenuIsActive={setMenuIsActive}
            />
          </div>
        </>
      ) : (
        <>
          <main className="h-screen w-screen flex container is-fluid backdrop-blur-[1.5px]">
            <div className=" mt-[10rem] w-full  max-w-[60rem] mx-auto   ">
              <h1 className="uppercase text-4xl border-b-2 border-pink text-pink mrRobot">
                about{" "}
              </h1>
              <div className="columns mt-4">
                <div className="column">
                  <Image
                    src={backgroundImage}
                    alt="backgorund image"
                    className="px-16"
                  />
                </div>
                <div className="column">
                  {" "}
                  <p>
                    Young and ambitious front-end developer eager for
                    freshopportunities to elevate my skills in FrontEnd. During
                    myfree time, I am dedicated to expanding my expertise
                    andhoning my skills in healthy nutrition,
                    powerlifting,running, and delving into historical pursuits
                  </p>{" "}
                  <button
                    onClick={onButtonClick}
                    className="mt-4 border-b-2 border-purple"
                  >
                    resume <ExpandMoreIcon />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default About;
