import { useState } from "react";
import Container from "../../../components/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NFT } from "../../../web/contracts";

// import required modules
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Scrollbar,
  Keyboard,
} from "swiper";

function FutureSeo() {
  const [buyNFT, setBuyNFT] = useState();

  return (
    <section>
      <Container className="xl:px-5">
        <div className="w-full xl:w-1280px mx-auto">
          <h1 className="font-medium text-4xl xl:text-6xl text-center text-white">
            Welcome To The Future Of SEO
          </h1>
          <div className="pt-5" />
          <h3 className="font-normal text-2xl lg:text-3xl text-center text-white">
            Need backlinks? Pick your favorite SayNine NFT and rank better with
            the backlink package behind it.
          </h3>
        </div>
        <div className="hidden lg:block ">
          <div className="pt-10" />
          <div className="relative flex justify-center lg:justify-between">
            <div className="z-10 relative top-64 lg:top-4 hidden lg:block ">
              <Image
                src="/images/NFT-2.png"
                alt="ABOUTUS_UPDATED"
                width={330}
                height={450}
                className="w-full md:w-96"
              />
            </div>
            <div className="z-50">
              <Image
                src="/images/NFT-5.png"
                width={330}
                height={450}
                alt="ABOUTUS_UPDATED"
                className="w-full md:w-96"
              />
            </div>
            <div className="z-10 relative top-64 hidden lg:top-4 lg:block ">
              <Image
                src="/images/NFT-1.png"
                width={330}
                height={450}
                alt="ABOUTUS_UPDATED"
                className="w-full md:w-96"
              />
            </div>
          </div>
          <div className="relative flex justify-between lg:justify-around bottom-350">
            <div className="relative top-40 lg:top-0 lg:bottom-5 -left-5 lg:left-25 z-40 ">
              <Image
                src="/images/NFT-1.png"
                width={330}
                height={450}
                alt="ABOUTUS_UPDATED"
                className="w-full md:w-96"
              />
            </div>
            <div className="relative top-40 lg:top-0 lg:bottom-5 -right-5 lg:right-25 z-40 ">
              <Image
                src="/images/NFT-2.png"
                width={330}
                height={450}
                alt="ABOUTUS_UPDATED"
                className="w-full md:w-96"
              />
            </div>
          </div>
          <div className="relative flex justify-between bottom-60">
            <div className="z-10 relative -left-25 lg:top-4 lg:hidden ">
              <Image
                src="/images/NFT-2.png"
                alt="ABOUTUS_UPDATED"
                width={330}
                height={450}
                className="w-full md:w-96"
              />
            </div>
            <div className="z-10 relative -right-25 lg:top-4 lg:hidden ">
              <Image
                src="/images/NFT-1.png"
                width={330}
                height={450}
                alt="ABOUTUS_UPDATED"
                className="w-full md:w-96"
              />
            </div>
          </div>
        </div>

        <div className="block py-10 lg:hidden">
          <Swiper
            slidesPerView={1.2}
            slidesPerGroupSkip={1}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            navigation={false}
            loop={true}
            modules={[
              Autoplay,
              Navigation,
              Keyboard,
              Scrollbar,
              EffectCreative,
            ]}
            onSlideChange={() => {
              /*...*/
            }}
            onReachEnd={() => {
              /*...*/
            }}
            className="mySwiper"
          >
            {NFT.map((item) => (
              <SwiperSlide key={item.key}>
                <div className="w-11/12 mx-5 z-10 flex justify-center md:w-full  ">
                  <Image
                    src={item.img}
                    alt="ABOUTUS_UPDATED"
                    width={330}
                    height={450}
                    className="w-full "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default FutureSeo;
