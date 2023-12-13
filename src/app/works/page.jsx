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
          {" "}
          <main className="  h-screen flex container is-fluid backdrop-blur-sm">
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
