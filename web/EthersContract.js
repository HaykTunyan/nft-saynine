import { ethers } from "ethers";
import { ABI } from "./contracts";

const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();


export const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);