"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Header from "@/components/NavBar/Header";
import BurgerHeader from "@/components/NavBar/BurgerHeader";
import Link from "next/link";
import SubPageBacground from "@/components/cube/SubpageBacground";
import MainBlack from "../../../../public/assets/otoprzychodnie/Example.png";
import MainWhite from "../../../../public/assets/otoprzychodnie/Mainpage.png";
const WWprint = () => {
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
          <main className="container is-fluid backdrop-blur-[1px] h-screen pt-24 overflow-auto">
            <div className=" max-w-[60rem] mx-auto  justify-center">
              <div className="w-full mx-auto flex justify-center ">
                {" "}
                <Image
                  src="/assets/otoprzychodnieLogo.png"
                  alt="wwprint main photo"
                  width={800}
                  height={800}
                  className="rounded-lg m-6"
                />
              </div>
              <div className="mx-16 ">
                <h1 className="text-3xl border-b-4 border-purple pb-4 t font-bold">
                  Otoprzychodnie
                </h1>
                <div className="columns text-xl ">
                  <div className="column ">
                    <div className="flex ">
                      <h3 className="column uppercase is-offset-1">category</h3>
                      <div className="column is-4 mr-4">
                        Front-end developer
                      </div>
                    </div>
                    <div className="flex ">
                      <h3 className="column uppercase is-offset-1 border-b-2 border-pink ">
                        <Link
                          href="https://otoprzychodnie.pl/"
                          className="text-white"
                        >
                          demo
                        </Link>{" "}
                      </h3>
                      <div className="column is-8"></div>
                    </div>
                  </div>
                  <div className="column mt-2 ">
                    {" "}
                    {`  I'm taking a proactive approach to identify and resolve software
                    glitches, my focus is on ensuring seamless functionality. I
                    lead the charge in conceptualizing and implementing
                    innovative design solutions. Additionally, I specialize in
                    fine-tuning website performance to enhance SEO and maximize
                    the effectiveness of Google Ads.`}
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto flex justify-center ">
                {" "}
                <Image
                  src={MainWhite}
                  alt="wwprint main photo"
                  width={800}
                  height={800}
                  className="rounded-lg m-6"
                />
              </div>
              <div className="w-full mx-auto flex justify-center ">
                {" "}
                <Image
                  src={MainBlack}
                  alt="wwprint main photo"
                  width={800}
                  height={800}
                  className="rounded-lg m-6"
                />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default WWprint;
