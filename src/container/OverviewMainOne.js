import React, {useState} from "react";
import study from "../../public/images/images_gif/study.gif"
import NextIcon, {Chiziqcha, Undov, Galochka} from "../Icons/Icons";
import Image from "next/image";
import lesson from "../../public/images/lesson.png"
import ok from "../../public/images/false.png"
import no from "../../public/images/truee.png"
import date from "../../public/images/kalendar.png"
import lessons from "../../public/images/dars.png"
import time from "../../public/images/time.png"
import next from "../../public/images/next.png"
import call from "../../public/images/call.png"
import tru from "../../public/images/tru.png"
import conversation from "../../public/images/conversation.png"
import {NavbarProductMenu} from "../components/NavbarProductMenu";
import Usa from "../../public/images/usa.png";
import Rus from "../../public/images/rusflag.png";
import Sign from "../../public/images/signature.png";
import Math from "../../public/images/math.png";
import Flower from "../../public/images/flower.png";
import Scissors from "../../public/images/scissors.png";

function OverviewMainOne() {
  const [products, setProducts] = useState(false)
  const [activeNum, setActiveNum] = useState(0)

  return (
    <div className="overflow-hidden bg-white"    id="language">

     <div className="container m-auto mt-32 xl:mt-52 flex">
       <h1 className="md:mt-32 mt-20 font-bold text-xl ml-10 tracking-tight text-black lg:w-1/4">
         01.
       </h1>

       <div className="xl:ml-6 ml-12">
         <div className="flex">
           <h1 className="py-2 sm:ml-8 tracking-tight text-black font-bold text-center text-5xl md:text-7xl
           bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
             Xorijiy til
           </h1>
           <div className="lg:ml-10 ml-4">
             <Chiziqcha />
           </div>
         </div>
         <div className="flex">
           <div className="w-20 md:w-auto h-12 md:h-auto md:mt-2 -ml-4 sm:ml-0">
             <Image
               src={study}
               width={121}
               height={72}
               alt="#"
               className="rounded-xl md:rounded-3xl object-contain"
             />
           </div>
           <h1 className="ml-2.5 md:ml-5 tracking-tight text-black font-bold text-center text-5xl md:text-7xl pb-24
           bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
             kurslari
           </h1>
         </div>
       </div>
     </div>

     <div className="container m-auto lg:mt-20 lg:flex">
       <div className="bg-muted h-full w-11/12 lg:w-1/2 rounded-3xl p-5 md:p-10 ml-5"
            data-aos="fade-down-right">
         <div className="flex items-start justify-between gap-4 md:gap-32">
           <div className="gap-2">
             <h1 className="w-full font-bold text-2xl md:text-3xl tracking-tight text-black">
               Ingliz tili kursi
             </h1>
             <p className="font-normal text-base text-light-black mt-2">
               Tanishish menyusi
             </p>
           </div>
           <div className="w-40 md:w-auto h-16 md:h-auto">
             <Image
               src={"/images/Ingliz.png"}
               width={160}
               height={100}
               className="rounded-2xl md:rounded-lg"
               alt="#"
             />
           </div>
         </div>

         <div className="flex justify-between">
           <div className="mt-14">
             <div className="flex">
               <Image
                 src={date}
                 className="object-contain"
                 alt="#"
               />
               <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 Dars kunlari:
               </p>
             </div>

             <div className="flex mt-4">
               <Image
                 src={time}
                 className="object-contain"
                 alt="#"
               />
               <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 Dars davomiyligi:
               </p>
             </div>

             <div className="flex mt-4">
               <Image
                 src={next}
                 className="object-contain"
                 alt="#"
               />
               <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 Intensiv kurs:
               </p>
             </div>

             <div className="flex mt-4">
               <Image
                 src={call}
                 className="object-contain"
                 alt="#"
               />
               <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 Har bir bosqich davomiyligi:
               </p>
             </div>
             <div className="flex mt-4">
             <Image
               src={tru}
               className="object-contain"
               alt="#" />
             <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
               IELTS tayyorlov kursi:
             </p>
           </div>
           </div>

           <div className="mr-4 lg:mr-0 xl:mr-20 2xl:mr-10">
             <h1 className="mt-14 font-title font-medium text-sm md:text-base text-black">
               Haftada 3 marotaba
             </h1>
             <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
               90 minut
             </h1>
             <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
               2 oy
             </h1>
             <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
               3 oy
             </h1>
             <h1 className="w-10/12 lg:w-9/12 md:w-full mt-9 sm:mt-4 lg:mt-9 xl:mt-3 font-title font-medium text-sm md:text-base text-black">
               Boshlang’ich
               tayyorlov 2 oy
             </h1>
           </div>
         </div>
         <button
           onClick={ event => {
             event.stopPropagation()
             setActiveNum(1);
             setProducts(!products)
           }}
           className="{productPathColor()} bg-white rounded-full mt-16 h-16 w-full flex justify-center items-center"
         >
             <p className="text-base flex items-center tracking-widest text-black mr-3">
               Kursga yozilish
             </p>
             <div className=" bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
               <NextIcon />
             </div>

         </button>

       </div>
       <div className="bg-muted h-full w-11/12 lg:w-1/2 rounded-3xl p-5 md:p-10 mx-5 mt-5 lg:mt-0"
            data-aos="fade-down-left">
         <div className="flex items-start justify-between gap-4 md:gap-32">
           <div className="gap-2">
             <h1 className="w-full font-bold text-2xl md:text-3xl tracking-tight text-black">
               Koreys tili kursi
             </h1>
             <p className="font-normal text-base text-light-black mt-2">
               Tanishish menyusi
             </p>
           </div>
           <div className="w-40 md:w-auto h-16 md:h-auto">
             <Image
               src={"/images/karea.png"}
               width={160}
               height={100}
               className="rounded-2xl md:rounded-lg"
               alt="#" />
           </div>
         </div>
         <div className="flex justify-between">
           <div className="mt-14">
             <div className="flex">
               <Image
                 src={date}
                 className="object-contain"
                 alt="#"
               />
               <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 Dars kunlari:
               </p>
             </div>

             <div className="flex mt-4">
               <Image
                 src={time}
                 className="object-contain"
                 alt="#"
               />
               <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 Dars davomiyligi:
               </p>
             </div>
             <div className="flex mt-4">
               <Image
                 src={lessons}
                 className="object-contain"
                 alt="#"
               />
               <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 1 oylik darslar soni:
               </p>
             </div>

             <div className="flex mt-4">
               <Image
                 src={call}
                 className="object-contain"
                 alt="#"
               />
               <p className="lg:w-10/12 ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                 Har bir bosqich davomiyligi:
               </p>
             </div>
           </div>

           <div className="mr-14 lg:mr-0 xl:mr-20 2xl:mr-10">
             <h1 className="mt-12 lg:mt-14 font-title font-medium text-sm md:text-base text-black">
               Haftada 3 marotaba
             </h1>
             <h1 className="mt-1 lg:mt-4 font-title font-medium text-sm md:text-base text-black">
               90 minut
             </h1>
             <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
               12 ta
             </h1>
             <h1 className="mt-4 lg:mt-8 font-title font-medium text-sm md:text-base text-black">
               3 oy
             </h1>
           </div>
         </div>

         <button
           onClick={ event => {
             event.stopPropagation()
             setActiveNum(2);
             setProducts(!products)
           }}
           className="bg-white w-full rounded-full mt-[128px] xl:mt-[100px] h-16 flex justify-center items-center">
           <p className="text-base flex items-center tracking-widest text-black mr-3">
             Kursga yozilish
           </p>
           <div className=" bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
             <NextIcon />
           </div>
         </button>
       </div>
     </div>

      <div className="container m-auto mt-5 lg:flex">
        <div className="bg-muted w-11/12 lg:w-1/2 rounded-3xl p-5 md:p-10 ml-5"
             data-aos="fade-right">
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-full font-bold text-2xl md:text-3xl tracking-tight text-black">
                Rus tili kursi
              </h1>
              <p className="font-normal text-base text-light-black mt-2">
                Tanishish menyusi
              </p>
            </div>
            <div className="w-40 md:w-auto h-16 md:h-auto">
              <Image
                src={"/images/rus.png"}
                width={160}
                height={100}
                className="rounded-2xl md:rounded-lg"
                alt="#"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mt-14">
              <div className="flex">
                <Image
                  src={date}
                  className="object-contain"
                  alt="#"
                />
                <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                  Dars kunlari:
                </p>
              </div>
              <div className="flex mt-4">
                <Image
                  src={time}
                  className="object-contain"
                  alt="#"
                />
                <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                  Dars davomiyligi:
                </p>
              </div>
              <div className="flex mt-4">
                <Image
                  src={next}
                  className="object-contain"
                  alt="#"
                />
                <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                  Intensiv kurs:
                </p>
              </div>
              <div className="flex mt-4">
                <Image
                  src={call}
                  className="object-contain"
                  alt="#"
                />
                <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                  Har bir bosqich davomiyligi:
                </p>
              </div>
              <div className="flex mt-4">
                <Image
                  src={conversation}
                  className="object-contain"
                  alt="#"
                />
                <p className="ml-2.5 font-normal text-sm md:text-base tracking-tight text-light-black">
                  Mustaqil sozlashuv:
                </p>
              </div>
            </div>

            <div className="mr-16 lg:mr-20 xl:mr-24">
              <h1 className="mt-14 font-title font-medium text-sm md:text-base text-black">
                Haftada 3 marotaba
              </h1>
              <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
                90 minut
              </h1>
              <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
                2 oy
              </h1>
              <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
                3 oy
              </h1>
              <h1 className="mt-4 font-title font-medium text-sm md:text-base text-black">
                3 oy
              </h1>
            </div>
          </div>

          <button
            onClick={ event => {
              event.stopPropagation()
              setActiveNum(3);
              setProducts(!products)
            }}
            className="bg-white rounded-full mt-16 w-full lg:mt-32 xl:mt-16 h-16 flex justify-center items-center">
            <p className="text-base flex items-center tracking-widest text-black mr-3">
              Kursga yozilish
            </p>
            <div className=" bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
              <NextIcon />
            </div>
          </button>
        </div>
        <div className="bg-muted w-11/12 lg:w-1/2 rounded-3xl p-5 md:p-10 mx-5 mt-5 lg:mt-0"
                            data-aos="fade-left">
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-11/12 w-full font-bold text-2xl md:text-3xl tracking-tight text-black">
                Nega aynan Biz?
              </h1>
            </div>
            <div className="hidden lg:block w-40 md:w-auto h-16 md:h-auto">
              <Image
                src={lesson}
                width={160}
                height={100}
                className="rounded-2xl md:rounded-lg"
                alt="#"
              />
            </div>
          </div>

          <div className=" bg-germain rounded-3xl pb-5">

            <p className="md:w-8/12 w-11/12 pt-24 text-xl text-black">

              English Campus oʻquv markazi oʻquvchilarini shunchaki kelib oʻqib ketishlarini emas, balki natijaga erishishlarining tarafdoridir! Biz sizga natijaga erishishingizni kafolatlaymiz.
            </p>


          </div>
          <button
            onClick={ event => {
              event.stopPropagation()
              setActiveNum(null);
              setProducts(!products)
            }}
            className="bg-white w-full rounded-full mt-[88px] xl:mt-16 2xl:mt-[75px] h-16 flex justify-center items-center">
            <p className="text-base flex items-center tracking-widest text-black mr-3">
              Kursga yozilish
            </p>
            <div className=" bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
              <NextIcon />
            </div>
          </button>
        </div>
      </div>

      <div className="container m-auto mt-10 xl:mt-20 w-full lg:flex">
        <div className="bg-muted w-11/12  lg:w-1/2  rounded-3xl p-5 md:p-10  ml-4"
             data-aos="fade-up-right">
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-full font-bold text-2xl md:text-4xl tracking-tight text-black w-1/2">
                Mavjud muammolar
              </h1>
            </div>
            <div className="w-10 md:w-auto h-10 md:h-auto">
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
                Til o’rganishdagi dangasalikni yenga olmaslik
              </p>
            </div>
            <div className="mt-4 flex items-center p-0 gap-3">
              <Undov />
              <p className="text-sm md:text-base items-center text-black">
                Sifatsiz ta’lim beruvchi ustozlar
              </p>
            </div>
            <div className="mt-4 flex items-center p-0 gap-3">
              <Undov />
              <p className="text-sm md:text-base items-center text-black">
                Zerikarli darslar
              </p>
            </div>
            <div className="mt-4 flex items-center p-0 gap-3">
              <Undov />
              <p className="text-sm md:text-base items-center text-black">
                Noaniq yo’nalishda dars berilishi
              </p>
            </div>
            <div className="my-4 flex items-center p-0 gap-3">
              <Undov />
              <p className="text-sm md:text-base items-center text-black">
                Xorijiy tilni o’rganib bo’lish uchun, aniq vaqt qo’yilmasligi
              </p>
            </div>
          </div>
        </div>
        <div className="bg-muted w-11/12 lg:w-1/2  rounded-3xl p-5 md:p-10 mx-4 mt-5 lg:mt-0"
             data-aos="fade-up-left">
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="font-bold text-2xl md:text-4xl tracking-tight text-black w-2/4 md:w-2/3 lg:w-full text-black">
                Muammolarning bizdagi yechimi
              </h1>
            </div>
            <div className="w-10 md:w-auto h-10 md:h-auto">
              <Image
                src={no}
                width={60}
                height={60}
                className="rounded-lg"
                alt="#"
              />
            </div>
          </div>

          <div className=" items-start gap-4 mt-10">
            <div className="flex items-center p-0 gap-3">
              <Galochka />
              <p className="text-base items-center text-sm md:text-base w-10/12 md:w-3/5 lg:w-full text-black">
                Xorijiy tilni o’rganish davridagi o’zini qo’lga olish va
                dangasalikni yengish bo’yicha ustozlardan maslahat
              </p>
            </div>
            <div className="mt-4 flex items-center p-0 gap-3">
              <Galochka />
              <p className="text-base items-center text-sm md:text-base w-10/12 md:w-3/5 lg:w-full text-black">
                Eng malakali  O’zbekiston bo’ylab ko’zga ko’ringan
                mutaxassislardan bilim olish imkoni
              </p>
            </div>
            <div className="mt-4 flex items-center p-0 gap-3">
              <Galochka />
              <p className="text-base items-center text-sm md:text-base w-10/12 md:w-3/5 lg:w-full text-black">
                Aniq metodikalar asosida Intensiv darsliklar
                ketma-ketligi
              </p>
            </div>
            <div className="my-4 flex items-center p-0 gap-3">
              <Galochka />
              <p className="text-base items-center text-sm md:text-base w-10/12 md:w-3/5 lg:w-full text-black">
                Belgilangan muddat ichida xorijiy tilni oson o’rganish
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavbarProductMenu open={products} close={() => setProducts(false)} active={activeNum}/>
    </div>
  );
}

export default OverviewMainOne;