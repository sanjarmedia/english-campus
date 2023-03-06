import React from "react";
import Image from "next/image";
import Programmer from "../../public/images/image 21.png"
import skill from "../../public/images/Linguaskill.png";
import NextIcon from "../Icons/Icons";
import Link from "next/link";

function LinguakillMain() {
  return (
    <div className="md:pt-60 pt-36">
      <div className="m-auto container w-full flex flex-col items-center">
        <h1 className="font-bold xl:text-5xl text-3xl text-start xl:w-7/12
        w-9/12 2xl:ml-16 xl:ml-28 -ml-16 xl:ml-20 tracking-tight bg-clip-text bg-gradient-to-r
        from-black to-gradient-text text-transparent py-1 text-center py-2">
          Linguaskillga Ingliz tili testi bilan tez natijalar
        </h1>
        <p className=" text-sm mt-5 text-light-black -ml-[200px] md:-ml-[470px] lg:-ml-[670px] xl:-ml-[470px] 2xl:-ml-[670px]">
          12 Noy 2022 • Yangiliklar
        </p>
        <div className="flex xl:mx-[345px] md:mx-[80px] mx-10 mt-8">
          <div>
            <Image src={Programmer} width={387} height={278} alt="#"/>
          </div>
          <div className="ml-10">
            <Image src={skill} width={387} height={278} alt="#" />
          </div>
        </div>
       <div className="xl:w-11/12">
        <div className="xl:ml-72 ml-10 bg-white">
          <p className="pt-16 w-11/12 lg:w-full xl:mx-0 mr-24 xl:ml-0 lg:ml-14 md:ml-10 text-black">
            Linguaskill imtihoni Cambridge Assessment English tomonidan tashkil qilinadigan onlayn imtihon turi bo’lib,
            asosan ta’lim institutlari tomonidan talabalarni baholash, til bilish darajalarini aniqlash, ish beruvchilar uchun
            hodimlarining til bilish darajasini aniqlash maqsadlarida tashkil qilinadi. Ushbu imtihon jami
            4ta ko’nikma 3ta modulda o’tkaziladi:
          </p>
          <p className="pt-10 w-11/12 lg:w-full xl:mx-0 mr-24 xl:ml-0 lg:ml-14 md:ml-10 text-black">
            Reading and Listening Speaking Writing
            Boshqa imtihonlardan farqi imtihon to’liq kompyuterda topshiriladi. Test natijalari 48 soat ichida ma’lum bo’ladi.
            Natijalarni baholash CEFR bo’yicha bo’ladi va quyidagi ballar uchun quyidagi darajalar beriladi:
            100-119 = A1 (Beginner) daraja 120-139 = A2 (Elementary) daraja. 140 -159 = B1 (Pre-Intermediate
            – Intermediate) daraja. 160 -179 = B2 (Upper-Intermediate) daraja. 180 + = C1 (Advanced) darajaga
            to’g’ri keladi.
          </p>
          <p className="pt-10 w-11/12 lg:w-full xl:mx-0 mr-24 xl:ml-0 lg:ml-14 md:ml-10 text-black">
            Sertifikat amal qilish muddati 2 yil. Imtihondan C1 darajasi olinganda ingliz tili o’qituvchilari
            oyligiga 50 foiz ustama to’lanishi belgilangan.
          </p>
          <p className="pt-10 w-11/12 lg:w-full xl:mx-0 mr-24 xl:ml-0 lg:ml-14 md:ml-10 text-black">
            Linguaskill sizga qanday yordam berishi haqida ko’proq ma’lumot olish uchun biz bilan aloqaga chiqing.
          </p>

          <Link href="https://www.cambridgeenglish.org/exams-and-tests/linguaskill/find-a-centre/">
            <div
              className="w-9/12 mx-10 mt-20 xl:mt-24 lg:mt-40 bg-gradient-to-r from-gradientStart to-gradientFinish
                rounded-full h-16 flex justify-center items-center cursor-pointer"
            >
              <p className="text-base text-white flex items-center tracking-widest text-black mr-3 ">
                Batafsil malumot olish uchun
              </p>
              <div className="bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
                <NextIcon/>
              </div>
            </div>
          </Link>
        </div>
       </div>

      </div>
    </div>
  );
}

export default LinguakillMain;