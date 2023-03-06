import React from "react";
import NextIcon, {Galochka, Undov,} from "../../Icons/Icons";
import {Link} from "react-scroll/modules";

function OverviewMainTwoBottomRight() {
  return (
      <div className="xl:w-1/2 lg:w-[480px] w-11/12 h-auto lg:ml-4 md:ml-8 ml-4 lg:mt-0 mt-4 rounded-3xl">
        <div className="bg-germain rounded-3xl xl:mt-0 lg:mt-0 md:mt-4"
             data-aos="fade-down-left">
          <h1 className="xl:w-7/12 text-3xl xl:pl-14 pl-8 pt-10 text-black">Grantlar eng yaxshi
            talabalarga beriladi</h1>
          <div className="flex xl:ml-14 ml-8 mt-6">
            <div className="mt-1"> <Undov /> </div>
            <p className="pl-3 text-base text-black">100% o’qish tolovi</p>
          </div>
          <div className="flex xl:ml-14 ml-8 mt-5">
            <div className="mt-1"> <Undov /> </div>
            <p className="pl-3 text-base text-black">100% yotoqxona to’lovi</p>
          </div>
          <div className="flex xl:ml-14 ml-8 mt-12">
            <div className="mt-1"> <Galochka /> </div>
            <p className="pl-3 text-base text-black">Xalqaro talabalar uchun stipendiyalar</p>
          </div>
          <div className="flex xl:ml-14 ml-8 mt-5">
            <div className="mt-1"> <Galochka /> </div>
            <p className="xl:w-7/12 w-10/12 pl-3 text-base text-black">
              TOPIK 3 va undan yuqori darajaga ega bo’lganlar uchun (imtihon (Politexnika universitetiga abituriyentlar uchun - 2-bosqich)  Transfer talabalari uchun istisno.
            </p>
          </div>

          <Link
            to="footer"
            duration={5000}
          >
            <div className="w-10/12 mx-10 mb-8 mt-20  bg-white rounded-full h-16 flex justify-center items-center
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

        <div className="h-full bg-germain rounded-3xl mt-4"
             data-aos="fade-up-left">
        <h1 className="xl:w-7/12 text-3xl xl:pl-14 pl-8 pt-12 text-black"
        >
          Bakalavr bosqichiga qabul
          qilish mezonlari</h1>
          <div className="flex xl:pl-14 pl-8 mt-8">
            <div className="mt-1"> <Undov /> </div>
            <p className="pl-3 text-base text-black"
            >
              Talaba va uning ota-onasi chet ellik bo’lishi kerak
            </p>
          </div>
          <div className="flex xl:pl-14 pl-8 mt-8">
            <div className="mt-1"> <Undov /> </div>
            <p className="w-4/6 pl-3 text-base text-black"
            >
              Talaba 12 yillik ta’limni tamomlashi kerak (maktab - 9 yil, kollej yoki litsey - 3 yil)
            </p>
          </div>
          <div className="flex xl:pl-14 pl-8 mt-8">
            <div className="mt-1"> <Undov /> </div>
            <p className=" pl-3 text-base text-black"
            >
              Topik 3 yoki undan yuqori darajaga ega bo’lishi kerak
            </p>
          </div>
          <div className="flex w-full xl:pl-14 pl-8 mt-12">
            <div className="mt-1"> <Galochka /> </div>
            <p className="xl:w-8/12 w-11/12 pl-3 text-base text-black">Fakultetlar Gumanitar fanlar universiteti Ingliz tili fakulteti Xitoy tili fakulteti Global erkin fanlar fakulteti Koreya madaniy mazmuni
              <br className="hidden xl:block"/>  fakulteti Global menejment universiteti Hayot fanlari universiteti Tibbiyot muhandisligi fakulteti Ommaviy kommunikatsiyalar fakulteti Jamoat salomatligi fakulteti Media kommunikatsiyalar
              <br className="hidden xl:block"/>   fakulteti Aktyorlik va raqs fakulteti Kino va animatsiya fakulteti  Elektron tijorat fakulteti Politexnika universiteti Tibbiyot IT
              <br className="hidden xl:block"/> muhandisligi fakulteti Materiallar muhandisligi fakulteti raqamli  animatsiya Internet tadqiqotlari fakulteti Aqlli avtomobillar
              <br className="hidden xl:block"/>  fakulteti Energetika tizimlari fakulteti Ijro sanati fakulteti Tibbiyot  muhandisligi fakulteti Arxitektura fakulteti (5 yil) Sog’liqni saqlash
              <br className="hidden xl:block"/> va biotexnologiya fakulteti Yoshlar ta’limi konsalting fakulteti Ijtimoiy ta’minot fakulteti
            </p>
          </div>

          <Link
            to="footer"
            duration={5000}>
            <div className="w-10/12 mx-10 2xl:mt-24 xl:mt-48 mt-20 bg-white rounded-full h-16 flex justify-center items-center
          cursor-pointer"
            >
              <p className="text-base flex items-center tracking-widest text-black mr-3 text-black"
              >
                Kursga yozilish
              </p>
              <div className=" bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full" id="child-courses"
              >
                <NextIcon />
              </div>
            </div>
          </Link>
          <h1 className="text-transparent mt-10" >Kursga yozilish</h1>
        </div>
      </div>
  );
}

export default OverviewMainTwoBottomRight;