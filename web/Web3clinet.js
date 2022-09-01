// Web3 clinet configuration.

import Web3 from "web3";
import { ABI, abiTest } from "./contracts";

const provider = new Web3.providers.HttpProvider(
  "https://kovan.infura.io/v3/0fd6b9098dd249aa89fe4f7c734587eb"
);

export const web3 = new Web3(provider);

const signer = web3.getSigner();

const tokenContract = "0xF583f81c36aB13d12038E73FD3065B8eA423304c";

export const vmContract = new web3.eth.Contract(abiTest, tokenContract);
