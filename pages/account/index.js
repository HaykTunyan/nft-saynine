import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../../components/Container";
import MinNFT from "./MintNft";
import { vmContract } from "../../web/Web3clinet";
import MorganNFT from "./UserNFT/MorganNFT";
import Cyberpunk from "./UserNFT/Cyberpunk";
import PimpNFT from "./UserNFT/PimpNFT";
import ZogNFT from "./UserNFT/ZogNFT";
import DharmaNFT from "./UserNFT/DharmaNFT";
import MorganChild from "./Colections/MorganChild";
import CyberpunkChild from "./Colections/CyberpunkChild";
import PimpChild from "./Colections/PimpChild";
import ZogChild from "./Colections/ZogChild";
import DharmaChild from "./Colections/DharmaChild";
import CheckNFT from "./CheckNFT/CheckNFT";

function Account() {
  // Hooks.
  const [userToken, getUserToken] = useState();
  const receiverAddress = "0x92d96c53D4e89F0BA9fcb20444358A639d1492D5";
  const [balanceOne, getBalanceOne] = useState();
  const [balanceTwo, getBalanceTwo] = useState();
  const [balanceThree, getBalanceThree] = useState();
  const [balanceFour, getBalanceFour] = useState();
  const [balanceFive, getBalanceFive] = useState();
  const [successRes, setSuccessRes] = useState(false);
  const [errorMessagess, setErrorMessages] = useState();

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
            setErrorMessages(err);
            return;
          }
          getBalanceOne(res);
        });
    }
  }, [userToken, successRes]);

  // NFT 3  id = 3  => 4
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
            setErrorMessages(err);
            return;
          }
          getBalanceTwo(res);
        });
    }
  }, [userToken, successRes]);

  // NFT 5  id = 5 => 6
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken), // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          5
        )
        .call(function (err, res) {
          if (err) {
            setErrorMessages(err);
            return;
          }
          getBalanceThree(res);
        });
    }
  }, [userToken, successRes]);

  // NFT 7  id = 7 => 8
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
            setErrorMessages(err);
            return;
          }
          getBalanceFour(res);
        });
    }
  }, [userToken, successRes]);

  // NFT 9 id = 9 = 10
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
            setErrorMessages(err);
            return;
          }
          getBalanceFive(res);
        });
    }
  }, [userToken, successRes]);

  // useEffect( () => {
  //   if (userToken) {
  //     vmContract.methods
  //       .balanceOf(
  //         String(userToken),
  //         2
  //       )
  //       .call(function (err, res) {
  //         if (err) {
  //           setErrorMessages(err);
  //           return;
  //         }
  //         setUseMorgan(res);
  //       });
  //   }
  // }, [userToken, successRes] )

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessRes(!successRes)
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    getUserToken(token);
  }, []);

  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .owner()
        .call(function (err, res) {
          if (err) {
            console.log(err)
            return;
          }
          console.log("ressposnse  ", res)
        });
    }
  }, [])

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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* NFT 1 */}
        {balanceOne > 0 && (
          <MorganNFT
            balance={balanceOne}
            userToken={userToken}
            nftId={1}
            setSuccessRes={setSuccessRes}
          />
        )}

        {/* NFT 3 */}
        {balanceTwo > 0 && (
          <Cyberpunk
            balance={balanceTwo}
            userToken={userToken}
            nftId={3}
            setSuccessRes={setSuccessRes}
          />
        )}

        {/* NFT 5 */}
        {balanceThree > 0 && (
          <PimpNFT
            balance={balanceThree}
            userToken={userToken}
            nftId={5}
            setSuccessRes={setSuccessRes}
          />
        )}

        {/* NFT 7 */}
        {balanceFour > 0 && (
          <ZogNFT
            balance={balanceFour}
            userToken={userToken}
            nftId={7}
            setSuccessRes={setSuccessRes}
          />
        )}

        {/* NFT 9 */}
        {balanceFive > 0 && (
          <DharmaNFT
            balance={balanceFive}
            userToken={userToken}
            nftId={9}
            setSuccessRes={setSuccessRes}
          />
        )}
      </div>
      <div className="pt-10" />

      {userToken === "0xcc6330fbb00026E6F9eBbbA2F98E242c16EfE428" && (
        <>
          <div className=" border-1px border-orange " />
          <div className="pt-20 xl:pt-20" />
          <MinNFT />
        </>

      )}

      <div className="pt-20" />

      {userToken === "0xcc6330fbb00026E6F9eBbbA2F98E242c16EfE428" && (
        <>
          <div className=" border-1px border-orange " />
          <div className="pt-20" />
          <CheckNFT userToken={userToken} />
        </>

      )}
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
    
      <div className="pt-20">
        <MorganChild userToken={userToken} successRes={successRes} />
      </div>
      <div className="pt-10">
        <CyberpunkChild userToken={userToken} successRes={successRes} />
      </div>
      <div className="pt-10">
        <PimpChild userToken={userToken} successRes={successRes} />
      </div>
      <div className="pt-10">
        <ZogChild userToken={userToken} successRes={successRes} />
      </div>
      <div className="pt-10">
        <DharmaChild userToken={userToken} successRes={successRes} />
      </div>
      <div className="pb-52" />
    </Container>
  );
}

export default Account;
