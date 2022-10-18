import React, { useState, useEffect } from "react";
import Image from "next/image";
import { vmContract } from "../../../web/Web3clinet";

function MorganChild({ userToken, successRes }) {
  const [balanceTwo, getBalanceTwo] = useState();
  const [ morgan, setMorgan ] = useState();

  // NFT 2
  useEffect(() => {
    if (userToken) {
      vmContract.methods
        .balanceOf(String(userToken), 2)
        .call(function (err, res) {
          if (err) {
            return;
          }
          getBalanceTwo(res);
        });
    }
  }, [userToken, successRes]);

  useEffect(() => {
    if(balanceTwo > 0) {
      const list = Array( Number(balanceTwo)).fill([1]);
      setMorgan(list)
    }
  }, [balanceTwo]);

  const listData = new Array(5).fill([1])

  return (
    <>
     {listData.map( (index) => (
      <div className="flex justify-center" key={index}>
        <Image
          src="/nfts/Fight_1.png"
          width={300}
          height={390}
          className={`w-full h-full object-cover `}
        />
      </div>
     ))}
      
    </>
  );
}

export default MorganChild;
