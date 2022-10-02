import React, { useState, useEffect } from "react";
import { vmContract } from "../../../web/Web3clinet";
import { useForm } from "react-hook-form";

function MinNFT() {
  const [mintData, getMintData] = useState();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert.log(data);

  async function Mint() {
    const res = await vmContract.methods
      .mint(
        "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40",
        4,
        "100000000000000000"
      )
      .send({
        from: "0x5A4Ef4eCD643049f5225844DD3B4ba34B1Ba7b40",
      });

    getMintData(res);
    // const res = await vmContract.methods
    //   .owner()
    //   .call();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col"
      >
        <div className="w-full ">
          <div className="flex ">
            <h4 className="text-2xl lg:text-4xl font-semibold text-white">
              Mint NFT
            </h4>
          </div>
          <div className="grid grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Account:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="Account ..."
                {...register("account")}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              NFT Id:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="NFT ID ..."
                {...register("id")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Amount:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="Amount ..."
                {...register("amount")}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end pt-5">
          <div className="pt-6 md:pt-0" />
          <button
            type="submit"
            className="py-2 px-10  bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default MinNFT;
