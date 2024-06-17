import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Banner = () => {
  return (
    <div className="z-0">
      <div className="" data-aos="zoom-in">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          loop={true}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[900px] min-h-[600px]  bg-[url('https://i.ibb.co/ftYMq2T/hostel-banner.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-full mx-auto flex flex-col   justify-center items-center md:gap-10 gap-4 p-2 absolute h-full  md:bg-gradient-to-r bg-gradient-to-t from-[#191919fa]  to-[rgba(21, 21, 21, 0.00)]  ">
                  <div className="md:w-2/3 text-center text-white">
                    <h3 className="md:text-3xl text-2xl font-semibold text-[#87ff24f1] animate__animated animate__fadeInTopLeft  animate__slow">
                      Get Delicious Meals
                    </h3>
                    <h1 className="lg:text-7xl md:text-5xl text-3xl  font-bold animate__animated  animate__fadeInUp animate__slower text-white merienda my-4">
                      Welcome to <br /> Edu
                      <span className="text-yellow-500">Feast</span> Hostel
                    </h1>
                    <p className="md:my-4 my-2 md:text-xl xl:w-[80%] md:w-full w-[90%]  mx-auto animate__animated animate__fadeInBottomRight  text-yellow-100">
                      Welcome to{" "}
                      <span className="text-white">
                        Edu<span className="text-yellow-500">Feast</span> Hostel
                      </span>{" "}
                      , where tradition meets innovation. Taste the rich flavors
                      of time-honored recipes, fall in love with our creative
                      culinary twists, and delight in a diverse array of
                      delectable dishes.
                    </p>

                    {/*Search Field  */}
                    <div className="flex items-center mt-6 xl:w-[60%] w-[80%] mx-auto">
                      <input
                        type="text"
                        placeholder="Search meals here..."
                        name="search"
                        className="block w-full rounded-r-none rtl:rounded-r-lg rtl:rounded-l-none  rounded-lg border bg-white px-5 lg:py-2.5 py-1.5 focus:outline-none focus:ring focus:border-blue-500 focus:ring-[#6092f6] focus:ring-opacity-40"
                      />
                      <button
                        type="submit"
                        className="lg:py-2.5 py-1.5 px-3 text-white bg-[#6caffa]  border border-r-0 rtl:rounded-r-lg  rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-r-lg font-bold"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

// https://i.ibb.co/ftYMq2T/hostel-banner.jpg
