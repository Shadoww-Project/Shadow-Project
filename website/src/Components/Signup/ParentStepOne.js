function ParentStepOne({ setStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };
  return (
    <>
      <form
        className=" border p-3 shadow-md rounded-md text-sm "
        onSubmit={handleSubmit}
      >
        <div className=" flex justify-between">
          <h4 className=" text-gray-400 text-sm"> خطوة 1 من اصل 2</h4>
          <h4> بيانات ولي الامر</h4>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 relative mt-3">
          <div className="bg-primary h-1 rounded-full  absolute right-0 w-1/2 "></div>
        </div>
        <br />
        <label className=" flex flex-col items-end">
          اسم ولي الامر
          <input
            type="text"
            dir="rtl"
            className="   placeholder:text-sm w-full border-2 p-1  pr-3 rounded-lg"
            placeholder="ادخل الاسم الثلاثي"
          />
        </label>
        <div className=" flex mt-3 mb-3">
          <label className=" flex flex-col text-end mr-4 ">
            البريد الالكتروني
            <input
              className="  placeholder:text-sm border-2 w-48 p-1 pr-3 rounded-lg  "
              type="email"
              placeholder="ادخل بريد الكتروني فعال"
              dir="rtl"
            />
          </label>
          <label className=" flex flex-col text-end ">
            {" "}
            رقم الجوال
            <input
              className="  placeholder:text-sm  border-2 w-48 p-1 pr-3 rounded-lg"
              type="tel"
              dir="rtl"
              placeholder="ادخل رقم جوال فعال"
            />
          </label>
        </div>{" "}
        <label className=" flex flex-col items-end">
          كلمة المرور
          <input
            type="text"
            dir="rtl"
            className="  placeholder:text-sm  w-full border-2 p-1 pr-3 rounded-lg"
            placeholder="ادخل كلمة سر اكثر من 8 خانات"
          />
        </label>
        <br />
        <input
          value="حفظ البيانات واستكمال بيانات الطفل
              "
          type="submit"
          className=" cursor-pointer text-center border-2 bg-primary w-full text-white rounded-xl h-10"
        />
      </form>
    </>
  );
}

export default ParentStepOne;
