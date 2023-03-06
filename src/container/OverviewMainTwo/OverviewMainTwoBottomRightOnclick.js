import React from "react";
import NextIcon, {Galochka, Undov} from "../../Icons/Icons";
import {Link} from "react-scroll";

function OverviewMainTwoBottomRightOnclick() {
  return (
    <div className="xl:w-1/2 lg:w-[480px] w-11/12 h-auto lg:ml-4 md:ml-8 ml-4 lg:mt-0 mt-4 rounded-3xl">
      <div className="bg-germain rounded-3xl xl:mt-0 lg:mt-0 md:-mt-4"
           data-aos="fade-down-left">
        <h1 className="xl:w-7/12 text-3xl xl:pl-14 pl-8 pt-10 text-black">Dastur davomiyligi</h1>


        <div className="xl:ml-11 ml-8 mt-7 mt-5">
          <p className="xl:w-7/12 w-10/12 pl-3 text-base text-black">
            Dastur davomiyligi 90 kunni (3 oy) ni tashkil etadi. Ish boshlanish vaqti taklif qilinayotgan ish turi va
            sharoitiga qarab Iyun oyining 15 sanasidan boshlanib 15-Sentyabrgacha davom etadi.
          </p>
        </div>

        <div className="xl:ml-11 ml-8 mt-7 mt-5">
          <p className="xl:w-7/12 w-10/12 pl-3 text-base text-black">
            English Campus  orqali Work and Travel dasturida qatnashing va Yevropaga Shengen vizasini qo’lga kiritib yozgi
            ta’tilingizni maroqli va foydali o’tkazing. Biz sizga barcha Hujjatlarni tayorlashda yordam beramz!
          </p>
        </div>

        <div className="xl:ml-11 ml-8 mt-7 mt-5">
          <h1 className="xl:w-7/12 w-10/12 pl-3 text-xl text-black">
            (Xizmatlar shartnoma asosida!)
          </h1>
        </div>

        <Link
          to="footer"
          duration={5000}
        >



          <div className="w-10/12 mx-10 mb-8 2xl:mt-44 lg:mt-60 md:mt-36 mt-20  bg-white rounded-full h-16 flex justify-center items-center
            cursor-pointer"
          >
            <p className="text-base flex items-center tracking-widest text-black mr-3
              text-black"
            >
              Kursga yozilish
            </p>
            <div className=" bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red
              rounded-full"
            >
              <NextIcon />
            </div>
          </div>
        </Link>
        <h1 className="text-germain pt-3">Ko’proq malumot olish</h1>
      </div>

    </div>
  );
}

export default OverviewMainTwoBottomRightOnclick;