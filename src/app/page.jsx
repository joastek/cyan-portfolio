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
import AnimatedTextWord from "@/components/animation/AnimatedMainText";

export default function Home() {
  const stickyElement = useRef(null);
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
      <main className="m-auto  h-screen z-50">
        <div className="container h-full justify-center text-center m-auto">
          {menuIsActive ? (
            <>
              <div className="w-full h-full text-left">
                <BurgerHeader
                  menuIsActive={menuIsActive}
                  setMenuIsActive={setMenuIsActive}
                />
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="container">
                <div className=" pt-[30%]  mx-auto   flex  flex-col justify-center text-center items-center">
                  {/* <p className=" tracking-wide text-5xl  max-sm:text-2xl font-extrabold">
                    <AnimatedTextWord text="Hello, my name is Jan Czyszczoń " />
                  </p>
                  <p className=" text-2xl  max-sm:text-lg">
                    {" "}
                    <AnimatedTextWord text="I'm a frontend developer" />
                  </p> */}

                  <motion.h1
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={MainAnim}
                    className="text-5xl flex"
                    custom={0}
                  >
                    Hello, my name is
                    <p className="text-purple font-extrabold">Jan Czyszczoń</p>
                  </motion.h1>

                  <motion.h2
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={MainAnim}
                    className="text-3xl"
                    custom={1}
                  >
                    Im a frontend developer
                  </motion.h2>
                  <div className="mt-6 block  justify-center text-center mx-auto text-2xl max-sm:text-lg">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                      custom={2}
                    >
                      <Link href="/works" alt="" className="curosor-pointer ">
                        <button className="btn" type="button">
                          <strong className="text-white">my works</strong>
                          <div id="container-stars">
                            <div id="stars"></div>
                          </div>

                          <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                          </div>
                        </button>
                      </Link>
                    </motion.div>{" "}
                    <motion.div
                      className="mt-4"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={MainAnim}
                      custom={3}
                    >
                      {" "}
                      <Link href="/works" alt="" className="curosor-pointer ">
                        {" "}
                        <button className="btn" type="button">
                          <strong className="text-white">about me</strong>
                          <div id="container-stars">
                            <div id="stars"></div>
                          </div>

                          <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                          </div>
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
