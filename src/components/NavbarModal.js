import React, {Fragment, useState} from "react"
import {Dialog, Transition} from "@headlessui/react"
import Image from "next/image"
import {XXIcon} from "../Icons/Icons"
import book from "../../public/images/book.png";
import globus from "../../public/images/Globus.png";
import child from "../../public/images/Child.png";
import Usa from "../../public/images/usa.png";
import Rus from "../../public/images/rusflag.png";
import Karea2 from "../../public/images/Karea2.png"

import ContactFormNavbar from "./ContactFormNavbar";

export function NavbarModal({open, close}) {

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div"
                    className="fixed inset-0 z-50 overflow-y-auto justify-between  xl:ml-40 2xl:ml-80 overflow-x-hidden"
                    onClose={close}>
                <div className="px-8 py-5 xl:w-10/12 items-center bg-white rounded-3xl shadow-2xl">
                    <div className="flex p-4 h-24 justify-between">
                        <h1 className="flex font-bold text-xl md:text-3xl flex items-center tracking-tight
                  bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent xl:pt-12 2xl:pt-12 xl:pb-12 2xl:pb-14 ml-8">
                            Kurs uchun ariza yuborish
                        </h1>
                        <div className="flex px-3 sm:px-5 py-3 sm:py-5 2xl:py-7 h-10 2xl:h-20 border-solid border border-black/20
            rounded-2xl  mt-2.5 cursor-pointer" onClick={close}>
                            <div className="sm:-mt-1.5 2xl:mt-0">
                                <XXIcon/>
                            </div>
                            <p className="ml-3 -mt-1.5 text-base xl:text-xl tracking-wide hidden 2xl:block text-black">
                                Oynani yopish</p>
                        </div>

                    </div>
                    <div className="ml-12 mt-4">
                        <h1 className=" text-base tracking-wide py-4 font-medium text-black">Bo’limni tanlang</h1>
                        <div className="flex flex-wrap mt-5 gap-5">


                            <button
                                className="flex items-center h-14 px-5 rounded-3xl bg-white border-solid border border-black/20">
                                <div className="w-6 md:w-auto h-6 md:h-auto">
                                    <Image
                                        className="object-contain"
                                        width={24}
                                        height={24}
                                        src={book}
                                        alt="#"
                                    />
                                </div>
                                <h1 className=" ml-3 md:ml-4 font-medium text-black text-base md:text-xl flex tracking-wide">
                                    Til kurslari
                                </h1>
                            </button>


                            <button
                                className="flex items-center h-14 px-5 rounded-3xl border-solid border border-black/20">
                                <div className="w-6 md:w-auto h-6 md:h-auto">
                                    <Image
                                        className="object-contain"
                                        width={24}
                                        height={24}
                                        src={globus}
                                        alt="#"
                                    />
                                </div>
                                <h1 className="ml-3 md:ml-4 font-medium text-black text-base md:text-xl flex tracking-wide">
                                    Xorijda o’qish
                                </h1>
                            </button>


                            <button
                                className="flex items-center h-14 px-5 rounded-3xl border-solid border border-black/20">
                                <div className="w-6 md:w-auto h-6 md:h-auto">
                                    <Image
                                        className="object-contain"
                                        width={24}
                                        height={24}
                                        src={child}
                                        alt="#"
                                    />
                                </div>
                                <h1 className="ml-3 md:ml-4 font-medium text-black text-base md:text-xl flex tracking-wide">
                                    Bolalar kurslari
                                </h1>
                            </button>
                        </div>
                    </div>
                    <div className="ml-12">
                        <h1 className="mt-10 text-base tracking-wide py-4 font-medium text-black">Ichki bo’limni tanlang</h1>
                        <div className="flex flex-wrap mt-5 gap-5">
                            <button className="flex items-center h-14 bg-white
               px-5 rounded-3xl border-solid border border-black/20">
                                <div className="w-6 md:w-auto h-6 md:h-auto">
                                    <Image
                                        width={24}
                                        height={24}
                                        src={Usa}
                                        alt="#"
                                        className="object-contain"
                                    />
                                </div>
                                <h1 className="ml-3 md:ml-4 font-medium text-black text-base md:text-xl flex tracking-wide">
                                    Ingliz tili
                                </h1>
                            </button>

                            <button
                                className="flex items-center h-14 px-5 rounded-3xl border-solid border border-black/20">
                                <div className="w-6 md:w-auto h-6 md:h-auto">
                                    <Image
                                        className="object-contain"
                                        width={24}
                                        height={24}
                                        src={Karea2}
                                        alt="#"
                                    />
                                </div>
                                <h1 className="ml-3 md:ml-4 font-medium text-black text-base md:text-xl flex tracking-wide">
                                    Koreas tili
                                </h1>
                            </button>

                            <button
                                className="flex items-center h-14 px-5 rounded-3xl border-solid border border-black/20">
                                <div className="w-6 md:w-auto h-6 md:h-auto">
                                    <Image
                                        width={24}
                                        height={24}
                                        src={Rus}
                                        alt=""
                                    />
                                </div>
                                <h1 className="ml-3 md:ml-4 font-medium text-black text-base md:text-xl flex tracking-wide">
                                    Rus tili
                                </h1>
                            </button>
                        </div>
                    </div>
                    <h1 className="ml-14 mt-8 text-black text-base">O’zingiz haqingizda</h1>
                    <ContactFormNavbar />
                </div>
            </Dialog>

        </Transition>
    )
}
