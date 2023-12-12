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
const Works = () => {
  const projects = [
    {
      title: "WWPrint",
      src: "Logo.jpg",
      color: "#000000",
      description: "Desing & development",
      link: "wwprint",
    },

    {
      title: "WytrenowaniApp",
      src: "1.png",
      color: "#8C8C8C",
      description: "Desing & development",
      link: "wytrenowaniApp",
    },
    {
      title: "Otoprzychodnie",
      src: "1.png",
      color: "#EFE8D3",
      description: "Desing & development",
      link: "otoprzychodnie",
    },
  ];
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <header className=" fixed w-screen z-50 ">
        <div className="mr-6 ">
          <Header
            menuIsActive={menuIsActive}
            setMenuIsActive={setMenuIsActive}
          />{" "}
        </div>{" "}
        <div className="cursor-pointer flex">
          <Link href="/" className="cursor-pointer flex p-4">
            <Image
              src={Logo}
              alt="portfolio Logo"
              width={100}
              height={100}
              className="cursor-pointer z-50"
            />
          </Link>
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
          <main className="  h-screen flex container">
            <div className="  mt-[10rem] justify-center  w-full  max-w-[60rem] mx-auto ">
              <div className="space-y-12 ">
                <h1 className="text-4xl uppercase mb-24">works</h1>
                {projects.map((project, index) => {
                  return (
                    <Project
                      key={index}
                      index={index}
                      title={project.title}
                      link={project.link}
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
