import Container from "../../../components/Container";
import Image from "next/image";

function FutureSeo() {
  return (
    <section>
      <Container className="">
        <div className="w-full xl:w-1280px mx-auto">
          <h1 className="font-medium text-4xl xl:text-6xl text-center text-white">
            Welcome To The Future Of SEO
          </h1>
          <div className="pt-5" />
          <h3 className="font-normal text-2xl lg:text-3xl text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus
            laoreet adipiscing tortor. Faucibus sed mattis laoreet tempor enim
            sed posuere neque.
          </h3>
        </div>
        <div className="pt-10" />
        <div className="relative flex justify-center lg:justify-between">
          <div className="z-10 relative top-64 lg:top-4 hidden lg:block ">
            <Image
              src="/images/NFT-md-200.png"
              alt="ABOUTUS_UPDATED"
              width={330}
              height={450}
              className="w-full md:w-96"
            />
          </div>
          <div className="z-50">
            <Image
              src="/images/NFT-md-5000.png"
              width={330}
              height={450}
              alt="ABOUTUS_UPDATED"
              className="w-full md:w-96"
            />
          </div>
          <div className="z-10 relative top-64 hidden lg:top-4 lg:block ">
            <Image
              src="/images/NFT-md-1000.png"
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
              src="/images/NFT-sm-1000.png"
              width={330}
              height={450}
              alt="ABOUTUS_UPDATED"
              className="w-full md:w-96"
            />
          </div>
          <div className="relative top-40 lg:top-0 lg:bottom-5 -right-5 lg:right-25 z-40 ">
            <Image
              src="/images/NFT-md-200.png"
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
              src="/images/NFT-md-200.png"
              alt="ABOUTUS_UPDATED"
              width={330}
              height={450}
              className="w-full md:w-96"
            />
          </div>
          <div className="z-10 relative -right-25 lg:top-4 lg:hidden ">
            <Image
              src="/images/NFT-md-1000.png"
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
