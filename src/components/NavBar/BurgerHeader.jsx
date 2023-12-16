import React from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { anim } from "./anim";
import Nav from "./Nav";
export default function BurgerHeader({ menuIsActive, setMenuIsActive }) {
  return (
    <>
      <motion.div
        className="   backdrop-blur-sm h-full w-screen "
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "exit"}
      >
        <div className="  uppercase space-y-[1.5rem] text-6xl   p-24 max-sm:text-5xl  max-sm:px-12">
          <AnimatePresence>
            {menuIsActive && (
              <Nav
                menuIsActive={menuIsActive}
                setMenuIsActive={setMenuIsActive}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
