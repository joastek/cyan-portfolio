import React from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { anim } from "./anim";
import Nav from "./Nav";
export default function BurgerHeader({ menuIsActive }) {
  return (
    <motion.div
      className="  menu z-50 backdrop-blur-sm w-full h-full "
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "exit"}
    >
      <div className="container text-white  uppercase space-y-[1.5rem] text-6xl flex flex-col ml-2 p-24 m-auto ">
        <AnimatePresence>{menuIsActive && <Nav />}</AnimatePresence>
      </div>
    </motion.div>
  );
}
