import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import moment from 'moment';
import InputDataDecoder from "ethereum-input-data-decoder";
import { ABI } from "../../../web/contracts";
import "react-toastify/dist/ReactToastify.css";

function CheckNFT({ userToken }) {
    const [post, setPost] = useState(null);
    const [error, setError] = useState();
    const [heshNft, setHeshNft] = useState();
    const [nftName, setNftName] = useState(heshNft?.inputs[0]?._hex);
    const web3ApiKey = '0FS78tpVOMuM8ozhpMsUk9h2fKQFfw71iPGMTbDTrSW25kpoqq0RuY4LkLebKULT';

    const nft = heshNft?.inputs[0]?._hex

    const decoder = new InputDataDecoder(ABI);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(" data ", data);
        getHeshData(data); const result = decoder.decodeData(data);

        console.log(result);

    };


    function getHeshData(data) {
        axios.request(
            {
                method: 'GET',
                url: `https://deep-index.moralis.io/api/v2/transaction/${data.hash}`,
                params: { chain: 'goerli' },
                headers: { accept: 'application/json', 'X-API-Key': '0FS78tpVOMuM8ozhpMsUk9h2fKQFfw71iPGMTbDTrSW25kpoqq0RuY4LkLebKULT' }
            }
        )
            .then(function (response) {
                // console.log(response.data);
                setPost(response.data);
            })
            .catch(function (error) {
                // console.error(error);
                setError(error?.response)
            });
    }


    useEffect(() => {

        const result = decoder.decodeData(post?.input);


        setHeshNft(result)

        setNftName(heshNft?.inputs[0])

    }, [post])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 pt-5">
                        <div className="text-base xl:text-2xl font-bold text-orange-alft ">
                            Hesh Token:
                        </div>
                        <div className="text-base xl:text-2xl font-normal text-orange-alft mt-2 md:mt-0 col-span-2">
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
                            <div className="flex space-x-2">
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                                    NFT :
                                </div>
                                <div className="text-sm lg:text-base font-bold text-yellow-alfa">

                                    {nft === "0x01" && (
                                        <span> Morgan</span>
                                    )}

                                    {nft === "0x03" && (
                                        <span> Cyberpunk</span>
                                    )}

                                    {nft === "0x05" && (
                                        <span> P.I.M.P</span>
                                    )}

                                    {nft === "0x07" && (
                                        <span> ZOG</span>
                                    )}
                                    {nft === "0x09" && (
                                        <span> Master Dharma</span>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                )}
                {error?.data && (
                    <div className="flex space-x-2">
                        <div className="text-sm lg:text-base font-bold text-red-600">
                            Error :
                        </div>
                        <div className="text-sm lg:text-base font-bold text-red-600">
                            {error?.data?.message}
                        </div>
                    </div>
                )}

            </form>
        </div>
    );
}

export default CheckNFT;
