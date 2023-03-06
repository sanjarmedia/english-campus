import React from "react";
import {Chiziq, KubIcon} from "../Icons/Icons";
import Image from "next/image";
import girl from "../../public/images/girl.png";
function OverviewGirl() {
  return (
    <div className="bg-white overflow-x-hidden">
      <div
        className=" container m-auto w-full flex justify-evenly mt-10 lg:mt-48"
        id="about"
      >
        <div className=" m-auto w-full lg:flex justify-evenly flex-wrap">

          <div className="lg:w-1/2 2xl:w-3/5 w-full lg:mt-10 mt-0">
            <div
              className="flex flex-row  items-center gap-10"
              data-aos="fade-right"
            >
              <div className="ml-8 lg:ml-0">
                <KubIcon />
              </div>
              <h1 className="font-bold text-3xl md:text-3xl xl:text-5xl w-8/12 lg:w-9/12 xl:w-10/12 2xl:w-8/12
              items-center tracking-tight bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
                Koreya davlati bo’yicha
                TOP universitetlarda
                tahsil olish imkoni
              </h1>
            </div>
            <div className="flex flex-row items-center gap-10 my-8"
                 data-aos="fade-left"
            >
              <div className="ml-8 lg:ml-0">
                <KubIcon />
              </div>
              <h1 className="py-2 font-bold text-3xl md:text-4xl xl:text-5xl w-8/12 lg:w-9/12 2xl:w-8/12 items-center
              tracking-tight bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
                Intensiv kurslar orqali
                xorijiy tillarni, tez va
                sifatli o’rganish
              </h1>
            </div>
            <div className="flex flex-row items-center gap-10"
                 data-aos="fade-right"
            >
              <div className="ml-8 lg:ml-0">
                <KubIcon />
              </div>
              <h1 className="py-2 font-bold text-3xl md:text-4xl xl:text-5xl w-8/12 lg:w-9/12 2xl:w-8/12 items-center
              tracking-tight bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
                Farzandlar kelajagi
                uchun, harakatni
                bugundan boshlash
              </h1>
            </div>
          </div>

          <div className="lg:w-1/2 2xl:w-2/5 lg:mx-0 mx-9 lg:mt-0 mt-8 lg:ml-0 md:ml-24"
               data-aos="zoom-in"
          >
            <Image
              src={girl}
              width={590}
              height={590}
              alt="#"
              className="rounded-2xl"
            />
          </div>

        </div>
      </div>

      <div className="container m-auto lg:mt-52 mt-32">
        <h1 className="py-2 font-bold md:text-5xl text-3xl w-10/12 md:w-11/12 xl:w-9/12 mx-9 lg:mx-0 items-center
        tracking-tight bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent"
            data-aos='fade-up'
        >
          English Campus o’quv markazi, o’zidagi bir-necha
          yillik tajribasi va 1000 dan ortiq kelajakdagi yo’lini
          qidirayotgan yosh yigit-qizlarga o’z yordamini
          berishga ulgurdi.
        </h1>
        <div className="flex lg:mt-24 mt-16 md:mx-8 2xl:mx-0 justify-between">
          <div className="mt-20 hidden md:block"
               data-aos='fade-right'>
            <Chiziq />
          </div>
          <p className="w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3  font-normal text-xl tracking-widest text-black xl:mr-96 ml-10 xl:ml-0"
             data-aos='fade-left'>
            O’z kasbining haqiqiy mutaxassislari
            orqali tashkillashtirilgan. Biz uchun har
            bir o’quvchimizning alohida qadri va
            o’rni bor. Bizning shior esa Bir maqsad
            yo’lida, birgalikda harakat qilish!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverviewGirl;