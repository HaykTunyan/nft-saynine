// Web3 clinet configuration.

import Web3 from "web3";
import { ABI, abiTest } from "./contracts";

const token = "0xA1bdf27AEdaDb00f9f48b8e0Bc3d90052934205E";

const provider = new Web3.providers.HttpProvider(
  "https://goerli.infura.io/v3/0fd6b9098dd249aa89fe4f7c734587eb"
);

export const web3 = new Web3(provider);

export const vmContract = new web3.eth.Contract(ABI, token);
