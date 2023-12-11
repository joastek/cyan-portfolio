import React from "react";

const Project = ({ index, title, setModal, description }) => {
  return (
    <>
      <div
        className="flex columns  max-w-[60rem] mx-auto  cursor-pointer"
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
          <h2 className="text-end justify-end flex-end flex">{description}</h2>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Project;
