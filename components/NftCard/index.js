import React, { Fragment, useState } from "react";
import Image from "next/image";
import BuyModal from "../Modal/BuyModal";

function NftCard({ nftId, key, title, img, link, price, count }) {
  const [counter, setCounter] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [buyImage, setBuyImage] = useState();

  console.log(" nftId ", nftId);
  console.log(" title ", title);
  console.log(" img ", img);
  console.log(" link ", link);
  console.log(" price ", price);
  console.log(" count ", count);


  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  const decrease = () => {
    setCounter((counter) => counter - 1);
  };

  const buyMyNFT = ( nftId, key, img, title, link, counter, price) => {
    setShowModal(true);
    setBuyImage({ nftId, key, img, title, link, counter, price });
    console.log(" all data ", { nftId, key, img, title, link, counter, price });
  };

  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="relative">
          <Image
            src={img}
            width={300}
            height={390}
            className="w-full h-full object-cover obj-center"
          />
        </div>
        <div className="pt-4" />
        <h3 className="text-lg lg:text-3xl  font-semibold text-white">
          {title}
        </h3>
        <div className="pt-2" />
        <div className="grid grid-flow-col gap-4">
          <div className="flex space-x-1">
            <div className="text-xs lg:text-base font-bold text-orange-alft ">
              Links:
            </div>
            <div className="text-xs lg:text-base font-bold text-orange-alft">
              {link}
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="text-xs lg:text-base font-bold text-yellow-alfa">
              Price:
            </div>
            <div className="text-xs lg:text-base font-bold text-yellow-alfa">
              {price}$
            </div>
          </div>
        </div>
        <div className="pt-4" />
        <div className="flex justify-between items-baseline text-center">
          <div className="">
            <button
              type="button"
              className="rounded-full w-4 h-4 lg:w-6 lg:h-6 shadow-icon flex items-center justify-center"
              onClick={() => decrease()}
              disabled={counter === 0}
            >
              <Image
                src="/remove-Icon.svg"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </button>
          </div>
          <div className="text-sm lg:text-2xl text-yellow-alfa">{counter}</div>
          <div className="">
            <button
              type="button"
              className="rounded-full w-4 h-4 lg:w-6 lg:h-6"
              onClick={increase}
              disabled={counter > 4}
            >
              <Image
                src="/decrement-icon.svg"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
        <div className="pt-5" />

        <button
          type="button"
          className="py-2 px-10 w-full bg-green text-sm lg:text-2xl rounded-lg text-white font-normal"
          onClick={() => buyMyNFT(nftId, key, img, title, link, counter, price)}
        >
          Buy Now
        </button>
      </div>
      {showModal && (
        <BuyModal setShowModal={setShowModal} buyImage={buyImage} />
      )}
    </Fragment>
  );
}

export default NftCard;
