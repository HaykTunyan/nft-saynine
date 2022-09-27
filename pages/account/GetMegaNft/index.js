import React from "react";

function GetMegaNFT() {
  return (
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col md:flex-row ">
          <div className="w-full md:w-8/12">
            <div className="flex pt-0 xl:pt-5">
              <h4 className="text-2xl lg:text-4xl font-semibold text-white">
                Get for MegaNFT
              </h4>
            </div>
            <div className="flex justify-start pt-2">
              <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                usedTokenId:
              </div>
              <div className="text-base xl:text-2xl font-normal text-orange-alft">
                <div class="mb-6"></div>
              </div>
            </div>
            <div className="flex space-x-1 pt-2">
              <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                maxNumberToSpend:
              </div>
              <div className="text-base xl:text-2xl font-normal text-orange-alft"></div>
            </div>
          </div>
          <div className="w-full  md:w-4/12">
            <div className="pt-6 md:pt-0" />
            <button
              type="button"
              className="py-2 px-10  w-full bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
            >
              Send
            </button>
          </div>
        </div>
      </div>
   
  );
}

export default GetMegaNFT;
