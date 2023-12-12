"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import ParticleRing from "../components/cube";
import BurgerHeader from "../components/NavBar/BurgerHeader";
import StickyCursor from "../components/cube/stickyCursor";
import { MainAnim, perspective } from "@/components/NavBar/anim";
import Header from "../components/NavBar/Header";
import Loading from "@/components/loading";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence>
        <StickyCursor stickyElement={stickyElement} />
        <div className="absolute h-screen w-screen ">
          {" "}
          <ParticleRing />
        </div>{" "}
        <header className=" fixed  w-full z-50">
          <div className="z-50">
            {" "}
            <Header
              menuIsActive={menuIsActive}
              setMenuIsActive={setMenuIsActive}
            />{" "}
          </div>

          <div className="cursor-pointer  p-4 first-letter:flex">
            <Image
              src={Logo}
              alt="portfolio Logo"
              width={100}
              height={100}
              className="cursor-pointer z-50"
            />
          </div>
        </header>{" "}
        <main className="m-auto  h-screen ">
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
                  <div className=" mx-auto pt-[30%]  flex  flex-col">
                    <p className=" tracking-wide text-5xl justify-center text-center font-extrabold mx-auto">
                      <AnimatedTextWord text="Hello, my name is Jan Czyszczoń" />
                    </p>
                    <p className=" justify-center text-center mx-auto text-2xl">
                      {" "}
                      <AnimatedTextWord text="I'm a frontend developer" />
                    </p>
                    <div className="mt-6 block  justify-center text-center mx-auto text-2xl">
                      <Link href="/works" alt="" className="curosor-pointer ">
                        {" "}
                        <p className=" justify-center text-center mx-auto text-2xl flex">
                          {" "}
                          <AnimatedTextWord text="my projects" />
                        </p>
                      </Link>

                      <Link href="/works" alt="" className="curosor-pointer ">
                        {" "}
                        <p className=" justify-center text-center mx-auto text-lg flex">
                          {" "}
                          <AnimatedTextWord text="someting about me" />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </AnimatePresence>
    </>
  );
}
