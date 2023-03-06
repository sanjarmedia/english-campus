import React, {useState} from 'react';
import {InputField} from "./InputField";
import {prop} from "ramda";
import {useForm} from "react-hook-form";
import moment from "moment/moment";
import axios from "axios";
import {Notification} from "./Notification";

function ContactFormNavbar() {
  const [state, setState] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()

  function onSubmit(value) {
    const dataSheet ={
      date: `${moment().format('LTS L').toString()}`,
      name: prop("name", value),
      number: prop("number", value),
      message: prop("message", value),
    }
    axios.post("https://sheetdb.io/api/v1/xoqc14bbptwcy", dataSheet)
      .then((response)=>{
        if (response.status == 201 || response.status == 200) {
          setState(true);
        }else{
          console.log(response)
        }
      })


    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center mt-10 ">


        <div className="2xl:w-11/12 ml-4 xl:ml-0 md:ml-8 lg:flex">
          <InputField
            rest
            register={register}
            control={control}
            rules={{required: true}}
            error={prop("name", errors)}
            name="name"
            placeholder="Ismingiz"

          />


          <InputField
            register={register}
            control={control}
            rules={{required: true}}
            error={prop("number", errors)}
            name="number"
            className="w-full h-11 mt-4 pl-6 text-secondary rounded-full  "
            placeholder="Telefon raqamingiz"
          />
        </div>
        <textarea
          name="message"
          {...register("message")}
          className="mt-3 py-3 px-5 ml-6 md:-ml-10 lg:ml-6 xl:ml-0 lg:ml-8 2xl:ml-4 xl:w-[900px] 2xl:w-11/12 lg:w-[900px] md:w-[630px] w-[345px] h-52
          border border-colorRounded/40 rounded-3xl xl:rounded-lg bg-message-bg placeholder:text-placeholder-color
           text-secondary bg-white text-black"
          placeholder="Qanday savollaringiz bor, yerga yozing..."
          required
        />

        <button
          className="ml-4 md:ml-0 w-11/12 md:w-5/12 xl:w-5/12 w-[320px] h-16 xl:h-12 mt-8 rounded-full xl:rounded-3xl
            bg-gradient-to-r from-gradientStart to-gradientFinish"
          onClick={handleSubmit(onSubmit)}
        >
          <p className="text-base text-white tracking-wide">
            Kurs uchun arizani yuborish
          </p>
        </button>
      </form>
      <Notification open={state} close={() => setState(false)}/>
    </div>
  );
}

export default ContactFormNavbar;