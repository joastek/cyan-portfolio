import React from "react";
import Link from "next/link";
import { links } from "./data";
import { perspective } from "./anim";
import { motion } from "framer-motion";
import SocialIcons from "../socialIcons/SocialIcons";
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
                  className="mrRobot text-pink"
                  onClick={() => {
                    setMenuIsActive(!menuIsActive);
                  }}
                >
                  <a className="text-sm text-pink mr-2">{number}</a>
                  {title}
                </Link>
              </motion.div>
            </>
          );
        })}{" "}
        <motion.div
          custom={6}
          variants={perspective}
          initial="initial"
          animate="enter"
          exit="exit"
          className="mt-28"
        >
          {" "}
          <SocialIcons />
        </motion.div>
      </div>
    </>
  );
};

export default Nav;
