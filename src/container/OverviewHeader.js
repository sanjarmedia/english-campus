import React from "react";
import globus from "../../public/images/Globus.png"
import book from "../../public/images/book.png"
import child from "../../public/images/Child.png"
import olmaxon from "../../public/images/images_gif/olmaxon.gif"
import cofe from "../../public/images/images_gif/cofe.gif"
import cat from "../../public/images/images_gif/cat.gif"
import smart_boy from "../../public/images/images_gif/smart-boy.gif"
import {Link} from "react-scroll/modules";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import 'aos/dist/aos.css'

import  {
  ChiziqButton,
  ChiziqButtonLeft,
  ChiziqButtonRight,
  ChiziqCenterLeft,
  ChiziqCenterRight,
  ChiziqTopLeft,
  ChiziqTopRight,
} from "../Icons/Icons";
import Image from "next/image";

function OverviewHeader() {
  return (
    <div id="header">
      <div className="m-auto container w-full">
        <div className="flex justify-center pt-40 lg:pt-60">
          <div>
            <ChiziqTopLeft  />
          </div>
          <h1 className=
                "tracking-tight text-black font-bold text-center text-3xl md:text-7xl mt-5"
          >
            Bizdan
          </h1>
          <Image
            src={olmaxon}
            width={132}
            height={89}
            alt="#"
            className="rounded-3xl mx-10 mt-5 hidden lg:block"
          />
          <h1 className=
                "md:ml-4 lg:ml-2 ml-2 lg:ml-0 tracking-tight text-black font-bold text-center
          text-3xl md:text-7xl mt-5">
            Siz uchun
          </h1>
          <div className="-ml-5 lg:-mt-0 -mt-4">
            <ChiziqTopRight />
          </div>
        </div>

        <div className=
               "flex flex-wrap lg:flex-nowrap justify-center mt-5 lg:-ml-10">
          <div className=
                 "mt-10 hidden lg:block">
            <ChiziqCenterLeft />
          </div>
          <div className=
                 "flex items-center md:ml-6 h-16 md:h-24 px-5 md:px-6 rounded-3xl
           bg-gradient-to-r from-gradientStart to-gradientFinish">
            <div className="w-6 md:w-auto h-6 md:h-auto">
              <Image
                className="object-contain"
                width={48}
                height={48}
                src={globus}
                alt="#"
              />
            </div>
            <h1 className=
                  "ml-3 md:ml-4 font-bold text-white text-xl md:text-5xl flex items-center">
              Xorijda o’qish
            </h1>
          </div>
          <Image
            src={cofe}
            width={158}
            height={89}
            className=
              "rounded-2xl lg:rounded-3xl mx-2.5 md:mx-5 w-28 md:w-36 h-16 md:h-24"
            alt="#"
          />

          <div className=
                 "flex mt-3 lg:mt-0">
            <div className=
                   "mr-3 md:mx-5 block lg:hidden w-24 md:w-auto h-12 md:h-auto">
              <Image
                src={smart_boy}
                width={163}
                height={89}
                alt="#"
                className=
                  "rounded-2xl lg:rounded-3xl object-cover"
              />
            </div>
            <div className=
                   "flex items-center h-16 md:h-24
            bg-gradient-to-r from-gradientStart to-gradientFinish px-6 rounded-3xl"
            >
              <div className=
                     "w-6 md:w-auto h-6 md:h-auto">
                <Image
                  className="object-contain"
                  width={48}
                  height={48}
                  src={book}
                  alt="#"
                />
              </div>
              <h1
                className="ml-3 md:ml-4 font-bold text-white text-xl md:text-5xl flex items-center">
                Til kurslari
              </h1>
            </div>
            <div className="ml-6 -mt-6 hidden lg:block">
              <ChiziqCenterRight />
            </div>
          </div>
        </div>
        <div
          className="flex-row-reverse flex xl:flex-row justify-center mt-2 md:mt-3 lg:-mt-5">
          <div
            className="mx-4 xl:mx-5 w-20 md:w-32 h-[60px] md:h-24 overflow-hidden rounded-2xl lg:rounded-3xl">
            <Image
              src={cat}
              alt="#"
            />
          </div>
          <div
            className="flex items-center h-16 md:h-24 bg-gradient-to-r from-gradientStart to-gradientFinish
          px-6 ml-1 md:ml-3 lg:ml-0 rounded-3xl"
          >
            <div className="w-6 md:w-auto h-6 md:h-auto">
              <Image
                className="object-contain"
                width={48}
                height={48}
                src={child}
                alt="#"
              />
            </div>
            <h1
              className="ml-3 lg:ml-4 font-bold text-white text-xl md:text-5xl flex items-center">
              Bolalar kurslari
            </h1>
          </div>
          <div className="mx-5 hidden lg:block">
            <Image
              src={smart_boy}
              width={163}
              height={95}
              alt="#"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div
          className="flex justify-between lg:mx-72 ml-24 my-8 lg:flex">
          <div>
            <ChiziqButtonLeft />
          </div>
          <div
            className="mr-80 hidden lg:block">
            <ChiziqButtonRight />
          </div>
        </div>
        <div >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button
              className="hidden md:block bg-white/30 backdrop-blur-lg w-9
               h-11 rounded-full m-auto animate-bounce"
              id="about"
            >
              <ChiziqButton />
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default OverviewHeader;