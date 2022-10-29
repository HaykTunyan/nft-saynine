import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
import Web3 from "web3";
import { vmContract } from "../../../web/Web3clinet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CONTACT_ADDRESS = "0x951bf41E354E05e278d504cf13Dae71302f94c0a";



function CheckNFT() {
    const [checkData, getcheckData] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(" data ", data);
        // onMint(data);
    };

    async function getHesh() {

        const web3 = new Web3('https://goerli.etherscan.io/tx/');
        const transactionHash = '0xd5efc06b165a427d628dca19a12d4133e474d4acc19e50585a23ce31f4b46ad5';

        try {
            const response = await web3.eth.getTransaction(transactionHash);
            console.log("response ", response)

        } catch (error) {
            console.log("error ", error)

        }
    }

    const getHeshData = () => {
        const web3 = new Web3('https://goerli.etherscan.io/tx');
        const transactionHash = '0xd5efc06b165a427d628dca19a12d4133e474d4acc19e50585a23ce31f4b46ad5';
        web3.eth.getPendingTransactions().then(console.log()).catch;
        const res = web3.eth.getTransaction('0xd5efc06b165a427d628dca19a12d4133e474d4acc19e50585a23ce31f4b46ad5')
            .then(console.log(res));
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="col-span-2 px-4 py-3 border-orange rounded-2xl border-1px flex flex-col"
            >
                <div className="w-full ">
                    <div className="flex ">
                        <h4 className="text-2xl lg:text-4xl font-semibold text-white">
                            Check NFT
                        </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                        <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                            Hesh Token:
                        </div>
                        <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                            <input
                                className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                defaultValue=""
                                placeholder="Hesh ..."
                                {...register("token")}
                            />
                        </div>
                    </div>

                </div>
                <div className="w-full flex justify-end pt-5">
                    <div className="pt-6 md:pt-0" />
                    <button
                        type="submit"

                        className="py-2 px-10  bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
                    >
                        Send
                    </button>
                </div>
            </form>
            {/* <button
                onClick={getHeshData}
                className="py-2 px-10  bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
            >
                Send
            </button> */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default CheckNFT;
