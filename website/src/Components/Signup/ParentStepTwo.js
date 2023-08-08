function ParentStepTwo({ setStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setStep(1);
  };
  return (
    <>
      <form
        className=" border p-3 shadow-md rounded-md text-sm  w-[27rem] "
        onSubmit={handleSubmit}
      >
        <div className=" flex justify-between">
          <h4 className=" text-gray-400 text-sm"> خطوة 2 من اصل 2</h4>
          <h4> بيانات ولي الامر</h4>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 relative mt-3">
          <div className="bg-primary h-1 rounded-full  absolute right-0 w-full "></div>
        </div>
        <br />
        <label className=" flex flex-col items-end">
          اسم الطفل
          <input
            type="text"
            dir="rtl"
            className="   placeholder:text-sm w-full border-2 p-1  pr-3 rounded-lg"
            placeholder="ادخل الاسم الثلاثي"
          />
        </label>
        <br />
        <label className=" flex flex-col items-end">
          تاريخ الميلاد
          <input
            type="text"
            dir="rtl"
            className="   placeholder:text-sm w-full border-2 p-1  pr-3 rounded-lg"
            placeholder="اختر تاريخ ميلاد الطفل"
          />
        </label>
        <br />
        <label
          htmlFor="حالة الطفل"
          className="block mb-2 text-sm font-medium  text-end "
        >
          حالة الطفل
        </label>
        <select
          dir="rtl"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
        >
          <option defaultValue>اختر حالة الطفل من القائمة</option>
          <option value="التوحد">التوحد</option>
          <option value="التوحد">التوحد</option>
          <option value="التوحد">التوحد</option>
        </select>
        <br />
        <div className=" flex justify-between text-xs">
          <label
            htmlFor="صيغة الملف"
            className=" block mb-2 font-medium  text-end "
          >
            doc/docs/pdf/jpeg صيغة الملف
          </label>
          <label
            htmlFor="ارفاق تقرير بحالة الطفل"
            className="block mb-2 font-medium  text-end "
          >
            ارفاق تقرير بحالة الطفل
          </label>
        </div>{" "}
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-black">
                سحب وإفلات الملفات من هنا{" "}
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <br />
        <div className=" flex">
          <button
            onClick={handleClick}
            className=" text-center border  text-primary border-primary rounded-xl h-10 w-2/5 mr-3 texts"
          >
            رجوع للسابق
          </button>
          <input
            value="حفظ وإنشاء حساب جديد
              "
            type="submit"
            className=" text-center border-2 bg-primary w-3/4 text-white rounded-xl h-10 "
          />
        </div>
      </form>
    </>
  );
}

export default ParentStepTwo;
