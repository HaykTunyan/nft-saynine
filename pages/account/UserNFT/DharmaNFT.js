import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendModal from "../../../components/Modal/SendModal";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

function DharmaNFT({ balance, userToken, nftId, setSuccessRes }) {
  const [showTransfer, setShowTransfer] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [transferData, getTransferData] = useState();
  const [tokenData, getTokenData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [showSendModal, setShowSendModal] = useState(false);

  const toggleTransfer = () => {
    setShowTransfer(!showTransfer);
    setShowToken(false);
  };

  const toggleToken = () => {
    setShowToken(!showToken);
    setShowTransfer(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (showTransfer) {
      handleTransver(data);
    } else {
      useTokens(data);
    }
  };

  async function handleTransver(data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.safeTransferFrom(
        userToken,
        data.to,
        nftId,
        data.amount,
        "0x"
      );
      getTransferData(response);
      toast.success(" Transfer NFT Master Dharma successfuly ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setShowTransfer(false);
      setSuccessRes(true);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  async function useTokens(data) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.useTokens(nftId, data.amount);
      getTokenData(response);
      setShowSendModal(true);
      // toast.success(" Used NFT Morgan successfuly ", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      setShowToken(false);
      setSuccessRes(true);
    } catch (error) {
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    reset({
      data: {
        do: "",
        amount: "",
      }
    })
  }, [transferData])

  return (
    <div className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col">
      <div className="flex  ">
        <div className="w-4/12">
          <Image
            src="/images/NFT-5.png"
            width={143}
            height={186}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-8/12 pl-4">
          <div className="flex justify-between pt-0 xl:pt-5">
            <h4 className="text-2xl lg:text-4xl font-semibold text-white">
              Master Dharma
            </h4>
          </div>
          <div className="flex space-x-1 pt-2">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Links:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft">
              80 DR+
            </div>
          </div>

          <div className="flex space-x-1 pt-2">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Nft Id:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft">
              9
            </div>
          </div>
          <div className="flex space-x-1 pt-2">
            <div className="text-base xl:text-2xl font-bold text-orange-alft ">
              Count:
            </div>
            <div className="text-base xl:text-2xl font-normal text-orange-alft">
              {balance}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end py-5  ">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-10 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={toggleTransfer}
            >
              Transfer
            </button>
            <div className="py-3 md:hidden" />
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-10 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={toggleToken}
            >
              Use
            </button>
          </div>
        </div>
      </div>

      {showTransfer && (
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-2  px-4 py-3 flex flex-col border-orange rounded-2xl border-1px"
          >
            <div className="w-full ">
              <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  To:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                  <input
                    className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue=""
                    placeholder="To ..."
                    {...register("to")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Amount:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                  <input
                    type="number"
                    className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
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
      )}

      {showToken && (
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col"
          >
            <div className="w-full ">

              <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Amount:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                  <input
                    className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
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
      )}

      {showSendModal && (
        <SendModal showSendModal={showSendModal} setShowSendModal={setShowSendModal} tokenData={tokenData} />

      )}
    </div>
  );
}

export default DharmaNFT;
