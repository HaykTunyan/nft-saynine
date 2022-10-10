import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { ethers } from "ethers";
import { ABI } from "../../web/contracts";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

export default function UseNFT({ setShowModal, userToken }) {
  const router = useRouter();
  const [count, setCount] = useState();
  const [burnNft, setBurnNft] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onBurn(data);
  };


  async function onBurn(data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.burn(
        userToken, 
        data.id,
        data.anount
        );
      setBurnNft(response);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      toast.error("invalid BigNumber value!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const checkNft = () => {
    if (count > 0) {
      const counterNumber = count - 1;
      localStorage.setItem("count", JSON.stringify(counterNumber));
    }
    setShowModal(false);
  };

  useEffect(() => {
    const countNft = JSON.parse(localStorage.getItem("count"));
    setCount(countNft);
  }, []);

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animation-modal">
        <div className="relative w-80 lg:w-135 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="bg-neutral-600 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <div className="pt-4" />
              <h3 className="text-lg lg:text-3xl  font-semibold text-white">
                Use NFT
              </h3>

              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="pt-2" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="col-span-2 px-4 py-5 rounded-2xl  flex flex-col"
            >
              <div className="w-full py-5">
                <div className="grid grid-cols-1  md:grid-cols-2 pt-5">
                  <div className="text-base xl:text-2xl font-bold text-orange-alft">
                    Account (address):
                  </div>
                  <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                    <input
                      className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                      defaultValue=""
                      placeholder="account ..."
                      {...register("account")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                  <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                    Id (uint256):
                  </div>
                  <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                    <input
                      className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                      defaultValue=""
                      placeholder="id (uint256) ..."
                      {...register("id")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                  <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                    value (uint256):
                  </div>
                  <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                    <input
                      className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                      defaultValue=""
                      placeholder="value (uint256) ..."
                      {...register("value")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between align-baseline p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  // onClick={onBurn}
                  className="py-2 px-10  bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
                >
                  Burn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
