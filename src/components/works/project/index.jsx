import React from "react";
import Link from "next/link";
const Project = ({ index, title, setModal, description, link, number }) => {
  return (
    <>
      <Link href={`/works/${link}`}>
        {" "}
        <div
          className="flex columns   cursor-pointer text-2xl text-white mt-5"
          onMouseEnter={() => {
            setModal({ active: true, index: index });
          }}
          on
          onMouseLeave={() => {
            setModal({ active: false, index: index });
          }}
        >
          <div className="column ">
            <div className="text-2xl ">
              <p className="text-sm mr-2 align-baseline  inline-block">
                {" "}
                {number}{" "}
              </p>
              <h2 className=" align-bottom  inline-block">{title}</h2>
            </div>
            <h1 className=""></h1>
          </div>
          <div className="column">
            {" "}
            <h2 className="text-end justify-end ">{description}</h2>
          </div>{" "}
        </div>{" "}
      </Link>
    </>
  );
};

export default Project;
