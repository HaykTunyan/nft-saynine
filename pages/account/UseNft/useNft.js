import React, { useEffect, useState } from "react";
import Image from "next/image";
import { vmContract } from "../../../web/Web3clinet";
import MorganUsed from "./MorganUsed";

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

  return (
    <div className="py-10">
      <div className="py-5">
        <h3 className="text-1xl xl:text-2xl font-normal text-white">
          Your Use NFTs
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {balanceOne > 0 && (
          <MorganUsed
            balance={balanceOne}
            id={2}
            img={"/nfts/Fight_1.png"}
            name={"Morgan"}
          />
        )}

        {/* NFT 4 */}
        {balanceTwo > 0 && (
          <MorganUsed
            balance={balanceTwo}
            id={4}
            img={"/nfts/Fight_2.png"}
            name={"Cyberpunk"}
          />
        )}

        {/* NFT 6 */}
        {balanceThree > 0 && (
          <MorganUsed
            balance={balanceThree}
            id={6}
            img={"/nfts/Fight_3.png"}
            name={"P.I.M.P"}
          />
        )}

        {/* NFT 8 */}
        {balanceFour > 0 && (
          <MorganUsed
            balance={balanceFour}
            id={8}
            img={"/nfts/Fight_4.png"}
            name={"ZOG"}
          />
        )}

        {/* NFT 10 */}
        {balanceFive > 0 && (
          <MorganUsed
            balance={balanceFive}
            id={10}
            img={"/nfts/Fight_5.png"}
            name={"Master Dharma"}
          />
        )}
      </div>
    </div>
  );
}

export default UseNFTComponent;
