"use client";
import React from "react";
import { useState } from "react";
import Project from "@/components/works/project";
import ModalProject from "@/components/works/modal";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
const Works = () => {
  const projects = [
    {
      title: "WWPrint",
      src: "Logo.jpg",
      color: "#000000",
      description: "Desing & development",
    },

    {
      title: "WytrenowaniApp",
      src: "1.png",
      color: "#8C8C8C",
      description: "Desing & development",
    },
    {
      title: "Otoprzychodnie",
      src: "1.png",
      color: "#EFE8D3",
      description: "Desing & development",
    },
  ];
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <header className=" fixed w-screen z-50">
        <div className="mr-6 ">
          <Header
            menuIsActive={menuIsActive}
            setMenuIsActive={setMenuIsActive}
          />{" "}
        </div>

        <div className="">
          <Image src={Logo} alt="portfolio Logo" />
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
          <main className="m-auto  h-screen flex ">
            <div className=" mt-28   justify-center text-center m-auto">
              <div className="space-y-12 ">
                {projects.map((project, index) => {
                  return (
                    <Project
                      key={index}
                      index={index}
                      title={project.title}
                      description={project.description}
                      setModal={setModal}
                    />
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
