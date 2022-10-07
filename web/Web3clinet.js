// Web3 clinet configuration.

import Web3 from "web3";
import { ABI, abiTest } from "./contracts";

const token = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

const provider = new Web3.providers.HttpProvider(
  "https://goerli.infura.io/v3/0fd6b9098dd249aa89fe4f7c734587eb"
);

export const web3 = new Web3(provider);

const signer = provider.getSigner;
export const vmContract = new web3.eth.Contract(ABI, token, signer);

