import React from "react";
import Link from "next/link";
const Project = ({ index, title, setModal, description, link }) => {
  return (
    <>
      <Link href={`/works/${link}`}>
        {" "}
        <div
          className="flex columns   cursor-pointer text-2xl border-b-[1px] border-white text-white mt-5"
          onMouseEnter={() => {
            setModal({ active: true, index: index });
          }}
          on
          onMouseLeave={() => {
            setModal({ active: false, index: index });
          }}
        >
          <div className="column ">
            <h1 className="text-start">{title}</h1>
          </div>
          <div className="column">
            {" "}
            <h2 className="text-end justify-end flex-end flex">
              {description}
            </h2>
          </div>{" "}
        </div>{" "}
      </Link>
    </>
  );
};

export default Project;
