import Container from "../../../components/Container";
import Image from "next/image";

function FutureSeo() {
  return (
    <section>
      <Container className="">
        <div className="w-1280px mx-auto">
          <h1 className="font-medium text-6xl text-center text-white">
            Welcome to the future of SEO
          </h1>
          <div className="pt-5" />
          <h3 className="font-normal text-3xl text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus
            laoreet adipiscing tortor. Faucibus sed mattis laoreet tempor enim
            sed posuere neque.
          </h3>
        </div>
        <div className="pt-10" />
        <div className="relative flex justify-between">
          <div className="z-10 relative top-4">
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
          <div className="z-10 relative top-4">
            <Image
              src="/images/NFT-md-1000.png"
              width={330}
              height={450}
              alt="ABOUTUS_UPDATED"
              className="w-full md:w-96"
            />
          </div>
        </div>
        <div className="relative flex justify-around bottom-350">
          <div className="relative bottom-5 left-25 z-40">
            <Image
              src="/images/NFT-sm-1000.png"
              width={330}
              height={450}
              alt="ABOUTUS_UPDATED"
              className="w-full md:w-96"
            />
          </div>
          <div className="relative bottom-5 right-25 z-40">
            <Image
              src="/images/NFT-md-200.png"
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
