import React from 'react';
import NextIcon, {Galochka, Undov} from "../../Icons/Icons";
import {Link} from "react-scroll";

function OverviewMainTwoBottomLeftOnclick() {
  return (
    <div className="xl:w-1/2 lg:w-[475px] w-11/12 bg-germain lg:ml-0 md:ml-8 ml-4 rounded-3xl"
         data-aos="fade-right">
      <h1 className="xl:w-8/12 xl:text-3xl text-2xl xl:px-10 xl:ml-0 ml-8 pt-10 text-black">Work and Travel in Germany</h1>


      <div className=" xl:ml-10 ml-8 mt-7">
        <p className="xl:w-8/12 pt-2 text-black">
          Biz bilan Yevropa bo’ylab sayohat qilish Yevropa Shengen vizasini qo’lga kiritish uchun ajoyib imkoniyat!
        </p>
      </div>

      <div className=" xl:ml-10 ml-8 mt-7">
        <p className="xl:w-8/12 pt-2 text-black">
          Work and Travel dasturi bu – Germaniyada xalqaro talabalarning yozgi ta’tilda bandligini ta’minlash,
          yozni behuda o’tkazmasdan ishab daromad topish, butun Yevropa bo’ylab sayohat qilish imkonini beruvchi ajoyib dastur!
        </p>
      </div>

      <div className=" xl:ml-10 ml-8 mt-7">
        <p className="xl:w-8/12 pt-2 text-black">
         Germaniya madaniyati bilan tanishishi uchun tashkil etilgan, faqatgina talabalar qatnasha oladigan maxsus dastur hisoblanadi.
        </p>
      </div>

      <div className=" xl:ml-10 ml-8 mt-7">
        <p className="xl:w-8/12 pt-2 text-black">
          Work and Travel dasturida Bakalavr bosqichining 1-2-3… bosqich talabalari (bitiruvchi kurslardan tashqari), shuningdek, magistratura 1-bosqich talabalari qatnashishi mumkin.
        </p>
      </div>

      <Link to="footer" duration={5000}>
        <div
          className="w-10/12 mx-10 mt-14 xl:mt-20 lg:mt-40  bg-white rounded-full h-16 flex justify-center items-center
         cursor-pointer"
        >
          <p className="text-base flex items-center tracking-widest text-black mr-3 text-black">
            Kursga yozilish
          </p>
          <div className="bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
            <NextIcon/>
          </div>
        </div>
        <h1 className="text-transparent mt-8">Kursga yozilish</h1>
      </Link>

    </div>
  );
}

export default OverviewMainTwoBottomLeftOnclick;