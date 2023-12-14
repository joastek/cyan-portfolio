"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";
import SubPageBacground from "@/components/cube/SubpageBacground";
import { motion } from "framer-motion";
import { MainAnim } from "@/components/NavBar/anim";
const Contact = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const contact = [
    {
      media: "github",
      link: "https://github.com/joastek",
    },
    { media: "linkedIn", link: "https://www.linkedin.com/in/czyszczonjan/" },
    {
      media: "facebook",
      link: "https://www.facebook.com/jan.czyszczon.31",
    },
  ];
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
          <main className="h-screen flex container is-fluid backdrop-blur-sm">
            <div className=" mt-[10rem] w-full  max-w-[60rem] mx-auto   ">
              <motion.h1
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={MainAnim}
                custom={0}
                className="uppercase text-4xl border-b-2 border-purple font-bold "
              >
                contact{" "}
              </motion.h1>
              <div className="columns">
                <div className="column">
                  <div className="flex">
                    <motion.h3
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                      custom={1}
                      className="column uppercase  is-7 font-semibold"
                    >
                      social media
                    </motion.h3>{" "}
                    <div className=" column">
                      {contact.map((contact, i) => {
                        return (
                          <>
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={MainAnim}
                              custom={i}
                              key={i}
                              className=""
                            >
                              <Link
                                href={contact.link}
                                className="block text-white"
                              >
                                {contact.media}
                              </Link>{" "}
                            </motion.div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="flex ">
                    <motion.h3
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                      custom={1}
                      className="column uppercase is-2 font-semibold"
                    >
                      mail
                    </motion.h3>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                      custom={1}
                      className="column is-6 mr-4"
                    >
                      <Link
                        href="mailto:czyszczon.jan99@gmail.com"
                        className="text-white"
                      >
                        czyszczon.jan99@gmail.com
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Contact;
