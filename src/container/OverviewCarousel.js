import React from 'react';
import Link from "next/link";
import Image from "next/image";

import Linguakill from "../../public/images/Linguaskill.png";

import Germany from "../../public/images/Germany.png";
import Vengriya from "../../public/images/Vengriya.png";

import {Left, Right} from "../Icons/Icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OverviewCarousel({next, previous}) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const ButtonGroup = ({ next, previous }) => {

    return (
      <div className="carousel-button-group mb-4  gap-4 flex justify-end
          items-center w-full absolute top-0 md:-left-28">
        <button className='block p-1 md:p-3 -mt-4' onClick={() =>
          previous()}>
          <div className="w-12 pl-1">
            <Left />
          </div>
        </button>
        <button onClick={() => next()}>
          <Right />
        </button>
      </div>

    );
  };

  return (

    <div className="mt-32">
      <div className="container m-auto  relative py-20">
        <h1 className="font-bold text-xl md:text-2xl -mt-16 ml-10 lg:ml-2 text-black">

          So’ngi yangiliklar
        </h1>
        <Carousel

          infinite={true}
          swipeable={true}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          shouldResetAutoplay={true}
          customButtonGroup={<ButtonGroup />}

        >

          <div className="mt-10 ">
            <Link href="Linguakill">
              <div className="flex flex-col  p-5 gap-5 isolate bg-white rounded-2xl w-10/12 mx-8 lg:mx-0 shadow-sm">
                <div className="m-5">
                  <Image src={Linguakill} width={347} height={230} alt="#"  />
                  <a className="font-bold text-2xl text-black mt-5 w-11/12">
                    Linguaskill Ingliz tili testi bilan tez natijalar
                  </a>
                  <p className="text-black mt-2">12 Noy 2022 • Yangiliklar</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-10">
            <Link href="/">
              <div className="flex flex-col p-5 gap-5 isolate bg-white rounded-2xl w-10/12 mx-8 lg:mx-0 shadow-sm">
                <div className="m-5">
                  <Image src={Germany} width={347} height={230} alt="#"  />
                  <h1 className="font-bold text-2xl text-black mt-5 w-11/12">
                    Germaniyada work and travel dasturi
                  </h1>
                  <p className="text-black mt-2">12 Noy 2022 • Yangiliklar</p>
                </div>

              </div>
            </Link>
          </div>
          <div className="mt-10">
            <Link href="Vengriya">
              <div className="flex flex-col p-5 gap-5 isolate bg-white rounded-2xl w-10/12 mx-8 lg:mx-0 shadow-sm">
                <div className="m-5">
                  <Image src={Vengriya} width={347} height={230} alt="#"  />
                  <h1 className="font-bold text-2xl text-black mt-5 w-11/12">
                    Vengriyada talim olish imkoniyati
                  </h1>
                  <p className="text-black mt-2">
                    12 Noy 2022 • Yangiliklar
                  </p>
                </div>

              </div>
            </Link>
          </div>
          <div className="mt-10">
            <Link href="Linguakill">
              <div className="flex flex-col p-5 gap-5 isolate bg-white rounded-2xl w-10/12 mx-8 lg:mx-0 shadow-sm">
                <div className="m-5">
                  <Image src={Linguakill} width={347} height={230} alt="#"  />
                  <h1 className="font-bold text-2xl text-black mt-5 w-11/12">
                    Linguaskill Ingliz tili testi bilan tez natijalar
                  </h1>
                  <p className="text-black mt-2">12 Noy 2022 • Yangiliklar</p>
                </div>
              </div>
            </Link>
          </div>

        </Carousel>
      </div>
    </div>

  );
}

export default OverviewCarousel;