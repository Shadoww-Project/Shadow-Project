import { Carousel } from "@material-tailwind/react";
export default function RightSide({ role }) {
  const EmptyArrow = () => null;

  return (
    <>
      <Carousel
        transition={{ duration: 1 }}
        nextArrow={EmptyArrow}
        prevArrow={EmptyArrow}
        className=" h-screen"
      >
        <div className=" relative">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="img"
            className="h-screen w-full object-cover"
          />
          <div className=" absolute top-1/3 left-10 text-white mr-10">
            <h1 className=" text-2xl text-end ">عنوان مقال صغير هنا</h1>
            <p className=" text-end">
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت
              دو أيوسمود تيمبو نكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .
              يوت انيم أد مينيم فينايم,كيواس نوستريد كسير سيتاشن يللأمكو لابورأس
              نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس يوتي أريري
              دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو
              فيجايت يولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات
              نون بروايدينت ,سيونت ان كيولبا يو أوفيسيا ديسيريونتموليت انيم أيدي
              ايست لابوريوم
            </p>
            <div className=" flex justify-end mt-10">
              <h4 className=" font-bold mt-3 mr-3">عنوان مقال صغير هنا</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 70 70"
                className=" "
              >
                <g
                  id="Group_127763"
                  data-name="Group 127763"
                  transform="translate(-1805 -418)"
                >
                  <circle
                    id="Ellipse_31824"
                    data-name="Ellipse 31824"
                    cx="35"
                    cy="35"
                    r="35"
                    transform="translate(1805 418)"
                    fill="#fff5"
                  />
                  <rect
                    id="Rectangle_37264"
                    data-name="Rectangle 37264"
                    width="28"
                    height="28"
                    transform="translate(1829 440)"
                    fill="#fff"
                  />
                  <g
                    id="Group_33031"
                    data-name="Group 33031"
                    transform="translate(1812.232 425.732)"
                  >
                    <path
                      id="Path_16006"
                      data-name="Path 16006"
                      d="M27.384,0A27.384,27.384,0,1,0,54.768,27.384,27.384,27.384,0,0,0,27.384,0ZM38.917,28.257a1.956,1.956,0,0,1-.878.878v.01L22.39,36.968a1.956,1.956,0,0,1-2.83-1.76V19.56a1.956,1.956,0,0,1,2.83-1.751l15.648,7.824A1.956,1.956,0,0,1,38.917,28.257Z"
                      transform="translate(0)"
                      fill="#68c6c5"
                    />
                  </g>
                </g>
              </svg>{" "}
            </div>
          </div>
        </div>
        <div className=" relative">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="img"
            className="h-screen w-full object-cover"
          />
          <div className=" absolute top-1/3 left-10 text-white mr-10">
            <h1 className=" text-2xl text-end ">عنوان مقال صغير هنا</h1>
            <p className=" text-end">
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت
              دو أيوسمود تيمبو نكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .
              يوت انيم أد مينيم فينايم,كيواس نوستريد كسير سيتاشن يللأمكو لابورأس
              نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس يوتي أريري
              دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو
              فيجايت يولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات
              نون بروايدينت ,سيونت ان كيولبا يو أوفيسيا ديسيريونتموليت انيم أيدي
              ايست لابوريوم
            </p>
            <div className=" flex justify-end mt-10">
              <h4 className=" font-bold mt-3 mr-3">عنوان مقال صغير هنا</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 70 70"
                className=" "
              >
                <g
                  id="Group_127763"
                  data-name="Group 127763"
                  transform="translate(-1805 -418)"
                >
                  <circle
                    id="Ellipse_31824"
                    data-name="Ellipse 31824"
                    cx="35"
                    cy="35"
                    r="35"
                    transform="translate(1805 418)"
                    fill="#fff5"
                  />
                  <rect
                    id="Rectangle_37264"
                    data-name="Rectangle 37264"
                    width="28"
                    height="28"
                    transform="translate(1829 440)"
                    fill="#fff"
                  />
                  <g
                    id="Group_33031"
                    data-name="Group 33031"
                    transform="translate(1812.232 425.732)"
                  >
                    <path
                      id="Path_16006"
                      data-name="Path 16006"
                      d="M27.384,0A27.384,27.384,0,1,0,54.768,27.384,27.384,27.384,0,0,0,27.384,0ZM38.917,28.257a1.956,1.956,0,0,1-.878.878v.01L22.39,36.968a1.956,1.956,0,0,1-2.83-1.76V19.56a1.956,1.956,0,0,1,2.83-1.751l15.648,7.824A1.956,1.956,0,0,1,38.917,28.257Z"
                      transform="translate(0)"
                      fill="#68c6c5"
                    />
                  </g>
                </g>
              </svg>{" "}
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
