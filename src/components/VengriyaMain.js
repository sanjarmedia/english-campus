import React from 'react';
import Image from "next/image";

import Vengriya from "../../public/images/Vengriya.png"

function VengriyaMain() {
  return (
    <div className="md:pt-60 pt-36 bg-white">
      <div className="m-auto container w-full flex flex-col items-center">
        <h1 className="font-bold xl:text-5xl text-3xl text-start xl:w-7/12 w-9/12 2xl:ml-44 xl:-ml-24 -ml-16 lg:ml-12 xl:ml-20
        tracking-tight bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent py-1 text-center py-2">
          Vengriyada talim olish imkoniyati
        </h1>
        <p className="text-sm mt-5 text-light-black -ml-[200px] sm:-ml-96 md:-ml-[470px] lg:-ml-[550px] xl:-ml-[670px] 2xl:-ml-[550px]">
          12 Noy 2022 • Yangiliklar
        </p>
        <div className="flex mt-8 xl:-ml-32 2xl:ml-0 mx-5">
          <Image src={Vengriya}  alt="#" width={700} className="rounded-2xl" />
        </div>
        <div className="xl:w-11/12">
          <div className="xl:ml-40 2xl:ml-[340px] ml-5 bg-white">
            <p className="pt-16 w-11/12 lg:w-full xl:mx-0 2xl:mr-24 xl:ml-0 lg:ml-2 md:ml-10 text-black px-1">
              Yevropada bepul ta’lim! <br/>
              Hech bir yosh bo’lmasa kerak Yevropada ta’lim olishni va u yerda o’z hayotini o’zgartirishni istaydigan.
              <br className="hidden lg:block"/>
              English Campus sizlarga Yevropaning Vengriya davlatida bepul ta’lim olish imkoniyatini taqdim etadi. <br/>
              Endi Yevropda ta’lim olish muammo emas. <br/>
            </p>
            <p className="pt-10 xl:mx-0 xl:mr-24 xl:ml-0 lg:ml-2 md:ml-10 text-black px-1">
              Vengriyada 100% grant asosida talim oling talablar: <br/>
              - Maktab attestati yoki kollej/litsey diplom <br/>
              - Mativatsion insholar <br/>
            </p>
            <p className="pt-10 xl:mx-0 mr-24 xl:ml-0 lg:ml-2 md:ml-10 text-black px-1">
              Imkoniyatlar: <br/>
              - Oyiga 120 EURO dan stipendiya <br/>
              - Bepul yotoqhona va tibbiy sug`urta <br/>
              - Bepul oqish ( grant asosida)\ Yevropa bo’ylab sayoxat uchun viza (shengen visa) <br/>
              - 2-Kursdan amerikaga work and travel dasturi mavjud
            </p>
            <p className="pt-10 xl:w-10/12 xl:mx-0 mr-24 xl:ml-0 lg:ml-2 md:ml-10 text-black px-1">
               Ko’proq ma’lumot olish uchun biz bilan aloqaga chiqing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VengriyaMain;