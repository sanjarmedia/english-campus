import React from "react";
import {Undov, Galochka} from "../../Icons/Icons";
import Image from "next/image";
import ok from "../../../public/images/false.png";
import no from "../../../public/images/truee.png";

function OverviewChildBottom() {
  return (
    <div className="container m-auto mt-10 xl:mt-20 lg:flex">
      <div className="bg-muted w-11/12 lg:w-1/2 rounded-3xl p-5 md:p-10 lg:ml-0 ml-5" data-aos="flip-right">
        <div className="flex items-start justify-between gap-4 md:gap-32">
          <div className="gap-2">
            <h1 className="font-bold text-2xl xl:text-4xl tracking-tight text-black w-1/2">
              Mavjud mumammolar
            </h1>
          </div>
          <div className="w-20 md:w-auto lg:w-10 h-20 md:h-auto lg:w-10">
            <Image
              src={ok}
              width={60}
              height={60}
              className="rounded-lg"
              alt="#"
            />
          </div>
        </div>
        <div className="items-start gap-4 mt-12">
          <div className="flex items-center p-0 gap-3">
            <Undov />
            <p className="text-sm md:text-base items-center text-black">
              Farzandingiz o’jarmi?
            </p>
          </div>
          <div className="mt-4 flex items-center p-0 gap-3">
            <Undov />
            <p className="text-sm md:text-base items-center text-black">
              Husnixatidan qoniqmaysizmi?
            </p>
          </div>
          <div className="mt-4 flex items-center p-0 gap-3">
            <Undov />
            <p className="text-sm md:text-base items-center text-black">
              Xotirasi sustmi?
            </p>
          </div>
          <div className="mt-4 flex items-center p-0 gap-3">
            <Undov />
            <p className="text-sm md:text-base items-center text-black">
              Yangi insonlar bilan tez chiqisha olmaydimi?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted w-11/12 lg:w-1/2 rounded-3xl p-5 md:p-10 ml-5 mt-5 lg:mt-0" data-aos="flip-left">
        <div className="flex items-start justify-between gap-4 md:gap-32">
          <div className="gap-2">
            <h1 className="font-bold text-2xl xl:text-4xl tracking-tight text-black w-3/4 lg:w-full xl:w-1/2 text-black">
              Muammolarning bizdagi yechimi
            </h1>
          </div>
          <div className="xl:w-10 w-24 md:w-auto h-10 md:h-auto">
            <Image
              src={no}
              width={60}
              height={60}
              className="rounded-lg"
              alt="#"
            />
          </div>
        </div>

        <div className="items-start gap-4 mt-10">
          <div className="flex items-center p-0 gap-3">
            <Galochka />
            <p className="text-base items-center text-sm md:text-base w-full  xl:w-full text-black">
              Bizdagi malakali ustozlarning birinchi darslarining o’zidayoq
              farzandingizdagi o’zgarishlarni ko’rib lol qolasiz

            </p>
          </div>
          <div className="mt-4 flex items-center p-0 gap-3">
            <Galochka />
            <p className="text-base items-center text-sm md:text-base w-full xl:w-full text-black">
              Maxsus mashg’ulotlarimiz orqali farzandingiz husnixati
              birnecha barobar yaxshilanadi va butun umri davomida
              chiroyli husnixat bilan yoza oladi
            </p>
          </div>
          <div className="mt-4 flex items-center p-0 gap-3">
            <Galochka />
            <p className="text-base items-center text-sm md:text-base w-full xl:w-full text-black">
              Interaktiv darslar yordamida farzandingiz xotirasi
              rivojlanadi

            </p>
          </div>
          <div className="my-4 flex items-center p-0 gap-3">
            <Galochka />
            <p className="text-base items-center text-sm md:text-base w-full xl:w-full text-black">
              Bizdagi samimiy ustozlar va ahillik jamoa shiori ostida harakat
              qiluvchi malakali mutaxassislarimiz farzandlaringizni, yangi
              insonlar bilan tez chiqisha olishi uchun barcha ko’nikmalarni
              sindirishadi
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default OverviewChildBottom;