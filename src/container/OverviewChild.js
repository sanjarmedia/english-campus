import React from "react";
import {SunIcon} from "../Icons/Icons";
import Image from "next/image";
import cat from "../../public/images/images_gif/study.gif";
import OverviewChildTop from "../container/OverviewChild/OverviewChildTop"
import OverviewChildCenter from "../container/OverviewChild/OverviewChildCenter"
import OverviewChildBottom from "../container/OverviewChild/OverviewChildBottom"


function OverviewChild() {
  return (
    <div className="overflow-x-hidden bg-white overflow-y-hidden">
      <div className="container m-auto w-full flex mt-32 xl:mt-48">
        <h1 className="md:mt-32 mt-20 font-bold text-xl tracking-tight text-black lg:w-1/4 mx-10 xl:mx-0"
        >
          03.
        </h1>
        <div className="lg:ml-6">
          <div className="flex">
            <h1 className="py-2 sm:ml-8 tracking-tight text-black font-bold text-center text-5xl md:text-7xl
           bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent"
            >
              Bolalar
            </h1>
            <div className="lg:ml-10 ml-4">
              <SunIcon />
            </div>
          </div>
          <div className="flex">
            <div className="w-20 md:w-auto h-12 md:h-auto md:mt-2 -ml-4 sm:ml-0">
              <Image
                src={cat}
                width={121}
                height={72}
                alt="#"
                className="rounded-xl md:rounded-3xl object-contain"
              />
            </div>
            <h1 className="ml-2.5 md:ml-5 tracking-tight text-black font-bold text-center text-5xl md:text-7xl pb-20
           bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent"
            >
              kurslari
            </h1>
          </div>
        </div>

      </div>

      <OverviewChildTop />
      <OverviewChildCenter />
      <OverviewChildBottom />
    </div>
  );
}

export default OverviewChild;