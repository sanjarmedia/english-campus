import Image from "next/image";
import childPhone from "../../public/images/images_gif/childPhone.gif";
import  {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon, YouTubeIcon
} from "../Icons/Icons";
import ContactForm from "./ContactForm";






function Footer() {

  return (
    <div className="flex justify-center h-[1040px] footer-image bg-no-repeat bg-cover overflow-hidden bg-white"
         id="footer"
    >
      <div className="container m-auto" data-aos="flip-down">
        <div className="flex flex-col items-center mt-52">
          <h1 className="tracking-tight text-black font-bold text-center text-4xl md:text-6xl 2xl:text-7xl mt-5
          bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent pb-2">
            Aloqaga
          </h1>
          <div className="flex">
            <div className="w-16 md:w-auto h-10 md:h-auto -mt-5">
              <Image
                src={childPhone}
                width={132}
                height={59}
                alt="#"
                className="rounded-xl md:rounded-3xl mt-5 object-contain"
              />
            </div>
            <h1 className="tracking-tight text-black font-bold text-center text-4xl md:text-6xl 2xl:text-7xl  ml-2
            bg-clip-text bg-gradient-to-r from-black to-gradient-text text-transparent">
              chiqish
            </h1>
          </div>
          <ContactForm />
          <div className="w-full flex justify-center mt-20 xl:mt-16">
            <a href="https://www.facebook.com/profile.php"><FacebookIcon /></a>
            <a href="https://instagram.com/englishcampus.uz" className="ml-6"><InstagramIcon /></a>
            <a href="https://t.me/englishcampus1" className="ml-6"><TelegramIcon /></a>
            <a href="https://youtube.com/@englishcampuseducation3427" className="ml-6"><YouTubeIcon /></a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Footer;