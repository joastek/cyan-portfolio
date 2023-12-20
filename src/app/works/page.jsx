"use client";
import React from "react";
import { useState } from "react";
import Project from "@/components/works/project";
import ModalProject from "@/components/works/modal";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";
import SubPageBacground from "@/components/cube/SubpageBacground";
import { motion } from "framer-motion";
import { MainAnim } from "@/components/NavBar/anim";
const Works = () => {
  const projects = [
    {
      number: "01",
      title: "Otoprzychodnie",
      src: "otoprzychodnieLogo.png",
      color: "#fe53bb",
      description: "Front-end developer",
      link: "otoprzychodnie",
    },
    {
      number: "02",
      title: "WWPrint",
      src: "wwprintLogo.jpg",
      color: "#0044ff",
      description: "Desing & development",
      link: "wwprint",
    },

    {
      number: "03",
      title: "WytrenowaniApp",
      src: "wytLogo.png",
      color: "#8f51ea",
      description: "Desing & development",
      link: "wytrenowaniApp",
    },

    {
      number: "04",
      title: "cyandev",
      src: "logo.png",
      color: "#fe53bb",
      description: "Desing & development",
      link: "cyandev",
    },
  ];
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <div className="absolute h-full w-full">
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
          {" "}
          <main className="  h-screen flex container is-fluid backdrop-blur-[1.5px]">
            <div className="  mt-[10rem] justify-center  w-full  max-w-[60rem] mx-auto ">
              <div className="space-y-8 ">
                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={MainAnim}
                  className="text-4xl uppercase mb-24 border-b-2 border-pink pb-4 text-pink mrRobot"
                >
                  works
                </motion.h1>

                {projects.map((project, index) => {
                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                    >
                      <Project
                        index={index}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                        number={project.number}
                        setModal={setModal}
                      />
                    </motion.div>
                  );
                })}
              </div>
              <ModalProject modal={modal} project={projects} />
            </div>{" "}
          </main>
        </>
      )}
    </>
  );
};

export default Works;
