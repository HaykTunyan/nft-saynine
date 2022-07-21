import React from "react";
import Image from "next/image";

function BuyCard({ img, title, number, link }) {
  return (
    <div className="px-4 py-3 border-orange rounded-2xl border-1px flex">
      <div className="w-4/12">
        <Image
          src={img}
          width={143}
          height={186}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-8/12 pl-4">
        <div className="flex justify-between pt-0 xl:pt-5">
          <h4 className="text-2xl lg:text-4xl font-semibold text-white">
            {title}
          </h4>
          <div className="pr-2">
            {number && (
              <span className="text-white text-xl xl:text-4xl font-bold">
                {number}
              </span>
            )}
          </div>
        </div>
        <div className="flex space-x-1 pt-2">
          <div className="text-base xl:text-2xl font-bold text-orange-alft ">
            Links:
          </div>
          <div className="text-base xl:text-2xl font-normal text-orange-alft">
            {link}
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
  );
}

export default BuyCard;
