import React, {Fragment} from "react"
import { Dialog, Transition } from "@headlessui/react"
import {Link} from "react-scroll/modules";
import {FacebookIcon, HoverChizu, InstagramIcon, TelegramIcon, XIcon, YouTubeIcon} from "../Icons/Icons";
import logo from "../../public/images/logo.png"
import Image from "next/image";





export function MobileMenu({open, close}) {
  return (
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto justify-between xl:ml-40 2xl:ml-80 overflow-x-hidden"
          onClose={close}
        >

          <div className="bg-white w-full fixed py-5 px-5 md:px-0 overflow-x-hidden">
            <div className="flex justify-between">
              <div className=" ml-1.5 xl:ml-0">
                <Link
                  to="header"
                  duration={5000}
                >
                  <Image src={logo} alt="#" />
                </Link>
              </div>
              <div className="mt-2.5 mr-5" onClick={close}>
                <XIcon/>
              </div>
            </div>

            <ul className="font-text py-5 mx-10">

          <li className="mt-16 ml-12 sm:ml-32 md:ml-40 flex cursor-pointer">
            <Link to="about"
                  spy={true} smooth={true} offset={50} duration={500}
                  data-bs-dismiss="modal"
            >
              <p  onClick={close}  className= "text-xl text-red sm:text-3xl md:text-4xl mb-1 font-bold  tracking-widest ml-2">
                Biz haqimizda
              </p>
              <div className="ml-12">
                <HoverChizu className="hidden hover:block" />
              </div>
            </Link>
          </li>

              <li className="mt-8 ml-12 sm:ml-32 md:ml-40 flex justify-between">
                <Link
                  to="language"
                  duration={5000}
                >
                  <p onClick={close} className="text-black text-xl sm:text-3xl md:text-4xl mb-1 font-bold tracking-widest mx-5">
                    Til kurslari
                  </p>
                </Link>
              </li>

              <li className="mt-8 ml-12 sm:ml-32 md:ml-40 flex justify-between">
                <Link
                  to="study" duration={5000}
                >
                  <p onClick={close} className="text-black text-xl mb-1 font-bold text-xl sm:text-3xl md:text-4xl tracking-widest mx-2">
                    Xorijda o’qish
                  </p>

                </Link>
              </li>

          <li className="mt-8 border-border-color ml-12 sm:ml-32 md:ml-40 flex justify-between">
            <Link
              to="child-courses"
              duration={5000}
            >
              <p onClick={close} className="text-black text-xl mb-1 font-bold text-xl sm:text-3xl md:text-4xl tracking-widest">
                Bolalar kurslari
              </p>
            </Link>
          </li>
          <li className="mt-8 border-border-color ml-14 sm:ml-36 md:ml-48 flex justify-between">
            <Link to="footer">
              <p onClick={close} className="text-black text-xl mb-1 font-bold text-xl sm:text-3xl md:text-4xl tracking-widest mx-10">
                Aloqa
              </p>
            </Link>
          </li>
        </ul>
        <div className="w-full flex ml-16  md:ml-60 mt-20 xl:mt-16 ">
          <a href="https://www.facebook.com/profile.php"><FacebookIcon /></a>
          <a href="https://instagram.com/englishcampus.uz" className="ml-6"><InstagramIcon /></a>
          <a href="https://t.me/englishcampus1" className="ml-6"><TelegramIcon /></a>
          <a href="https://youtube.com/@englishcampuseducation3427" className="ml-6"><YouTubeIcon /></a>
        </div>

            <p className="mt-14 ml-6 md:ml-48 tracking-wide text-base text-black">© 2022 English Campus. All rights reserved.</p>

          </div>
        </Dialog>
      </Transition>
  )
}
