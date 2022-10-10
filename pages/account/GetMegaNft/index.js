import React, { useState, useEffect } from "react";
import { vmContract } from "../../../web/Web3clinet";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

function GetMegaNFT({ userToken, buyImage }) {
  const [megaData, getMegaData] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getMegaNFT(data);
  };

  async function getMegaNFT(data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.getMegaNFTs(
        userToken,
        data.maxNumberToSpend
      );
      getMegaData(response);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  return (
    <div className=" gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col"
      >
        <div className="w-full">
          <div className="flex">
            <h4 className="text-2xl lg:text-4xl font-semibold text-white">
              Get for MegaNFT
            </h4>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft">
              usedTokenId:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="Used Token Id ..."
                {...register("usedTokenId")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              maxNumberToSpend:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="Max Number To Spend ..."
                {...register("maxNumberToSpend")}
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

export default GetMegaNFT;
