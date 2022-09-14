import React from 'react'
import { useState } from 'react'

const NavbarSection = () => {

  const [isActive,setIsActive] = useState(false);



  return (
    <div>
        <section className="p-2 flex justify-between items-center w-full sm:gap-8 sm:p-0">
            <h2 className="text-3xl font-semibold text-white">loopstudios</h2>
            <div>
                <img src={isActive ? "/images/icon-close.svg" : "images/icon-hamburger.svg"  } onClick={() => setIsActive(!isActive)} alt="" className="cursor-pointer sm:hidden"/>
                <ul className={isActive ? "text-white absolute left-0 transition-all p-5 leading-10 top-20 bg-black w-full flex justify-center items-center flex-col gap-5" : "text-white absolute sm:left-0 sm:bg-transparent sm:flex-row sm:static -left-full transition-all p-5 leading-10 top-20 bg-black w-full flex justify-center items-center flex-col gap-5"}>
                  <li className="font-light sm:font-normal text-lg cursor-pointer hover:border-b-2 hover:border-white transition-all">About</li>
                  <li className="font-light sm:font-normal text-lg cursor-pointer hover:border-b-2 hover:border-white transition-all">Careers</li>
                  <li className="font-light sm:font-normal text-lg cursor-pointer hover:border-b-2 hover:border-white transition-all">Events</li>
                  <li className="font-light sm:font-normal text-lg cursor-pointer hover:border-b-2 hover:border-white transition-all">Products</li>
                  <li className="font-light sm:font-normal text-lg cursor-pointer hover:border-b-2 hover:border-white transition-all">Support</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default NavbarSection