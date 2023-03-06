import React, {useState} from "react";
import logo from "../../public/images/logo.png"
import Image from "next/image";
import NextIcon, {HamburgerIcon, HoverChizu, XIcon} from "../Icons/Icons";
import {MobileMenu} from "./MobileMenu";
import {useRouter} from "next/router";
import equals from "equals";
import {Link} from "react-scroll/modules";
import {NavbarModal} from "./NavbarModal";

function Navbar() {
  const {pathname} = useRouter()
  const [pageState, setPageState] = useState(1)
  const [state, setState] = useState(false)
  const [mobile, setMobile] = useState(false)

  function Hamburger() {
    if (equals(pathname, "/")) {
      return <HamburgerIcon/>
    }
    return <HamburgerIcon/>
  }

  return (
    <div className=
           "z-50 w-full xl:grid xl:place-items-center fixed xl:fixed bg-navbar-bg xl:z-40 overflow-hidden">
      <div className=
             "xl:container m-auto w-full flex items-center justify-between py-5 px-5 font-text">
        <Link
          to="header"
          duration={5000}
        >
          <div
            className="xl:ml-1.5 md:ml-5 cursor-pointer"
            data-aos="fade-right"
          >
            <Image
              src={logo}
              width={125}
              height={40}
              alt="#"/>
          </div>
        </Link>
        <div className="mt-4 text-black font-medium text-base leading-4 text-base  justify-center hidden lg:flex gap-10">
          <Link
            to="about"
            href="about"
            duration={5000}
            data-aos="fade-down"
          >
            <div
              onClick={() =>
                setPageState(1)}
              className={pageState === 1 ?
                "text-red text-base cursor-pointer tracking-widest" :
                "text-black text-base cursor-pointer tracking-widest hover:text-red"}
            >
              Biz haqimizda
            </div>
            {pageState === 1 ?
              <div className="m-2">
                <HoverChizu className="hidden hover:block"/>
              </div> : " "
            }
          </Link>

          <Link
            href="language"
            to="language"
            duration={5000}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <button
              onClick={() => setPageState(2)}
              className={pageState === 2 ?
                "text-red text-base cursor-pointer tracking-widest" :
                "text-black text-base cursor-pointer tracking-widest hover:text-red"}
              >
                Til kurslari
              </button>

              {pageState === 2 ? <div className="m-2">
                <HoverChizu className="hidden hover:block"/>
              </div> : ""}
          </Link>

          <Link
            href="study"
            to="study"
            duration={5000}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <button onClick={() =>
              setPageState(3)}
                    className={pageState === 3 ?
                      "text-red text-base cursor-pointer tracking-widest " :
                      "text-black text-base cursor-pointer tracking-widest hover:text-red"}>
                Xorijda o’qish
            </button>
            {pageState === 3 ?
              <div className="m-2">
                <HoverChizu className="hidden hover:block"/>
              </div> : ""}
          </Link>

          <Link
            href="child-courses"
            to="child-courses"
            duration={5000}
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <button onClick={() =>
              setPageState(4)}
                    className={pageState === 4 ?
                      "text-red text-base cursor-pointer tracking-widest" :
                      "text-black text-base cursor-pointer tracking-widest hover:text-red"}>
              Bolalar kurslari
            </button>
            {pageState === 4 ?
              <div className="m-2">
                <HoverChizu className="hidden hover:block"/>
              </div> : ""}
          </Link>

          <Link
            href="footer"
            to="footer"
            duration={5000}
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <button onClick={() =>
              setPageState(5)}
                    className={pageState === 5 ?
                      "text-red text-base cursor-pointer tracking-widest" :
                      "text-black text-base cursor-pointer tracking-widest hover:text-red"}>
              Aloqa
            </button>
            {pageState === 5 ? <div className="mt-2 -ml-4">
              <HoverChizu className="hidden hover:block"/>
            </div> : ""}
          </Link>
        </div>
        <Link
          href="NavbarModal"
          onClick={() => setState(!state)}
          className="text-black font-medium hover:text-red  text-base leading-4 text-base justify-center hidden lg:flex cursor-pointer"
          data-aos="fade-left"
        >
          <button className="mr-3 xl:-mt-3  tracking-widest text-base ">
            Kursga yozilish
          </button>
          <div className="xl:-mt-3 cursor-pointer">
            <NextIcon/>
          </div>
        </Link>
        <button className="w-10 h-10 z-40 inline lg:hidden "
                onClick={() =>
                  setMobile(!mobile)}>
          {state &&
            <div className="z-50 fixed -mt-2">
              <XIcon/>
            </div>}
          {!mobile && Hamburger()}
        </button>
      </div>
      <div className="inline lg:hidden">
        {mobile && <MobileMenu open={mobile} close={() => setMobile(false)}/>}
      </div>
      <NavbarModal open={state} close={() => setState(false)}/>
    </div>
  );
}

export default Navbar;