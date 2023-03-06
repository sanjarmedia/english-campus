import React from "react";
import NextIcon, {Galochka, Undov} from "../../Icons/Icons";
import {Link} from "react-scroll/modules";

function OverviewMainTwoBottomLeft() {
  return (
    <div className="xl:w-1/2 lg:w-[475px] h-auto w-11/12 bg-germain lg:ml-0 md:ml-8 ml-4 rounded-3xl"
         data-aos="fade-right">
      <h1 className="xl:w-8/12 xl:text-3xl text-2xl xl:px-10 xl:ml-0 ml-8 pt-10 text-black">Janubiy Koreaning nufuzli
        Universitetlaridagi bakalavr dasturiga kirish</h1>

      <div className="flex xl:ml-14 ml-8 mt-6">
        <div className="mt-1"><Undov/></div>
        <p className="pl-3 text-base text-black">6 ta bo’lim, 46 fakultet</p>
      </div>

      <div className=" xl:ml-14 ml-8 mt-12">
        <div className="flex">
          <div className="mt-2"><Galochka/></div>
          <h1 className="pl-3 text-xl text-black">Gumanitar fanlar</h1>
        </div>
        <p className="xl:w-8/12 w-10/12 ml-8  pt-2 text-black">
          Yoshlar tarbiyasi fakulteti Konsalting yuridik fakulteti Ma’muriy boshqaruv fakulteti Politsiya boshqaruvi
          fakulteti Ijtimoiy ta’minot fakulteti
        </p>
      </div>

      <div className=" xl:ml-14 ml-8 mt-7">
        <div className="flex">
          <div className="mt-2"><Galochka/></div>
          <h1 className="pl-3 text-xl text-black">Global menejment bo’limi</h1>
        </div>
        <p className="xl:w-8/12 w-10/12 ml-8 pt-2 text-black">
          Menejment fakulteti Xalqaro savdo fakulteti Turizm fakulteti Moliyaviy menejment fakulteti Nia IT fakulteti
          moliya menejmenti Global madaniyat sanoati fakulteti Buxgalteriya fakulteti.
        </p>
      </div>

      <div className=" xl:ml-14 ml-8 mt-7">
        <div className="flex">
          <div className="mt-2"><Galochka/></div>
          <h1 className="pl-3 text-xl text-black">Aniq fanlar bo’limi</h1>
        </div>
        <p className="xl:w-8/12 w-11/12 ml-8 pt-2 text-black">
          Kimyoviy texnologiya fakulteti Oziq-ovqat va ovqatlanish fakulteti Atrof-muhitni muhofaza qilish fakulteti
          Hayotni taminlash tizimlari fakulteti auk Sport fakulteti Ijtimoiy va jismoniy tarbiya fakulteti Sport
          tibbiyoti fakulteti.
        </p>
      </div>

      <div className=" xl:ml-14 ml-8 mt-7">
        <div className="flex">
          <div className="mt-2"><Galochka/></div>
          <h1 className="pl-3 text-xl text-black">Politexnika bo’limi</h1>
        </div>
        <p className="xl:w-8/12 ml-8 pt-2 text-black xl:mr-0 mr-2">
          Kompyuter injiniringi fakulteti Fakultet Kompyuter fanlari axborot va aloqa Fakultet Elektron texnologiyalar
          fakulteti elektrotexnika va elektronika Fakultet Elektron axborot fakulteti kimyoviy texnologiya Fakultet nano
          texnologiya muhandisligi Fakultet Fakultet Mashinasozlik Axborot xavfsizligi fakulteti.
        </p>
      </div>

      <div className=" xl:ml-14 ml-8 mt-7">
        <div className="flex">
          <div className="mt-2"><Galochka/></div>
          <h1 className="pl-3 text-xl text-black">Tibbiyot bo’limi</h1>
        </div>
        <p className="xl:w-8/12 ml-8 pt-2 text-black xl:mr-0 mr-2">
          Sog’liqni saqlash fakulteti Sog’liqni saqlash va biotexnologiya fakulteti Tibbiyot PT muhandisligi fakulteti
          Tibbiyot texnologiyalari fakulteti Tibbiyot muhandisligi fakulteti.
        </p>
      </div>

      <div className=" xl:ml-14 ml-8 mt-7">
        <div className="flex">
          <div className="mt-2"><Galochka/></div>
          <h1 className="pl-3 text-xl text-black">SCH media laboratoriyalari bo’limi</h1>
        </div>
        <p className="xl:w-8/12 ml-8 pt-2 text-black">
          Fakultet koreys tilini o’rganish Fakultet Koreyashunoslik Anglo-Amerika tadqiqotlari fakulteti Fakultet
          Sinologiya Media kommunikatsiyalari fakulteti Fakultet arxitektura Raqamli animatsiya fakulteti Narsalar
          interneti moddiy muhandislik fakulteti Fakultet Aqlli avtomobillar fakulteti Energetika tizimlari fakulteti
          Fakultet teatr sanati va multimedia
        </p>
      </div>

      <Link to="footer" duration={5000}>
        <div
          className="w-10/12 mx-10 mt-20 xl:mt-48 lg:mt-40  bg-white rounded-full h-16 flex justify-center items-center
         cursor-pointer"
        >
          <p className="text-base flex items-center tracking-widest text-black mr-3 text-black">
            Kursga yozilish
          </p>
          <div className="bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
            <NextIcon/>
          </div>
        </div>
      </Link>
      <h1 className="text-germain mt-8">Koэproq malumot olish</h1>
    </div>
  );
}

export default OverviewMainTwoBottomLeft;