import React, {useState} from 'react';
import {FooterIcon} from "../Icons/Icons";
import {InputField} from "./InputField";
import {prop} from "ramda";
import {useForm} from "react-hook-form";
import moment from "moment/moment";
import axios from "axios";
import {Notification} from "./Notification";


function ContactForm() {
  const [state, setState] = useState(false)
  const [department, setDepartment] = useState('general')

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  function onSubmit(value){
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
    <div className="w-full flex flex-col items-center justify-center">
      <Notification open={state} close={() => setState(false)}/>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center items-center mt-20"
            method="POST"
            id="sheetdb-form">

        <div className="mr-[550px] -mt-16 hidden xl:block">
          <FooterIcon />
        </div>
        <InputField
          rest
          register={register}
          control={control}
          rules={{ required: true }}
          error={prop("name", errors)}
          name="name"
          placeholder= "Ismingiz"
        />

        <InputField
          register={register}
          control={control}
          rules={{required: true}}
          error={prop("phone_number", errors)}
          name="number"
          className="w-full h-11 mt-4 pl-6 text-secondary rounded-full  "
          placeholder= "Telefon raqamingiz"
        />
        <textarea
          name="message"
          {...register("message")}
          className="mt-3 py-3 px-5 lg:w-[450px] 2xl:w-full md:w-[610px] w-[345px] h-52 border border-colorRounded/40 rounded-xl
                bg-message-bg placeholder:text-placeholder-color text-secondary bg-white text-black"
          placeholder= "Xabaringizni shu yerga yozing..."
          required
        />
        <button className="w-10/12 md:w-8/12 xl:w-7/12 h-16  xl:h-12 mt-8 rounded-full xl:rounded-3xl
            bg-gradient-to-r from-gradientStart to-gradientFinish text-base text-white tracking-wide" onClick={handleSubmit(onSubmit)}>
            Xabarni yuborish
        </button>
      </form>
      <Notification open={state} close={() => setState(false)}/>
    </div>
  );
}

export default ContactForm;