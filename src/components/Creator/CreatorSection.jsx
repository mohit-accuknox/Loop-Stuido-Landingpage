import React from "react";

const CreatorSection = () => {
  return (
    <div>
      <section className="bg-white flex justify-center flex-col gap-16 items-center p-5">
        <div className="mt-16 flex justify-center items-center flex-col gap-10 xl:grid xl:grid-cols-2 xl:mb-14">
          <img src="/images/desktop/image-interactive.jpg" alt="" />
          <div className="flex justify-center items-center flex-col gap-8">
            <h1 className="text-3xl font-light text-center uppercase xl:text-left xl:font-normal 2xl:text-4xl 2xl:font-medium">
              the leader in interactive vr
            </h1>
            <p className="text-lg font-normal text-gray-500 text-center xl:text-left 2xl:text-xl">
              Founded in 2011, Loopstuidos has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed business
              through digital experiences that bind to their bond.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-6 ">
          <div className="col-start-1 col-end-4 text-center">
            <h1 className="text-3xl font-light uppercase mt-5 mb-10 xl:text-4xl xl:font-normal 2xl:text-5xl 2xl:font-normal">
              our creations
            </h1>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-8 lg:grid lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="earthSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-2/6 font-light">
                deep earth
              </h1>
            </div>
            <div className="soccerSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-3/6 font-light">
                soccer team vr
              </h1>
            </div>
            <div className="gridSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-2/6 font-light">
                the grid
              </h1>
            </div>
            <div className="vrSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-3/6 font-light">
                from up above vr
              </h1>
            </div>
            <div className="pocketSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-2/6 font-light">
                pocket borealis
              </h1>
            </div>
            <div className="robotSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-2/6 font-light">
                the curiosity
              </h1>
            </div>
            <div className="fishSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-2/6 font-light">
                make it figheye
              </h1>
            </div>
            <div className="nightSection w-full h-32 relative p-4 transition-all hover:scale-95 hover:cursor-pointer xl:bg-top">
              <h1 className="text-white absolute bottom-2 text-2xl uppercase w-2/6 font-light">
                night arcade
              </h1>
            </div>
          </div>

          <div className="w-4/6 flex justify-center items-center mt-8 mb-16 xl:w-2/6">
            <button className="p-3 border-2 border-black w-full text-lg uppercase flex justify-center items-center transition-all tracking-wider hover:bg-black hover:text-white ">
              See all
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatorSection;
