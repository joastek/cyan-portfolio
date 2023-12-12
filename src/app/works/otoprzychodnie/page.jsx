import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="container">
        <div className=" max-w-[60rem] mx-auto  justify-center">
          <div className="w-full mx-auto flex justify-center ">
            {" "}
            <Image
              src="/assets/Logo.jpg"
              alt="wwprint main photo"
              width={800}
              height={800}
              className="rounded-lg m-6"
            />
          </div>
          <div className="mx-16 ">
            <h1 className="text-3xl border-b-2 border-white pb-4">WWPrint</h1>
            <div className="columns">
              <div className="column ">
                <div className="flex ">
                  <h3 className="column uppercase is-offset-1">category</h3>
                  <div className="column is-4 mr-4">
                    Branding UX/UI Design Web Development
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                Lorem ipsum – tekst składający się z łacińskich i
                quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie,
                wzorowany na fragmencie traktatu Cycerona „O granicach dobra i
                zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji
                krojów pisma, kompozycji kolumny itp.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
