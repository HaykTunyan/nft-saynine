import React, { Fragment, useState } from "react";
import Image from "next/image";

function NftCard({ title, img, link, price, count, alt }) {
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
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
            alt={alt}
          />
        </div>
        <div className="pt-4" />
        <h3 className="text-lg lg:text-4xl  font-semibold text-white">
          {title}
        </h3>
        <div className="pt-2" />
        <div className="grid grid-cols-2 gap-5">
          <div className="flex space-x-1">
            <div className="text-xs lg:text-xl font-bold text-orange-alft ">
              Links:
            </div>
            <div className="text-xs lg:text-xl font-bold text-orange-alft">
              {link}
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="text-xs lg:text-xl font-bold text-yellow-alfa">
              Price:
            </div>
            <div className="text-xs lg:text-xl font-bold text-yellow-alfa">
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
              onClick={decrease}
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
          onClick={() => alert("request for backend")}
        >
          Buy Now
        </button>
      </div>
    </Fragment>
  );
}

export default NftCard;
