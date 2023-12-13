"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";
import SubPageBacground from "@/components/cube/SubpageBacground";

const Contact = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
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
              <h1 className="uppercase text-4xl border-b-2 border-purple font-bold ">
                contact{" "}
              </h1>
              <div className="columns">
                <div className="column">
                  <div className="flex ">
                    <h3 className="column uppercase  is-7 font-semibold">
                      social media
                    </h3>
                    <div className="column is-4 mr-4 ">
                      <Link
                        href="https://github.com/joastek"
                        className="block text-white"
                      >
                        github
                      </Link>{" "}
                      <Link
                        href="https://www.linkedin.com/in/czyszczonjan/"
                        className="block text-white"
                      >
                        LinkedIn
                      </Link>{" "}
                      <Link
                        href="https://www.facebook.com/jan.czyszczon.31"
                        className="text-white"
                      >
                        facebook
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="flex ">
                    <h3 className="column uppercase is-2 font-semibold">
                      mail
                    </h3>
                    <div className="column is-6 mr-4">
                      <Link
                        href="mailto:czyszczon.jan99@gmail.com"
                        className="text-white"
                      >
                        czyszczon.jan99@gmail.com
                      </Link>
                    </div>
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
