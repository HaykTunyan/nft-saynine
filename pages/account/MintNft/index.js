import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { vmContract } from "../../../web/Web3clinet";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
const CONTACT_ADDRESS = "0xA1bdf27AEdaDb00f9f48b8e0Bc3d90052934205E";

function MinNFT({ userToken, receiverAddress }) {
  const [mintData, getMintData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    onMint(data);
  };

  async function onMint(data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    console.log(" contract ", contract);
    try {
      const response = await contract.mint(userToken, data.id, data.amount);
      getMintData(response);
    } catch (error) {
      setErrorMessage(error);
    }
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
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Account:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="Account ..."
                {...register("account")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              NFT Id:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="NFT ID ..."
                {...register("id")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Amount:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
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
