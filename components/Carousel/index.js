import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation } from "swiper";
import { NFT } from "../../web/contracts";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import CarouselModal from "../Modal/CarouselModal";

function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1.2}
        slidesPerGroupSkip={1}
        centeredSlides={true}
        keyboard={{
          enabled: true,
        }}
        onSlideChange={() => {
          /*...*/
        }}
        onReachEnd={() => {
          /*...*/
        }}
        loop={true}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper px-20"
      >
        <div
          className="z-50 absolute left-12 sm:left-20 md:left-20  top-0 lg:w-20 h-full lg:border-orange-alft  lg:border-2 text-center align-baseline flex justify-start rounded-t-3xl rounded-b-3xl"
          id="next"
        >
          <div className="w-8 h-8 lg:w-16 lg:h-16 border-2 border-orange-alft mx-auto rounded-full text-center items-center flex justify-center m-auto px-3">
            <Image
              src="/arrow_right.svg"
              width={12}
              height={24}
              className="w-full h-full object-cover mx-auto"
            />
          </div>
        </div>
        {NFT.map((item) => (
          <SwiperSlide key={item.key}>
            <div className="w-full border-2 lg:border-y-2 lg:border-x-0 border-orange-alft rounded-3xl">
              <div className=" lg:px-20 lg:py-10 w-full flex flex-col lg:flex-row h-auto">
                <div className="w-full md:h-full order-2 flex flex-col py-5 px-14 lg:px-5 lg:py-0 xl:pl-0 xl:py-0 xl:pr-5 lg:order-1 lg:w-7/12 ">
                  <div className="">
                    <h2 className="text-2xl md:text-3xl xl:text-6xl font-normal text-white">
                      {item.title}
                    </h2>
                  </div>
                  <div className="md:pt-4 xl:pt-6" />
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex space-x-2 pt-2">
                      <div className="text-lg xl:text-2xl font-bold  text-white">
                        Price:
                      </div>
                      <div className="text-lg xl:text-2xl font-normal text-white">
                        {item.price}$
                      </div>
                    </div>
                    <div className="px-4" />
                    <div className="flex space-x-2 pt-2">
                      <div className="text-lg xl:text-2xl font-bold  text-white">
                        Links:
                      </div>
                      <div className="text-lg xl:text-2xl font-normal text-white">
                        {item.link}
                      </div>
                    </div>
                  </div>
                  <div className="pt-6" />
                  <div className="w-full h-35 lg:h-64 xl:h-auto overflow-hidden">
                    <p className="font-normal text-base md:text-xl xl:text-3xl text-white   ">
                      {item.text}
                    </p>
                  </div>
                  <div className="pt-5 md:pt-10" />
                  <div className="mt-auto flex justify-center lg:justify-start">
                    <CarouselModal
                      title={item.title}
                      img={item.img}
                      count={item.count}
                      price={item.price}
                      number={item.number}
                      link={item.link}
                    />
                  </div>
                </div>
                <div className="w-full order-1 flex justify-center py-5 px-14 lg:px-5 lg:py-0 xl:pr-0 xl:py-0 xl:pl-5 lg:order-2 lg:w-5/12">
                  <div className="w-60 h-80 xl:w-full xl:h-full">
                    <Image
                      src={item.img}
                      className=" w-full h-full object-cover"
                      width={570}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="z-50 absolute right-12 sm:right-20 md:right-20 top-0 lg:w-20 h-full lg:border-orange-alft lg:border-2 text-center align-baseline flex justify-start rounded-t-3xl rounded-b-3xl"
          id="prev"
        >
          <div className="w-8 h-8 lg:w-16 lg:h-16 border-2 border-orange-alft mx-auto rounded-full text-center items-center flex justify-center m-auto px-3">
            <Image
              src="/arrow_left.svg"
              width={12}
              height={24}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Swiper>
    </>
  );
}

export default Carousel;
