import React from "react";
import Link from "next/link";
import { links } from "./data";
import { perspective } from "./anim";
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <>
      {" "}
      {links.map((link, i) => {
        const { title, href } = link;
        return (
          <>
            <div key={`b_${i}`}>
              <motion.div
                href={link.href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={link.href}>{title}</Link>
              </motion.div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Nav;
