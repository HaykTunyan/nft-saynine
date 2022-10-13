import React, { useEffect, useState } from "react";
import Image from "next/image";
import { vmContract } from "../../../web/Web3clinet";

function UseNFTComponent() {
  // Hooks.
  const [buyImage, useBuyImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [usedNft, getUsedNft] = useState();
  const [count, getCount] = useState();
  const [userToken, getUserToken] = useState();
  const receiverAddress = "0x92d96c53D4e89F0BA9fcb20444358A639d1492D5";
  const [balanceOne, getBalanceOne] = useState();
  const [balanceTwo, getBalanceTwo] = useState();
  const [balanceThree, getBalanceThree] = useState();
  const [balanceFour, getBalanceFour] = useState();
  const [balanceFive, getBalanceFive] = useState();

  // NFT 1 id = 1 => 2
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken),
          // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          2
        )
        .call(function (err, res) {
          if (err) {
            return;
          }
          getBalanceOne(res);
        });
    }
  }, [userToken]);

  // NFT 2  id = 3  => 4
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken),
          // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          4
        )
        .call(function (err, res) {
          if (err) {
            return;
          }
          getBalanceTwo(res);
        });
    }
  }, [userToken]);

  // NFT 3  id = 5 => 6
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken), // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          6
        )
        .call(function (err, res) {
          if (err) {
            console.log("An error occured", err);
            return;
          }
          getBalanceThree(res);
        });
    }
  }, [userToken]);

  // NFT 4  id = 7 => 8
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken),
          // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          8
        )
        .call(function (err, res) {
          if (err) {
            console.log("An error occured", err);
            return;
          }
          getBalanceFour(res);
        });
    }
  }, [userToken]);

  // NFT 5 id = 9 = 10
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken),
          // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          10
        )
        .call(function (err, res) {
          if (err) {
            console.log("An error occured", err);
            return;
          }
          getBalanceFive(res);
        });
    }
  }, [userToken]);

  useEffect(() => {
    const buyImage = JSON.parse(localStorage.getItem("buyImage"));
    const countNft = JSON.parse(localStorage.getItem("count"));
    if (buyImage) {
      useBuyImage(buyImage);
      getCount(countNft);
    }
  }, [showModal, count]);

  useEffect(() => {
    if (count === 0) {
      localStorage.removeItem("buyImage");
    }
  }, [count]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    getUserToken(token);
  }, []);

  console.log(" balance two  ", balanceOne);

  return (
    <div className="py-10">
      <div className="py-5">
        <h3 className="text-1xl xl:text-2xl font-normal text-white">
          Your Use NFTs
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* NFT 2 */}
        {balanceOne > 0 && (
          <div className="flex flex-col justify-center p-4 border-orange rounded-2xl border-1px">
            
            <div className="w-full flex justify-center">
      
              <Image
                src="/nfts/Fight_1.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
             
            </div>
            <div className="w-full flex flex-col justify-center text-center items-center">
              <div className="flex pt-0 xl:pt-5">
                <h5 className="text-xl font-semibold text-white">Morgan</h5>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base  font-normal text-orange-alft">2</div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base  font-normal text-orange-alft">
                    {balanceOne}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NFT 4 */}
        {balanceTwo > 0 && (
          <div className="flex flex-col justify-center p-4 border-orange rounded-2xl border-1px">
            <div className="w-full flex justify-center">
              <Image
                src="/nfts/Fight_2.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-center text-center items-center">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h5 className="text-xl font-semibold text-white">Cyberpunk</h5>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base font-normal text-orange-alft">4</div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base  font-normal text-orange-alft">
                    {balanceTwo}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NFT 6 */}
        {balanceThree > 0 && (
          <div className="flex flex-col justify-center p-4 border-orange rounded-2xl border-1px">
            <div className="w-full flex justify-center">
              <Image
                src="/nfts/Fight_3.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h5 className="text-xl font-semibold text-white">P.I.M.P</h5>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base  font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base  font-normal text-orange-alft">6</div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base  font-normal text-orange-alft">
                    {balanceThree}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NFT 8 */}
        {balanceFour > 0 && (
          <div className="flex flex-col justify-center p-4 border-orange rounded-2xl border-1px">
            <div className="w-full flex justify-center">
              <Image
                src="/nfts/Fight_4.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-center text-center items-center">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h5 className="text-xl  font-semibold text-white">ZOG</h5>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  8
                </div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base  font-normal text-orange-alft">
                    {balanceFour}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NFT 5 */}

        {balanceFive > 0 && (
          <div className="flex flex-col justify-center p-4 border-orange rounded-2xl border-1px">
            <div className="w-full flex justify-center">
              <Image
                src="/nfts/Fight_5.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-center text-center items-center">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h5 className="text-xl font-semibold text-white">
                  Master Dharma
                </h5>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base font-normal text-orange-alft">10</div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base  font-normal text-orange-alft">
                    {balanceFive}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UseNFTComponent;
