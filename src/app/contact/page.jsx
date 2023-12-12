"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";

const Contact = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <>
      <header className=" fixed w-screen z-50 ">
        <div className="   w-full  max-w-[80rem] mx-auto flex">
          <div className="cursor-pointer flex-end flex">
            <Link href="/" className="cursor-pointer flex-end ">
              <Image
                src={Logo}
                alt="portfolio Logo"
                width={100}
                height={50}
                className="cursor-pointer z-50"
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
          <main className="h-screen flex container">
            <div className=" max-w-[60rem]    ">
              <div className="w-full flex  mt-[10rem]">
                <h1 className="text-4xl uppercase mb-24 justify-start text-start flex">
                  about
                </h1>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Contact;
