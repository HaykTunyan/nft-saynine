import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import FutureSeo from "../components/homeview/FutureSeo";
import Carousel from "../components/Carousel";
import NftCard from "../components/NftCard";
import Container from "../components/Container";
import { NFT } from "../web/contracts";
import { vmContract  } from "../web/Web3clinet";

function MY() {
  const [userToken, getUserToken] = useState();
  const [balanceOne, getBalanceOne] = useState();
  const [balanceTwo, getBalanceTwo] = useState();
  const [balanceThree, getBalanceThree] = useState();
  const [balanceFour, getBalanceFour] = useState();
  const [balanceFive, getBalanceFive] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    getUserToken(token);
  }, []);

  // Balance NFT

  // NFT 1
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

  // NFT 2
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
          getBalanceTwo(res)
        });
    }
  }, [userToken]);

  // NFT 3
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken), // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          3
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

  // NFT 4
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
            console.log("An error occured", err);
            return;
          }
          getBalanceFour(res);

        });
    }
  }, [userToken]);

  // NFT 5
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(
          String(userToken),
          // "0x5a4ef4ecd643049f5225844dd3b4ba34b1ba7b40"
          5
        )
        .call(function (err, res) {
          if (err) {
            console.log("An error occured", err);
            return;
          }
          getBalanceFive(res)
        });
    }
  }, [userToken]);


  // Balance Of 

  useEffect( () => {
    vmContract.methods.uri
    (1).call(function (error, response) {
      if (error) {
        console.log("An error occured", error)
        return
      }
      console.log("The balance is: ", response)
    })
  }, []);

  console.log(", balanceOne  ", 
  {
    balanceOne,
    balanceTwo,
    balanceThree,
    balanceFour,
    balanceFive
  }  
  )
  

  return (
    <Fragment>
      <Head>
        <title>Saynine</title>
        <meta
          name="description"
          content="Saynine is a dynamic SEO agency that helps clients boost rankings through backlinks."
        />
      </Head>
      <div className="overflow-hidden">
        <div className="pt-10 lg:pt-26" />
        <FutureSeo />
        <div className="pt-20 lg:pt-35" />
        <div className="md:px-5">
          <Carousel />
        </div>
        <div className="md:pt-20 lg:pt-64" />
        <Container className="pb-32">
          <div className="text-center pt-25">
            <h2 className="text-center text-white text-4xl lg:text-8xl">
              Start The link Inovation
            </h2>
          </div>
          <div className="pt-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:px-5">
            {NFT.map((item) => (
              <div className="flex justify-center my-8 md:my-0" key={item.key}>
                <NftCard
                  key={item.key}
                  nftId={item.nftId}
                  title={item.title}
                  img={item.img}
                  link={item.link}
                  price={item.price}
                  alt={item.alt}
                  count={item.count}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default MY;
