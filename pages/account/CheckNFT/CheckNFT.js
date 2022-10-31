import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import moment from 'moment';


function CheckNFT({ userToken }) {
    const [post, setPost] = useState(null);
    const [error, setError] = useState();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(" data ", data);
        getHeshData(data);
    };

    // async function getHesh() {

    //     // 
    //     //         https://api.etherscan.io/api
    //     //    ?module=account
    //     //    &action=txlistinternal
    //     //    &txhash=0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170
    //     //    &apikey=YourApiKeyToken

    //     const web3 = new Web3('https://goerli.etherscan.io/tx/');
    //     const transactionHash = '0xd5efc06b165a427d628dca19a12d4133e474d4acc19e50585a23ce31f4b46ad5';

    //     try {
    //         const response = await web3.eth.getTransaction(transactionHash);
    //         console.log("response ", response)

    //     } catch (error) {
    //         console.log("error ", error)

    //     }
    // }

    function getHeshData(data) {
        axios.request(
            {
                method: 'GET',
                url: `https://deep-index.moralis.io/api/v2/transaction/${data.hash}`,

                params: {
                    chain: 'goerli',
                },
                headers: { accept: 'application/json', 'X-API-Key': 'test' }
            }
        )
            .then(function (response) {
                // console.log(response.data);
                setPost(response.data);
            })
            .catch(function (error) {
                // console.error(error);
                setError(error)
            });
    }


    // useEffect(() => {

    //     axios.request(
    //         {
    //             method: 'GET',

    //             url: 'https://deep-index.moralis.io/api/v2/transaction/0xd5efc06b165a427d628dca19a12d4133e474d4acc19e50585a23ce31f4b46ad5',
    //             params: {
    //                 chain: 'goerli',
    //             },
    //             headers: { accept: 'application/json', 'X-API-Key': 'test' }
    //         }
    //     )
    //         .then(function (response) {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });

    // }, []);


    console.log(" post data ", post)

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
                                {...register("hash")}
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
                {post && (
                    <div className="w-full mt-10">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex space-x-2">
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa ">
                                    From :
                                </div>
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                                    {post?.from_address}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                                    Data :
                                </div>
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                                    {moment(post?.block_timestamp).format('DD/MM/YYYY hh:mm')}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                                    Amount :
                                </div>
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                                    {(post?.input).slice(-1)}
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </form>
        </div>
    );
}

export default CheckNFT;
