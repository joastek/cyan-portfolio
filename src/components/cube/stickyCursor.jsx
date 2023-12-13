"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
export default function StickyCursor({ stickyElement }) {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="143,81,234"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.8}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
      }}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
    />
  );
}
