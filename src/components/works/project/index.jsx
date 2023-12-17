import React from "react";
import Link from "next/link";
const Project = ({ index, title, setModal, description, link, number }) => {
  return (
    <>
      <Link href={`/works/${link}`}>
        {" "}
        <div
          className=" columns  is-mobile cursor-pointer text-2xl text-white mt-5 "
          onMouseEnter={() => {
            setModal({ active: true, index: index });
          }}
          on
          onMouseLeave={() => {
            setModal({ active: false, index: index });
          }}
        >
          <div className="column">
            <div className="text-2xl  ">
              <p className="text-sm mr-2 align-baseline  inline-block max-sm:text-sm">
                {number}
              </p>
              <h2 className=" align-bottom  inline-block max-sm:text-base">
                {title}
              </h2>
            </div>
          </div>
          <div className="column is-one-third">
            <h2 className="max-sm:text-base ">{description}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Project;
