import { Fragment } from "react/cjs/react.production.min";
import BuyCard from "../../components/BuyCard";
import Container from "../../components/Container";
import Image from "next/image";
import ProfressLine from "../../components/ProgressLine";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ABI } from "../../web/contracts";
import { NFT } from "../../web/contracts";
import ReadContract from "./ReadContract";
import { vmContract } from "../../web/Web3clinet";

function Account() {
  // Hooks.
  const [userWalet, setUserWalet] = useState();
  const [buyImage, useBuyImage] = useState();

  console.log(" buy Image  in storege", buyImage);

  useEffect(() => {
    const userWalet = localStorage.getItem("userWalet");
    if (userWalet) {
      setUserWalet(userWalet);
    }
  }, []);

  useEffect(() => {
    const buyImage = JSON.parse(localStorage.getItem("buyImage"));
    if (buyImage) {
      useBuyImage(buyImage);
    }
  }, []);

  // Call to NFT contract
  async function Mint() {
    const res = await vmContract.methods
      .mint(userWalet, 4, 100)
      .send({
        from: userWalet,
      });

    // const res = await vmContract.methods
    //   .owner()
    //   .call();

    console.log("res", res);
  }

  return (
    <Container>
      <div className="pt-20">
        <h1 className="text-4xl xl:text-8xl font-normal text-white">
          My Account
        </h1>
        <div className="pt-6" />
      </div>
      <div className="pt-10 xl:pt-20" />
      {/* Buy NFT */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="px-4 py-3 border-orange rounded-2xl border-1px flex">
          <div className="w-4/12">
            {/* <Image
          src={buyImage?.img}
          width={143}
          height={186}
          className="w-full h-full object-cover"
        /> */}
          </div>
          <div className="w-8/12 pl-4">
            <div className="flex justify-between pt-0 xl:pt-5">
              <h4 className="text-2xl lg:text-4xl font-semibold text-white">
                {buyImage?.title}
              </h4>
              <div className="pr-2">
                {buyImage?.counter && (
                  <span className="text-white text-xl xl:text-4xl font-bold">
                    {buyImage?.counter}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-1 pt-2">
              <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                Links:
              </div>
              <div className="text-base xl:text-2xl font-normal text-orange-alft">
                {buyImage?.link}
              </div>
            </div>

            <div className="flex space-x-1 pt-2">
              <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                Nft Id:
              </div>
              <div className="text-base xl:text-2xl font-normal text-orange-alft">
                {buyImage?.nftId}
              </div>
            </div>
            <div className="pt-6 xl:pt-8" />
            <button
              type="button"
              className="py-2 px-10  w-full bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
            >
              Use
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 xl:pt-20" />
      {/* <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {NFT.map((item) => (
          <Fragment key={item.key}>
            <BuyCard
              title={item.title}
              img={item.img}
              number={item.number}
              link={item.link}
            />
          </Fragment>
        ))}
      </div> */}
      <div className="pt-10 xl:pt-20" />
      <ReadContract />

      <div className="mt-5">
        <button
          type="button"
          onClick={Mint}
          className="py-2 px-10  w-full bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
        >
         Mint
        </button>
      </div>
      <div className=""></div>
      <div className="pt-20 xl:pt-64" />
      <h2 className="text-4xl xl:text-8xl font-normal text-white">Collected</h2>
      <div className="">
        <p className="text-base xl:text-4xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus
          laoreet adipiscing tortor. Faucibus sed mattis laoreet tempor enim sed
          posuere neque.
        </p>
      </div>
      <div className="pt-10" />
      <div className="flex justify-between">
        <div className="w-17.5 h-25">
          <Image
            src="/images/NFT-1.png"
            width={70}
            height={100}
            className={`w-17.5 h-25 object-cover grayscale `}
          />
        </div>
        <div className="w-17.5 h-25">
          <Image
            src="/images/NFT-1.png"
            width={70}
            height={100}
            className={`w-17.5 h-25 object-cover`}
          />
        </div>
      </div>
      <div className=" pt-10" />
      <ProfressLine />
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {NFT.map((item) => (
            <div className="flex justify-center" key={item.key}>
              <Image
                src={item.img}
                width={300}
                height={390}
                className={`w-full h-full object-cover ${item.active} `}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pb-52" />
    </Container>
  );
}

export default Account;
