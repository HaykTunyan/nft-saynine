import React, { useState, useEffect } from "react";
import { ABI } from "../../../web/contracts";

const CONTACT_ADDRESS = "0xA1bdf27AEdaDb00f9f48b8e0Bc3d90052934205E";

const ReadContract = () => {
  // Hooks.
  const [userWalet, setUserWalet] = useState();

  async function handleTransver() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
    const response = await contract.transferFrom(
      userWalet,
      "0x71f2648a05890A892bB4DCFb6F4FBA8F6bD6b7C9",
      1001
    );
  }

  useEffect(() => {
    const userWalet = localStorage.getItem("userWalet");
    if (userWalet) {
      setUserWalet(userWalet);
    }
  }, []);

  return (
  
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col">
          <div className="">
            <p className="text-base xl:text-4xl text-white">
              Get for MegaNFT for NFT list
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="py-2 px-10  w-full bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
            >
              Get MegaNFT
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <p className="text-base xl:text-4xl text-white">
              Mint NFT to Contract Address
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="py-2 px-10  w-full bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
            >
              Mint NFT
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <p className="text-base xl:text-4xl text-white">
              Safe Transfer From
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="py-2 px-10  w-full bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
              onClick={handleTransver}
            >
              Safe Transfer
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <p className="text-base xl:text-4xl text-white">Use Toke</p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="py-2 px-10  w-full bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
            >
              Use Tokens
            </button>
          </div>
        </div>
      </div>
 
  );
};

export default ReadContract;
