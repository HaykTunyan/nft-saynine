import Container from "../../../components/Container";
import Image from "next/image";
import { useState } from "react";

function FutureSeo() {

  const [ buyNFT, setBuyNFT ] = useState();

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
      </Container>
    </section>
  );
}

export default FutureSeo;
