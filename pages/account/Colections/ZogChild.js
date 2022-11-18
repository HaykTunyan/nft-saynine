import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { vmContract } from "../../../web/Web3clinet";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
import { toast } from "react-toastify";
import { Line } from "rc-progress";
import { theme } from "../../../tailwind.config";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";


export const useZogList = [
  {
    key: 1,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 2,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 3,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 4,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 5,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 6,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 7,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 8,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 9,
    img: '/nfts/Fight_4.png',
  },
  {
    key: 10,
    img: '/nfts/Fight_4.png',
  },
];

function ZogChild({ userToken, successRes }) {
  const [balanaceNFT, getBalanceNFT] = useState();
  const [megaData, getMegaData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [landing, setLanding] = useState();

  // NFT 8
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(String(userToken), 8)
        .call(function (err, res) {
          if (err) {
            return;
          }
          getBalanceNFT(res);
        });
    }
  }, [userToken, successRes]);

  // Get MegaNFT
  async function getMegaNFT() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    try {
      const response = await contract.getMegaNFTs(8, 10);
      toast.success(" Get ZOG NFT successfuly ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      getMegaData(response);
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
    }
  };

  useEffect(() => {
    if (balanaceNFT < 10) {
      setLanding(balanaceNFT * 10);
    }
  }, [balanaceNFT]);

  return (
    <>
      <Fragment>
        <Line
          className="rounded-md bg-green-secta"
          percent={balanaceNFT < 10 ? landing : 100}
          strokeWidth={1}
          strokeColor={theme.extend.colors.green.DEFAULT}
          trailWidth={2}
          trailColor={theme.extend.colors.green.secta}
        />
      </Fragment>
      <div className="pt-5" />
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Balance NFT 10 */}
        {balanaceNFT > 9 && useZogList.map((item) => (
          <div className="hidden lg:flex  lg:justify-center" key={item.key} >
            <Image
              src="/nfts/Fight_4.png"
              width={300}
              height={390}
              className={`w-full h-full object-cover `}
            />
          </div>
        ))}

        {/* Desktop */}
        {balanaceNFT < 10 && useZogList
          .slice(10 - balanaceNFT)
          .map((use, index) => (
            <div className="hidden lg:flex lg:justify-center" key={use.key}>
              <Image
                src="/nfts/Fight_4.png"
                width={300}
                height={390}
                className={`w-full h-full object-cover grayscale`}
              />
            </div>
          ))}

        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <div className="py-5">
            <span className="text-xs font-semibold  px-5 py-2 rounded-3xl bg-orange text-white ">
              {balanaceNFT}
            </span>
          </div>
        </div>

        {/* Moblie Version */}
        {balanaceNFT < 1 ? (
          <>
            <div className="flex py-5">
              <div className="hidden text-xl lg:text-base font-bold text-yellow-alfa">
                You don't use Zog NFT
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center lg:hidden ">
              <Image
                src="/nfts/Fight_4.png"
                width={300}
                height={390}
                className={`w-full h-full object-cover grayscale`}
              />
            </div>
            <div className="flex flex-col lg:justify-center items-center">
              <div className="py-5 lg:hidden">
                <span className="text-xs font-semibold  px-5 py-2 rounded-3xl bg-orange text-white ">
                  {balanaceNFT}
                </span>
              </div>
              <div className="">
                {balanaceNFT > 9 && (
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm p-5 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={getMegaNFT}
                  >
                    Send
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className=" border-1px border-orange mt-5" />
    </>
  );
}

export default ZogChild;
