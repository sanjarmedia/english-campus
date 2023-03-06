import React, {Fragment} from "react"
import {Dialog, Transition} from "@headlessui/react"
import Image from "next/image"
import {XXIcon} from "../Icons/Icons"
import book from "../../public/images/book.png";
import globus from "../../public/images/Globus.png";
import child from "../../public/images/Child.png";
import Usa from "../../public/images/usa.png";
import Rus from "../../public/images/rusflag.png";
import Karea2 from "../../public/images/Karea2.png"
import ContactFormNavber from "./ContactFormNavbar";

export function NavbarProductMenu({open, close, active}) {


  return (
    <Transition
      appear
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto justify-between lg:-mt-12 xl:ml-40 2xl:ml-80 overflow-x-hidden"
        onClose={close}
      >
        <div className="px-8 py-5 lg:mt-12 xl:w-10/12 items-center bg-white rounded-3xl shadow-2xl">
          <div className="flex p-4 h-24 justify-between">
            <h1 className="flex font-bold text-xl md:text-3xl flex items-center tracking-tight
                         bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent xl:pt-12
                         2xl:pb-14 xl:pl-10 md:pl-4 -ml-3"
            >
              Kurs uchun ariza yuborish
            </h1>
            <button
              className="flex px-3 sm:px-5 py-3 sm:py-5 2xl:py-7 h-10 2xl:h-20 border-solid border
                        border-black/20 rounded-2xl  mt-2.5"
              onClick={close}
            >
              <div className="sm:-mt-1.5 2xl:mt-0">
                <XXIcon/>
              </div>
              <p className="ml-3 -mt-1.5 text-base xl:text-xl tracking-wide hidden 2xl:block text-black">
                Oynani yopish
              </p>
            </button>

          </div>
          <div className="xl:ml-16 md:ml-9 ml-0 mt-4">
            <h1 className=" text-base tracking-wide py-4 font-medium text-black">Bo’limni tanlang</h1>
            <div className="flex flex-wrap mt-5 gap-5">

              <button
                className={
                  `flex items-center xl:w-48 w-32 h-14 px-5 rounded-3xl ${active === 1 ?
                    "bg-gradient-to-r from-gradientStart to-gradientFinish" : "bg-white"}
                                   border-solid border border-black/20`
                }
              >
                <div className="w-6 md:w-auto h-6 md:h-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={book}
                    alt="#"
                  />
                </div>
                <h1
                  className={`ml-3 md:ml-4 font-medium text-sm xl:text-base  flex tracking-wide ${active === 1 ?
                    "text-white" : "text-black"}`}
                >
                  Til kurslari
                </h1>
              </button>

              <button
                className={`flex items-center xl:w-48 w-32 h-14 px-5 rounded-3xl ${active === 2 ? "bg-gradient-to-r " +
                  "from-gradientStart to-gradientFinish" : "bg-white"} border-solid border border-black/20`}
              >
                <div className="w-6 md:w-auto h-6 md:h-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={globus}
                    alt="#"
                  />
                </div>
                <h1
                  className={`ml-3 md:ml-4 font-medium text-sm xl:text-base  flex tracking-wide ${active === 2 ? 
                    "text-white" : "text-black"}`}
                >
                  Xorijda o’qish
                </h1>
              </button>


              <button
                className={`flex items-center xl:w-48 w-32 h-14 px-5 rounded-3xl ${active === 5 ? "bg-gradient-to-r " +
                  "from-gradientStart to-gradientFinish" : "bg-white"} border-solid border border-black/20`}
              >
                <div className="w-6 md:w-auto h-6 md:h-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={child}
                    alt="#"
                  />
                </div>
                <h1
                  className={`ml-3 md:ml-4 font-medium text-sm xl:text-base  flex tracking-wide ${active === 5 ? 
                    "text-white" : "text-black"}`}
                >
                  Bolalar kurslari
                </h1>
              </button>
            </div>
          </div>

          <div className="xl:ml-16 md:ml-9 ml-0">
            <h1 className="mt-10 text-base tracking-wide py-4 font-medium text-black">
              Ichki bo’limni tanlang
            </h1>
            <div className="flex flex-wrap mt-5 gap-5">
              <button
                className={`flex items-center xl:w-48 w-32 h-14 px-5 rounded-3xl ${active === 1 ? "bg-gradient-to-r " +
                  "from-gradientStart to-gradientFinish" : "bg-white"} border-solid border border-black/20`}
              >
                <div className="w-6 md:w-auto h-6 md:h-auto">
                  <Image
                    width={24}
                    height={24}
                    src={Usa}
                    alt="#"
                    className="object-contain"
                  />
                </div>
                <h1
                  className={`ml-3 md:ml-4 font-medium text-sm xl:text-base  flex tracking-wide ${active === 1 ? 
                    "text-white" : "text-black"}`}
                >
                  Ingliz tili
                </h1>
              </button>

              <button
                className={`flex items-center xl:w-48 w-32 h-14 px-5 rounded-3xl ${active === 2 ? "bg-gradient-to-r" +
                  " from-gradientStart to-gradientFinish" : "bg-white"} border-solid border border-black/20`}
              >
                <div className="w-6 md:w-auto h-6 md:h-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={Karea2}
                    alt="#"
                  />
                </div>
                <h1
                  className={`ml-3 md:ml-4 font-medium text-sm xl:text-base flex tracking-wide ${active === 2 ? 
                    "text-white" : "text-black"}`}
                >
                  Koreas tili
                </h1>
              </button>

              <button
                className={`flex items-center xl:w-48 w-32 h-14 px-5 rounded-3xl ${active === 3 ? "bg-gradient-to-r" +
                  " from-gradientStart to-gradientFinish" : "bg-white"} border-solid border border-black/20`}
              >
                <div className="w-6 md:w-auto h-6 md:h-auto">
                  <Image
                    width={24}
                    height={24}
                    src={Rus}
                    alt=""
                  />
                </div>
                <h1
                  className={`ml-3 md:ml-4 font-medium text-sm xl:text-base  flex tracking-wide ${active === 3 ?
                    "text-white" : "text-black"}`}
                >
                  Rus tili
                </h1>
              </button>

            </div>
          </div>
          <h1 className="xl:ml-16 md:ml-9 ml-0 text-black mt-8">O’zingiz haqingizda</h1>
          <ContactFormNavber />
        </div>
      </Dialog>
    </Transition>
  )
}
