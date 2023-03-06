import React from "react";
import NextIcon from "../../Icons/Icons";
import {Link} from "react-scroll/modules";

function OverviewChildCenter() {
  return (
    <div className="mx-5">
      <div className="container bg-germain w-full m-auto mt-10 px-5 rounded-3xl"
           data-aos="flip-up">
        <div className="pb-5">
          <h1 className="text-2xl md:text-3xl xl:text-5xl pl-5 pt-10 text-black"
          >
            Nega aynan <br/>
            Biz?
          </h1>

          <div className="w-full xl:flex">
            <div className="xl:w-2/3">
              <p className="w-full xl:w-8/12 text-base xl:text-xl pl-5 pt-14 text-black"
              >
                English Campus o’quv markazi tashkil etilgan bolalar
                kurslari orqali farzandlarimiz, nafaqat yuqoridagi
                yo’nalishlar boʻyicha bilim ko’nikmalarga ega bo’ladi,
                balki Muomala madaniyati, Dunyo qarashining
                kengayishi va tengdoshlariga nisbatan ma’lumotlarni
                oson qabul qilish qobiliyatlarini shakllantiradi.
              </p>
            </div>
            <div className="xl:w-3/5 mx-5">
              <p className="w-full xl:w-6/12 text-base xl:text-xl pt-5 xl:pt-14 text-black"
              >
                Bizdagi malakali mutaxassislar esa
                farzandingiz tarbiyali, odobli, aqlli inson
                bo’lib yetishishlari uchun o’zlaridagi bor
                imkoniyatni ishga soladilar!
              </p>
            </div>
          </div>
          <Link
            to="footer"
            duration={5000}>
            <div className="w-10/12 xl:w-11/12 mx-10 my-10  xl:mt-40  bg-white rounded-full h-16
            flex justify-center items-center"
            >
              <p className="text-base flex items-center tracking-widest
              text-black mr-3"
              >
                Kursga yozilish
              </p>
              <div className="bg-gradient-to-r from-red to-gradientFinish text-transparent
              bg-red rounded-full"
              >
                <NextIcon />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default OverviewChildCenter;