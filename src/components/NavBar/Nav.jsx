import React from "react";
import Link from "next/link";
import { links } from "./data";
import { perspective } from "./anim";
import { motion } from "framer-motion";
const Nav = ({ menuIsActive, setMenuIsActive }) => {
  return (
    <>
      <div className="mt-28 ">
        {links.map((link, i) => {
          const { title, href, number } = link;
          return (
            <>
              <motion.div
                key={`b_${i}`}
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  href={href}
                  className="text-white"
                  onClick={() => {
                    setMenuIsActive(!menuIsActive);
                  }}
                >
                  <a className="text-sm text-white">{number}</a>
                  {title}
                </Link>
              </motion.div>
            </>
          );
        })}{" "}
      </div>
    </>
  );
};

export default Nav;
