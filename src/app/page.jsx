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
import { motion } from "framer-motion";
import Link from "next/link";
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
      <StickyCursor stickyElement={stickyElement} />
      <div className="absolute h-screen w-screen ">
        {" "}
        <ParticleRing />
      </div>{" "}
      <header className=" fixed  w-full">
        <div className="">
          {" "}
          <Header
            menuIsActive={menuIsActive}
            setMenuIsActive={setMenuIsActive}
          />{" "}
        </div>

        <div className="columns ">
          <div className="column is-1">
            <Image src={Logo} alt="portfolio Logo" />
          </div>
        </div>
      </header>{" "}
      <main className="m-auto  h-screen ">
        <div className="container h-full justify-center text-center m-auto">
          {menuIsActive ? (
            <>
              <div className="w-full h-full">
                <BurgerHeader
                  menuIsActive={menuIsActive}
                  setMenuIsActive={setMenuIsActive}
                />
              </div>
            </>
          ) : (
            <>
              {" "}
              <motion.div
                variants={MainAnim}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className=" mx-auto  ">
                  <p className="pt-[30%] tracking-wide text-5xl   font-extrabold">
                    Hello, my name is Jan Czyszczoń
                  </p>
                  <p>Im a front-end developer !</p>
                  <div className="mt-6">
                    <div>
                      <Link href="/about" alt="" className="curosor-pointer ">
                        {" "}
                        <p>my projects</p>
                      </Link>
                    </div>
                    <div>
                      <p>something about me</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
