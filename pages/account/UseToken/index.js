import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { vmContract } from "../../../web/Web3clinet";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";

const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

function UseToken({ userToken, receiverAddress }) {
  const [tokenRes, getTokenRes] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    useTokens(data);
  };

  async function useTokens(data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.useTokens(data.id, data.amount);
      getTokenRes(response);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  console.log(" tokenRes  ", tokenRes);

  console.log(" errorMessage  ", errorMessage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col"
      >
        <div className="w-full ">
          <div className="flex ">
            <h4 className="text-2xl lg:text-4xl font-semibold text-white">
              Use Tokens
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Id:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
              <input
                class="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                defaultValue=""
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
            // type="submit"
            onClick={useTokens}
            className="py-2 px-10  bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default UseToken;
