import React from "react";
import NavbarSection from "../Navbar/NavbarSection";

const HeaderSection = () => {
  return (
    <div>
      <section className="headercontainer grid grid-cols-1 justify-center p-3 sm:p-5 2xl:p-10">
        <NavbarSection />
        <h2 className="border-2 border-white h-1/2 p-2 2xl:w-2/6 xl:w-3/5 lg:w-4/6 md:w-5/6 sm:w-3/4 sm:text-5xl sm:leading-snug flex justify-center items-center uppercase text-white text-4xl text-left font-light leading-loose">
          immersive experiences that Deliver
        </h2>
      </section>
    </div>
  );
};

export default HeaderSection;
