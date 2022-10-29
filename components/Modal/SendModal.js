import React, { Fragment, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SendModal({ setShowSendModal, showSendModal, tokenData }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            hash: tokenData?.hash,
            email: "",
            fullName: "",
        },
    });
    const onSubmit = (data) => {
        confirmationEmail(data)
    }


//    const value  = "";
//    Object.keys(Ob).map((el)=>{
//     str += ${el}: ${Ob[el]}
// })


  


    const confirmationEmail = (data) => {
        console.log(" confirmationEmail data ", data)
        setShowSendModal(false)
        toast.success(" Transfer NFT Morgan successfuly ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (

        <Fragment>
            {showSendModal && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">

                        <div class="relative bg-dark rounded-lg shadow dark:bg-gray-700">

                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                <h3 className="text-3xl font-semibold text-orange-alft">Confirm Your Event</h3>

                            </div>

                            <div class="py-6 px-6 lg:px-8">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-8"
                                >
                                    <div className="w-full">
                                        <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                                            <input
                                                type="text"
                                                className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                                disabled="true"
                                                defaultValue={tokenData?.hash}


                                                {...register("hash")}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                                            <input
                                                type="email"
                                                className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                                defaultValue=""
                                                placeholder="Your Email ..."
                                                {...register("email")}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full ">


                                        <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0">
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="shadow appearance-none border border-orange rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                                defaultValue=""
                                                placeholder="Your Full Name ..."
                                                {...register("fullName")}
                                            />
                                        </div>


                                    </div>


                                    <div className="flex items-center justify-between p-6 ">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowSendModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="submit"

                                            className="py-2 px-10  bg-green-alfa text-xl xl:text-2xl rounded-lg text-white font-normal"
                                        >
                                            Submit
                                        </button>

                                    </div>


                                </form>


                            </div>


                        </div>
                    </div>

                </div>
            )}

        </Fragment>


    )
};

export default SendModal;