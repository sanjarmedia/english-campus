import React from "react";
import korea from "../../public/images/images_gif/korea.gif"
import University from "../../public/images/image 15 (1).png"
import Image from "next/image";
import OverviewMainTwoBottom from "./OverviewMainTwo/OverviewMainTwoBottom";
import {SunIcon} from "../Icons/Icons";



function OverviewMainTwo() {
  return (
    <div id="study" className="overflow-hidden bg-white">
    <div className="container m-auto w-full flex mt-32 xl:mt-48">
      <h1 className="md:mt-32 mt-20 font-bold text-xl ml-10 tracking-tight text-black lg:w-1/4">
        02.
      </h1>
      <div className="xl:ml-6 ml-12">
        <div className="flex">
          <h1 className="py-2 sm:ml-8 tracking-tight text-black font-bold text-center text-5xl md:text-7xl
           bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
            Xorijda
          </h1>
          <div className="lg:ml-10 ml-4">
            <SunIcon />
          </div>
        </div>
        <div className="flex">
          <div className=" w-20 md:w-auto h-12 md:h-auto md:mt-2 -ml-4 sm:ml-0">
            <Image
              src={korea}
              width={121}
              height={72}
              alt="#"
              className="rounded-xl md:rounded-3xl object-contain"
            />
          </div>
          <h1 className="ml-2.5 md:ml-5 tracking-tight text-black font-bold text-center text-5xl md:text-7xl pb-20
           bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
            o’qish
          </h1>
        </div>
      </div>
    </div>

      <div className="container m-auto w-full">
        <div className="mt-8 xl:mt-20 mx-5">
          <Image className="rounded-2xl"
                 src={University}
                 width={1600}
                 height={676}
                 alt="#"
                 data-aos="flip-down"/>
        </div>
      </div>

      <OverviewMainTwoBottom />
    </div>
  );
}

export default OverviewMainTwo;