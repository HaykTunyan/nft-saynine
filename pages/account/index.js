import Container from "../../components/Container";
import Image from "next/image";
import ProfressLine from "../../components/ProgressLine";
import { useEffect, useState } from "react";
import { NFT, NFTread } from "../../web/contracts";
import axios from "axios";
import TransferNft from "./TransferNft";
import UseToken from "./UseToken";
import GetMegaNFT from "./GetMegaNft";
import MinNFT from "./MintNft";
import UseNFT from "../../components/Modal/UseNft";
import { vmContract } from "../../web/Web3clinet";
import UseNFTComponent from "./UseNft/useNft";

function Account() {
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
          1
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
          3
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
          5
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
          7
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
          9
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

  // async function getBalanceOfAll() {
  //   const res = vmContract.methods
  //     .balanceOfBatch(
  //       [userToken, userToken, userToken, userToken, userToken],
  //       [1, 2, 3, 4, 5]
  //     ).call((err, res) => {
  //       console.log("log res", [err, res]);
  //       if (err) {
  //         getErrorMessage(err);
  //         return;
  //       }
  //       getBalanceOf(res);
  //     });
  // }

  // useEffect(() => {
  //   getBalanceOfAll();
  // }, []);

  return (
    <Container className="lg:px-4">
      <div className="pt-20">
        <h1 className="text-4xl xl:text-8xl font-normal text-white">
          My Account
        </h1>
        <div className="pt-6" />
      </div>
      <div className="pt-10 xl:pt-20" />
      {/* Buy NFT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-10">
        {/* NFT 1 */}
        {balanceOne > 0 && (
          <div className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex">
            <div className="w-4/12">
              <Image
                src="/images/NFT-1.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8/12 pl-4">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h4 className="text-2xl lg:text-4xl font-semibold text-white">
                  Morgan
                </h4>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Links:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  30-50 DR
                </div>
              </div>

              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  1
                </div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  {balanceOne}
                </div>
              </div>
              <div className="pt-6 xl:pt-8" />
            </div>
          </div>
        )}

        {/* NFT 2 */}
        {balanceTwo > 0 && (
          <div className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex">
            <div className="w-4/12">
              <Image
                src="/images/NFT-2.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8/12 pl-4">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h4 className="text-2xl lg:text-4xl font-semibold text-white">
                  Cyberpunk
                </h4>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Links:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  51-60 DR
                </div>
              </div>

              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  2
                </div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  {balanceTwo}
                </div>
              </div>
              <div className="pt-6 xl:pt-8" />
            </div>
          </div>
        )}

        {/* NFT 3 */}
        {balanceThree > 0 && (
          <div className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex">
            <div className="w-4/12">
              <Image
                src="/images/NFT-3.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8/12 pl-4">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h4 className="text-2xl lg:text-4xl font-semibold text-white">
                  P.I.M.P
                </h4>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Links:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  61-70 DR
                </div>
              </div>

              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  3
                </div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  {balanceThree}
                </div>
              </div>
              <div className="pt-6 xl:pt-8" />
            </div>
          </div>
        )}

        {/* NFT 4 */}
        {balanceFour > 0 && (
          <div className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex">
            <div className="w-4/12">
              <Image
                src="/images/NFT-4.png"
                width={143}
                height={186}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8/12 pl-4">
              <div className="flex justify-between pt-0 xl:pt-5">
                <h4 className="text-2xl lg:text-4xl font-semibold text-white">
                  ZOG
                </h4>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Links:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  71-80 DR
                </div>
              </div>

              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Nft Id:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  4
                </div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  {balanceFour}
                </div>
              </div>
              <div className="pt-6 xl:pt-8" />
            </div>
          </div>
        )}

        {/* NFT 5 */}

        {balanceFive > 0 && (
          <div className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex">
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
                  5
                </div>
              </div>
              <div className="flex space-x-1 pt-2">
                <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                  Count:
                </div>
                <div className="text-base xl:text-2xl font-normal text-orange-alft">
                  {balanceFive}
                </div>
              </div>
              <div className="pt-6 xl:pt-8" />
            </div>
          </div>
        )}
      </div>
      <div className="pt-10" />
      <div className=" border-1px border-orange " />
      <UseNFTComponent />
      <div className=" border-1px border-orange " />
      <div className="pt-10" />
      <div className="pt-10 xl:pt-20" />
      <TransferNft
        userToken={userToken}
        receiverAddress={receiverAddress}
        buyImage={buyImage}
      />
      <div className="pt-20 xl:pt-20" />
      <MinNFT userToken={userToken} receiverAddress={receiverAddress} />
      <div className="pt-20" />
      <div className=" border-1px border-orange " />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <div className="pt-10 xl:pt-20" />
          <GetMegaNFT
            userToken={userToken}
            receiverAddress={receiverAddress}
            buyImage={buyImage}
          />
        </div>
        <div className="">
          <div className="pt-10 xl:pt-20" />
          <UseToken userToken={userToken} receiverAddress={receiverAddress} />
        </div>
      </div>
      <div className="pt-20 xl:pt-64" />
      <h2 className="text-4xl xl:text-8xl font-normal text-white">Collected</h2>
      <div className="pt-5">
        <p className="text-base xl:text-4xl text-white">
        Check out the NFTs you've used and collect more.
        </p>
      </div>
      <div className="pt-10" />
      <div className="flex justify-between">
        <div className="">
          <Image
            src="/nfts/Fight_1.png"
            width={70}
            height={100}
            className={`w-17.5 h-25 object-cover grayscale `}
          />
        </div>
        <div className="w-17.5 h-25">
          <Image
            src="/images/NFT-1.png"
            width={70}
            height={100}
            className={`w-17.5 h-25 object-cover`}
          />
        </div>
      </div>
      <div className=" pt-10" />
      <ProfressLine />
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {NFTread.map((item) => (
            <div className="flex justify-center" key={item.key}>
              <Image
                src={item.img}
                width={300}
                height={390}
                className={`w-full h-full object-cover ${item.active} `}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pb-52" />
      {showModal && (
        <UseNFT
          setShowModal={setShowModal}
          usedNft={usedNft}
          userToken={userToken}
        />
      )}
    </Container>
  );
}

export default Account;
