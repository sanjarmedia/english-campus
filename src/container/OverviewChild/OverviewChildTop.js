import React from "react";
import Usa from "/public/images/usa.png"
import Rus from "/public/images/rusflag.png"
import Sign from "/public/images/signature.png"
import Math from "/public/images/math.png"
import Flower from "/public/images/flower.png"
import Scissors from "/public/images/scissors.png"
import LittleGirl from "/public/images/littleGirl.png"
import Image from "next/image";
import NextIcon, {GirlIcon} from "../../Icons/Icons";
import {Link} from "react-scroll/modules";

function OverviewChildTop() {
  return (
    <div className="container w-full m-auto xl:flex mt-8 xl:mt-20">
     <div className="xl:w-1/2 bg-germain rounded-3xl mx-5 xl:mx-0 pb-5"
          data-aos="flip-left">
       <h1 className="text-2xl md:text-3xl xl:text-5xl pl-10 pt-10 text-black">
         Bolalar kurslari
       </h1>
       <p className="pl-10 pt-2 text-base md:text-lg xl:text-xl text-black">
         Tanishish menyusi
       </p>

       <div className="md:flex mt-14">
         <div className="w-full xl:w-1/2 ml-10 2xl:mt-12">
           <div className="flex">
             <div className="w-5 md:w-auto h-5 md:h-auto mt-1">
               <Image
                 width={35}
                 height={35}
                 src={Usa}
                 alt="#"
                 className="object-contain"
               />
             </div>
             <h1 className="text-base md:text-lg xl:text-xl pt-0.5 pl-3 text-black">
               Ingliz tili
             </h1>
           </div>
           <div className="flex mt-4 xl:mt-5">
             <div className="w-5 md:w-auto h-5 md:h-auto mt-1">
               <Image
                 width={35}
                 height={35}
                 src={Rus}
                 alt=""
               />
             </div>
             <h1 className="text-base md:text-lg xl:text-xl pt-0.5 pl-3 text-black">
               Rus tili
             </h1>
           </div>
           <div className="flex mt-4 xl:mt-5">
             <div className="w-5 md:w-auto h-5 md:h-auto mt-1">
               <Image
                 width={35}
                 height={35}
                 src={Sign}
                 alt=""
               />
             </div>
           <h1 className="text-base md:text-lg xl:text-xl pt-0.5 pl-3 text-black">
             Husnixat
           </h1>
         </div>
         </div>
         <div className="w-full xl:w-10/12 ml-10 xl:ml-36 2xl:mt-12">
           <div className="flex mt-4 md:mt-0 xl:mt-0">
             <div className="w-5 md:w-auto h-5 md:h-auto mt-1">
               <Image
                 width={35}
                 height={35}
                 src={Math}
                 alt=""
               />
             </div>
             <h1 className="text-base md:text-lg xl:text-xl pt-0.5 pl-3 text-black">
               Matematika
             </h1>
           </div>
           <div className="flex mt-4 xl:mt-5">
             <div className="w-5 md:w-auto h-5 md:h-auto mt-1">
               <Image
                 width={35}
                 height={35}
                 src={Flower}
                 alt=""
               />
             </div>
             <h1 className="text-base md:text-lg xl:text-xl pt-0.5 pl-3 text-black">
               Etika-estetika
             </h1>
           </div>
           <div className="flex pt-5">
             <div className="w-5 md:w-auto h-5 md:h-auto mt-1">
               <Image
                 width={35}
                 height={35}
                 src={Scissors}
                 alt=""
               />
             </div>
             <h1 className="text-base md:text-lg xl:text-xl pt-0.5 pl-3 text-black">
               Mehnat darslari
             </h1>
           </div>
         </div>
       </div>

       <Link
       to="footer"
       duration={5000}
       >
         <div className="w-10/12 mx-10 my-4 mt-10 xl:mt-40  bg-white rounded-full h-16 flex justify-center items-center">
           <p className="text-base flex items-center tracking-widest text-black mr-3 text-black">
             Kursga yozilish
           </p>
           <div className=" bg-gradient-to-r from-red to-gradientFinish text-transparent bg-red rounded-full">
             <NextIcon />
           </div>
         </div>
       </Link>
     </div>
      <div className="w-full xl:w-1/2 rounded-3xl xl:relative mt-5 xl:mt-0 px-5"
           data-aos="flip-right" >
        <Image className="object-cover rounded-3xl  xl:relative z-10"
               src={LittleGirl}
               alt=""
        />
        <div className="hidden xl:block absolute -top-32 right-10 z-20">
          <GirlIcon />
        </div>
      </div>
    </div>
  );
}

export default OverviewChildTop;
