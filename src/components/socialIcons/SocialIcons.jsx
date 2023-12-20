import React from "react";
import FramerMagnetic from "./FramerMagnetic";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
const SocialIcons = () => {
  const styleForPaper = {
    width: "48px",
    height: "48px",
    color: "#fe53bb",
  };
  return (
    <>
      {" "}
      <div className="flex space-x-6   ">
        <FramerMagnetic>
          {" "}
          <Link
            target="_blank"
            href="https://www.facebook.com/jan.czyszczon.31"
          >
            <FacebookIcon style={styleForPaper} />
          </Link>
        </FramerMagnetic>{" "}
        <FramerMagnetic>
          <Link target="_blank" href="https://github.com/joastek">
            <GitHubIcon style={styleForPaper} />{" "}
          </Link>
        </FramerMagnetic>{" "}
        <FramerMagnetic>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/czyszczonjan/"
          >
            <LinkedInIcon style={styleForPaper} />
          </Link>
        </FramerMagnetic>
      </div>
    </>
  );
};

export default SocialIcons;
