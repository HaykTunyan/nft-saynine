import React, { Fragment } from "react";
import Image from "next/image";

function NftCard({ nftId, key, title, img, link, price, count, router }) {
  return (
    <Fragment key={key}>
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
        <h3 className="text-lg lg:text-3xl font-semibold text-white">
          {title}
        </h3>
        <div className="pt-2" />
        <div className="grid grid-flow-col gap-4">
          <div className="flex space-x-1">
            <div className="text-sm lg:text-base font-bold text-orange-alft">
              Links:
            </div>
            <div className="text-sm lg:text-base font-bold text-orange-alft">
              {link}
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="text-sm lg:text-base font-bold text-yellow-alfa">
              Price:
            </div>
            <div className="text-sm lg:text-base font-bold text-yellow-alfa">
              {price}$
            </div>
          </div>
        </div>
        <div className="pt-5" />
        <button
          type="button"
          className="py-2 px-10 w-full bg-green text-md lg:text-2xl rounded-lg text-white font-normal"
        >
          <a target="_blank" href={router} rel="noopener noreferrer">
            Buy Now
          </a>
        </button>
      </div>
    </Fragment>
  );
}

export default NftCard;
