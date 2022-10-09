import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { vmContract } from "../../../web/Web3clinet";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

function TransferNft({ userToken, receiverAddress, buyImage }) {
  const [transferData, getTransferData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleTransver(data);
  };

  async function handleTransver(data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.safeTransferFrom(
        userToken,
        data.to,
        data.id,
        data.amount,
        "0x"
      );
      getTransferData(response);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    vmContract.methods
      .balanceOf(
        // String(userToken)
        "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40",
        5
      )
      .call(function (err, res) {
        if (err) {
          console.log("An error occured", err);
          return;
        }
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col"
      >
        <div className="w-full ">
          <div className="flex ">
            <h4 className="text-2xl lg:text-4xl font-semibold text-white">
              Transfer NFT
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              From:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="From ..."
                {...register("from")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              To:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
                placeholder="To ..."
                {...register("to")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Id:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                placeholder="ID ..."
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

export default TransferNft;
