"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import profile from "../../../public/profile.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";
import SubPageBacground from "@/components/cube/SubpageBacground";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MainAnim } from "@/components/NavBar/anim";
import { motion } from "framer-motion";
const About = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const onButtonClick = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Czyszczon_Jan_Curricum_Vitae.pdf";
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
          <main className="h-full w-screen flex container is-fluid backdrop-blur-[1.5px] overflow-auto">
            <div className=" mt-[10rem] w-full  max-w-[60rem] mx-auto   ">
              <motion.h1
                className="uppercase text-4xl border-b-2 border-pink text-pink mrRobot"
                custom={0}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={MainAnim}
              >
                about{" "}
              </motion.h1>
              <div className="columns mt-4">
                <motion.div
                  className="column"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={MainAnim}
                >
                  <Image
                    src={profile}
                    alt="backgorund image"
                    className="px-16"
                  />
                </motion.div>
                <motion.div
                  className="column"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={MainAnim}
                >
                  {" "}
                  <p className="text-xl tracking-wider">
                    {`  Hello, I'm Jan Czyszczoń from Kraków. I'm a young and highly ambitious front-end developer actively exploring new skills in the field. In my free time, I focus on honing my front-end skills, aiming to code faster and with better quality, while constantly seeking new design inspiration. I am also passionate about understanding human movement, mobility, and powerlifting. Additionally, I have a keen interest in history.`}
                  </p>{" "}
                  <button
                    onClick={onButtonClick}
                    className="mt-7 border-b-4 text-xl border-purple cursor-pointer font-bold mb-24"
                  >
                    resume <ExpandMoreIcon />
                  </button>
                </motion.div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default About;
