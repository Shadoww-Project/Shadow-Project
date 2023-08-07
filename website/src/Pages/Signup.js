import React, { useState } from "react";
import Carousel from "../Components/Carousel";
import Logo from "../assets/images/Logo.png";
export default function Signup() {
  const [role, setRole] = useState("");

  return (
    <>
      <div className=" flex">
        <div className=" w-5/12 ">
          <div className=" flex justify-center items-center flex-col h-screen">
            <img src={Logo} width={45} height={68} />
            <div className=" w-96">
              <h1 className=" text-center mb-20 mt-5">إنشاء حساب جديد</h1>
              <form>
                <div className=" flex justify-between">
                  <div
                    className=" cursor-pointer"
                    onClick={() => {
                      setRole("specialist");
                    }}
                  >
                    حساب أخصائي
                  </div>
                  <div
                    className=" cursor-pointer"
                    onClick={() => {
                      setRole("parent");
                    }}
                  >
                    حساب ولي الامر
                  </div>
                </div>
                <br />
                <br />
                <h4 className=" text-end"> بيانات ولي الامر</h4>
                <br />
                <br />

                <label className=" flex flex-col items-end">
                  اسم ولي الامر
                  <input type="text" placeholder="ادخل الاسم الثلاثي" />
                </label>
                <div className=" flex">
                  <label className=" flex flex-col">
                    البريد الالكتروني
                    <input type="email" placeholder="ادخل بريد الكتروني فعال" />
                  </label>
                  <label className=" flex flex-col">
                    {" "}
                    رقم الجوال
                    <input type="tel" placeholder="ادخل رقم جوال فعال" />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" w-7/12">
          <Carousel role={role} />
        </div>
      </div>
    </>
  );
}
