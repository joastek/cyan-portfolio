import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
const anim = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

export default function BurgerHeader({ menuIsActive }) {
  return (
    <motion.div
      className="menu  flex flex-col  uppercase   p-6 fixed z-50 bg-white w-full h-full"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      {" "}
      <Link href="/about" className="">
        home
      </Link>
      <Link href="/about" className="">
        home
      </Link>
      <a className="">projects</a>
      <a className="">contact</a>
    </motion.div>
  );
}
