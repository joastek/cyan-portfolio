"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import ParticleRing from "../components/cube/MainBacground";
import BurgerHeader from "../components/NavBar/BurgerHeader";

import { MainAnim } from "@/components/NavBar/anim";
import Header from "../components/NavBar/Header";
import Loading from "@/app/loading";
import { motion } from "framer-motion";
import Link from "next/link";

import MainButton from "@/components/MainButton";

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const dataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    dataFetch();
  }, []);

  return isLoading ? (
    <>
      {" "}
      <Loading />
    </>
  ) : (
    <>
      <div className="z-50"></div>
      <div className="fixed h-full w-full z-0 ">
        {" "}
        <ParticleRing />
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
      <main className=" h-full z-50 w-screen">
        {menuIsActive ? (
          <>
            <div className="w-screen h-full ">
              <BurgerHeader
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
              />
            </div>
          </>
        ) : (
          <>
            <div className="container is-fluid h-full w-screen  ">
              <div className=" h-full w-full  justify-center text-center   m-auto flex flex-col space-y-[1rem]">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={MainAnim}
                  className="text-5xl    justify-center text-center items-center flex max-sm:block max-sm:text-4xl "
                  custom={0}
                >
                  <h1 className="font-extrabold max-sm:mb-2 max-sm:block ">
                    Hello, my name is{" "}
                  </h1>
                  <div className="max-sm:hidden">{"\u00A0"}</div>

                  <h1 className="text-pink mrRobot"> Jan Czyszczon</h1>
                </motion.div>

                <motion.h2
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={MainAnim}
                  className="text-2xl flex   justify-center text-center items-center max-sm:text-xl"
                  custom={1}
                >
                  <p className="">{` I'm passionate front-end developer, based in Cracow. `}</p>
                </motion.h2>
                <div className="mt-6   text-2xl max-sm:text-lg ">
                  <div>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                      custom={2}
                      className=" justify-center text-center items-center "
                    >
                      <MainButton text="my works" href="/works" />
                    </motion.div>{" "}
                    <motion.div
                      className="mt-4"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                      custom={3}
                    >
                      <MainButton text="about" href="/about" />
                    </motion.div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </>
        )}
      </main>
    </>
  );
}
