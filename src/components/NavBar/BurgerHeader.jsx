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
      className="  menu z-50  w-full h-full"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "exit"}
    >
      <div className="container text-white  uppercase space-y-[0.5rem] text-6xl flex flex-col ml-2 p-24 ">
        <AnimatePresence>{menuIsActive && <Nav />}</AnimatePresence>
      </div>
    </motion.div>
  );
}
