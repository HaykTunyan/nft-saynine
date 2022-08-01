import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const infoNft = [
  {
    key: 0,
    title: "Bulgartel",
    img: "/images/NFT-sm-200.png",
    link: "1000",
    price: "500",
    alt: "NFT-SM-200",
    count: "1",
  },
  {
    key: 1,
    title: "Terminator",
    img: "/images/NFT-sm-1000.png",
    link: "1000",
    price: "500",
    alt: "NFT-SM-1000",
    count: "1",
  },
  {
    key: 2,
    title: "Bulgartel",
    img: "/images/NFT-sm-200.png",
    link: "1000",
    price: "500",
    alt: "NFT-SM-200",
    count: "1",
  },
  {
    key: 3,
    title: "Terminator",
    img: "/images/NFT-sm-1000.png",
    link: "1000",
    price: "500",
    alt: "NFT-SM-1000",
    count: "1",
  },
  {
    key: 4,
    title: "Gangster",
    img: "/images/NFT-sm-5000.png",
    link: "1000",
    price: "500",
    alt: "NFT-SM-5000",
    count: "1",
  },
];

function Carousel({ title, img, price, link }) {

  return (
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
        className="absolute left-10 md:left-20 top-0 lg:w-20 h-full lg:border-orange-alft lg:border-2 text-center align-baseline flex justify-start rounded-t-3xl rounded-b-3xl"
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
      {infoNft.map((item) => (
        <SwiperSlide key={item.key}>
          <div className="w-full border-2 lg:border-t-2 lg:border-b-2 border-orange-alft rounded-3xl ">
            <div className=" lg:px-20  lg:py-10 w-full flex flex-col lg:flex-row h-auto">
              <div className="w-full order-2 flex flex-col py-10 px-10 lg:px-5 lg:py-0 xl:pl-0 xl:py-0 xl:pr-5 lg:order-1 lg:w-7/12 ">
                <div className="">
                  <h2 className="text-4xl xl:text-6xl font-normal text-white">
                    {item.title}
                  </h2>
                </div>
                <div className="pt-6" />
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
                <div className="w-full lg:w-10/12">
                  <p className="font-normal text-base md:text-xl xl:text-3xl text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sollicitudin id pellentesque risus, turpis amet. Neque donec
                    magna nibh sem. Pharetra vitae feugiat commodo molestie
                    egestas gravida auctor nisl, suspendisse. Facilisi sit metus
                    nunc ultricies a in. Sed quis tellus sollicitudin enim
                    varius sit tempor, sit.
                  </p>
                </div>
                <div className="pt-10" />
                <div className="mt-auto flex justify-center lg:justify-start">
                  <button
                    type="button"
                    className="text-sm md:text-2xl xl:text-4xl font-normal bg-orange-alft px-20 py-3 lg:px-16 lg:py-6 text-white rounded-xl"
                  >
                    View all
                  </button>
                </div>
              </div>
              <div className="w-full order-1 flex justify-center py-10 px-10 lg:px-5 lg:py-0 xl:pr-0 xl:py-0 xl:pl-5 lg:order-2 lg:w-5/12">
                <div className="w-60 h-80 xl:w-full xl:h-full">
                  <Image
                    src={item.img}
                    className=" w-full h-full object-cover"
                    // layout="fill"
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
        className="absolute right-10 md:right-20 top-0 lg:w-20 h-full lg:border-orange-alft lg:border-2 text-center align-baseline flex justify-start rounded-t-3xl rounded-b-3xl"
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
  );
}

export default Carousel;
