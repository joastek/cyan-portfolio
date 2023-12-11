"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import ParticleRing from "../components/cube";
import BurgerHeader from "../components/NavBar/BurgerHeader";
import StickyCursor from "../components/cube/stickyCursor";
import Link from "next/link";
import Header from "../components/NavBar/Header";

export default function Home() {
  const stickyElement = useRef(null);
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <>
      {" "}
      <div className="absolute h-screen w-screen z-0">
        {" "}
        <ParticleRing /> <StickyCursor stickyElement={stickyElement} />
      </div>{" "}
      <header className="p-6 fixed w-full z-50">
        <div className="mr-6">
          <Header
            menuIsActive={menuIsActive}
            setMenuIsActive={setMenuIsActive}
          />{" "}
        </div>
        <BurgerHeader menuIsActive={menuIsActive} />
        <div className="columns ">
          <div className="column is-1">
            <Image src={Logo} alt="portfolio Logo" />
          </div>
        </div>
      </header>{" "}
      <main className="m-auto  h-screen ">
        <div className="container h-full justify-center text-center  m-auto">
          <div className="columns  h-full ">
            <div className="flex column mx-auto z-1  ">
              <p className="pt-[30%] tracking-wide text-5xl   font-extrabold">
                Hello, my name is Jan Czyszczoń
              </p>
              <p>Im a front-end developer !</p>
              <div className="mt-6">
                <div>
                  <p>my projects</p>
                </div>
                <div>
                  <p>something about me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
