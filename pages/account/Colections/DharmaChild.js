import React, { useState, useEffect } from "react";
import Image from "next/image";
import { vmContract } from "../../../web/Web3clinet";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
import { toast } from "react-toastify";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

function DharmaChild({ userToken, successRes }) {
  const [balanceTwo, getBalanceTwo] = useState();
  const [morgan, setMorgan] = useState();
  const [megaData, getMegaData] = useState();
  const [errorMessage, setErrorMessage] = useState();

  
  const listData = new Array(5).fill([1]);


  // NFT 10
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(String(userToken), 10)
        .call(function (err, res) {
          if (err) {
            return;
          }
          getBalanceTwo(res);
        });
    }
  }, [userToken, successRes]);

  useEffect(() => {
    if (balanceTwo > 0) {
      const list = Array(Number(balanceTwo)).fill([1]);
      setMorgan(list);
    }
  }, [balanceTwo]);

  async function getMegaNFT() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(" provider ", provider)
    const signer = provider.getSigner();
    console.log(" signerr ", signer);
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.getMegaNFTs(2, 5);
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
      toast.success(" Get New NFT error ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(" errorrs ")
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
      {listData.map((index) => (
        <div className="flex justify-center" key={index} >
          <Image
            src="/nfts/Fight_5.png"
            width={300}
            height={390}
            className={`w-full h-full object-cover `}
          />
        </div>
      ))}
        <div className="flex justify-center items-center">
        <div className="">
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm p-5 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={getMegaNFT}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default DharmaChild;
