"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import ParticleRing from "../components/cube";
import BurgerHeader from "./NavBar/BurgerHeader";
import StickyCursor from "./NavBar/stickyCursor";
import Link from "next/link";
import Header from "./NavBar/Header";

export default function Home() {
  const stickyElement = useRef(null);
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <>
      {" "}
      <div className="absolute h-screen w-screen z-40">
        {" "}
        <ParticleRing /> <StickyCursor stickyElement={stickyElement} />
      </div>{" "}
      <header className="p-6 fixed w-full z-50">
        <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
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
            <div className="column m-auto z-50 text-2xl  ">
              <p>Hello, my name is Jan Czyszczoń</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
