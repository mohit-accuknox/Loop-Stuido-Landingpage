import React from "react";

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-black p-5 flex text-white justify-center items-center flex-col gap-5">
        <div className="flex justify-center items-center gap-5 flex-col mt-8 lg:flex-row lg:justify-between w-full lg:mb-10">
          <h1 className="text-3xl font-semibold">loopstudios</h1>
          <ul className="flex justify-center items-center flex-col gap-5 lg:flex-row">
            <li className="cursor-pointer transition-all hover:border-b-2 hover:border-white">About</li>
            <li className="cursor-pointer transition-all hover:border-b-2 hover:border-white">Careers</li>
            <li className="cursor-pointer transition-all hover:border-b-2 hover:border-white">Events</li>
            <li className="cursor-pointer transition-all hover:border-b-2 hover:border-white">Products</li>
            <li className="cursor-pointer transition-all hover:border-b-2 hover:border-white">Support</li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col mt-8 gap-8 mb-8 xl:flex-row xl:justify-between w-full">
          <ul className="flex justify-center items-center gap-4">
            <li className="transition-all hover:border-b-2 hover:border-white p-2">
              <a href="#">
                <img src="/images/icon-facebook.svg" alt="" />
              </a>
            </li>
            <li className="transition-all hover:border-b-2 hover:border-white p-2">
              <a href="#">
                <img src="/images/icon-instagram.svg" alt="" />
              </a>
            </li>
            <li className="transition-all hover:border-b-2 hover:border-white p-2">
              <a href="#">
                <img src="/images/icon-twitter.svg" alt="" />
              </a>
            </li>
            <li className="transition-all hover:border-b-2 hover:border-white p-2">
              <a href="#">
                {" "}
                <img src="/images/icon-pinterest.svg" alt="" />
              </a>
            </li>
          </ul>
          <h1 className="text-gray-400">
            &#169; 2021 Loopstudios. All rights reserved.
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
