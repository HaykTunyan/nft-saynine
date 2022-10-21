import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
import { toast } from "react-toastify";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

function MorganUsed({ balance, id, img, name }) {
  const [megaData, getMegaData] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    watch,
    reset,
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
      const response = await contract.getMegaNFTs(id, data.maxNumberToSpend);
      toast.success(" Get New NFT successfuly ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      getMegaData(response);
      console.log(" successfuly ")
    } catch (error) {
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    reset({
      data: "maxNumberToSpend",
    });
  }, [megaData]);

  return (
    <div className="flex flex-col justify-center p-4 border-orange rounded-2xl border-1px">
      <div className="w-full flex justify-center">
        <Image
          src={img}
          width={143}
          height={186}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center">
        <div className="flex pt-0 xl:pt-5">
          <h5 className="text-xl font-semibold text-white">{name}</h5>
        </div>
        <div className="flex space-x-1 pt-2">
          <div className="text-base font-bold text-orange-alft ">Nft Id:</div>
          <div className="text-base  font-normal text-orange-alft">{id}</div>
        </div>
        <div className="flex space-x-1 pt-2">
          <div className="text-base font-bold text-orange-alft ">Count:</div>
          <div className="text-base  font-normal text-orange-alft">
            {balance}
          </div>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col py-1"
          >
            <div className="w-full">
              <div className="grid grid-cols-1">
                <div className="text-base  font-bold text-orange-alft ">
                  Spend
                </div>
                <div className="text-base  font-normal text-orange-alft mt-2">
                  <input
                    className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue=""
                    min={10}
                    placeholder="Max Number To Spend ..."
                    {...register("maxNumberToSpend")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pt-5">
              <div className="pt-6 md:pt-0" />
              <button
                type="submit"
                className="py-2 px-10  bg-green-alfa text-xl rounded-lg text-white font-normal"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MorganUsed;
