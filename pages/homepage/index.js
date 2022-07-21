import { Fragment } from "react";
import Head from "next/head";
import FutureSeo from "./FutureSeo";
import Carousel from "../../components/Carousel";
import NftCard from "../../components/NftCard";
import Container from "../../components/Container";

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

function HomePage() {

  return (
    <Fragment>
      <Head>
        <title>Saynine</title>
        <meta
          name="description"
          content="Saynine is a dynamic SEO agency that helps clients boost rankings through backlinks."
        />
      </Head>
      <div className="overflow-hidden">
        <div className="pt-10 lg:pt-26" />
        <FutureSeo />
        <div className="md:pt-20 lg:pt-64" />
        <div className="md:px-5">
          <Carousel />
        </div>
        <div className="md:pt-20 lg:pt-64" />
        <Container className="pb-32">
          <div className="text-center pt-10">
            <h2 className="text-center text-white text-4xl lg:text-8xl">
              Start The link Inovation
            </h2>
          </div>
          <div className="pt-15" />
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
            {infoNft.map((item) => (
              <div className="flex" key={item.key}>
                <NftCard
                  title={item.title}
                  img={item.img}
                  link={item.link}
                  price={item.price}
                  alt={item.alt}
                  count={item.count}
                />
              </div>
            ))}
          </div>
        </Container>
        <div className=""></div>
      </div>
    </Fragment>
  );
}

export default HomePage;
