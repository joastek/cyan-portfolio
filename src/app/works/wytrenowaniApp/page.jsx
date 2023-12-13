"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";
import SubPageBacground from "@/components/cube/SubpageBacground";
const WytrenowaniApp = () => {
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
          <main className="container is-fluid backdrop-blur-sm h-screen">
            <div className=" max-w-[60rem] mx-auto  justify-center">
              <div className="w-full mx-auto flex justify-center ">
                {" "}
                <Image
                  src="/assets/Logo.jpg"
                  alt="wwprint main photo"
                  width={800}
                  height={800}
                  className="rounded-lg m-6"
                />
              </div>
              <div className="mx-16 ">
                <h1 className="text-3xl border-b-2 border-white pb-4">
                  WWPrint
                </h1>
                <div className="columns">
                  <div className="column ">
                    <div className="flex ">
                      <h3 className="column uppercase is-offset-1">category</h3>
                      <div className="column is-4 mr-4">
                        Branding UX/UI Design Web Development
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    {" "}
                    Lorem ipsum – tekst składający się z łacińskich i
                    quasi-łacińskich wyrazów, mający korzenie w klasycznej
                    łacinie, wzorowany na fragmencie traktatu Cycerona „O
                    granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest
                    stosowany do demonstracji krojów pisma, kompozycji kolumny
                    itp.{" "}
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

export default WytrenowaniApp;
