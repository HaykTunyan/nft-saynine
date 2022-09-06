import React, { Fragment, useState } from "react";
import Head from "next/head";
import FutureSeo from "../components/homeview/FutureSeo";
import Carousel from "../components/Carousel";
import NftCard from "../components/NftCard";
import Container from "../components/Container";
import { NFT } from "../web/contracts";
import { vmContract } from "../web/Web3clinet";

function MY() {
  const [buyNFT, setBuyNFT] = useState();
  const [amountN, setAmoutn] = useState();

  const handleTransver = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      passFactoryNFTAddress,
      passFactory.abi,
      signer
    );
    const response = await contract.transferFrom(
      accounts[0],
      "0xA1bdf27AEdaDb00f9f48b8e0Bc3d90052934205E",
      1
    );
    console.log("log transfer", response);
  };
  //  id 4
  const Mint = async () => {
    const res = await vmContract.methods
      .mint(userWalet, 4, "1000000000000000000")
      .send({
        from: userWalet,
      });

    console.log("res", res);
  };

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
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:px-5">
            {NFT.map((item) => (
              <div className="flex" key={item.key}>
                <NftCard
                  key={item.key}
                  nftId={item.nftId}
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
      </div>
    </Fragment>
  );
}

export default MY;
