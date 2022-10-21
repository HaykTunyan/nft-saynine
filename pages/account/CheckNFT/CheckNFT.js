import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { ABI } from "../../../web/contracts";
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

    async function onMint(data) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTACT_ADDRESS, ABI, signer);
        try {
            const response = await contract.mint(data.account, data.id, data.amount);
            getcheckData(response);
            toast.success(" Success Check NFT ", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            setErrorMessage(error);
        }
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
