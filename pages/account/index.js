import { Fragment } from "react/cjs/react.production.min";
import BuyCard from "../../components/BuyCard";
import Container from "../../components/Container";
import Image from "next/image";
import ProfressLine from "../../components/ProgressLine";
import { useEffect, useState } from "react";
import web3 from "web3";
import { provider } from "../../api/httpclinet";

const card = [
  {
    key: 1,
    img: "/images/NFT-sm-200.png",
    title: "Bulgartel",
    number: "12",
    link: "1000",
  },
  {
    key: 2,
    img: "/images/NFT-sm-200.png",
    title: "Bulgartel",
    link: "1000",
  },
  {
    key: 3,
    img: "/images/NFT-sm-200.png",
    title: "Bulgartel",
    link: "1000",
  },
  {
    key: 4,
    img: "/images/NFT-sm-200.png",
    active: "grayscale",
    title: "Bulgartel",
    link: "1000",
  },
  {
    key: 5,
    img: "/images/NFT-sm-200.png",
    active: "grayscale",
    title: "Bulgartel",
    link: "1000",
  },
];

function Account() {
  const [userWalet, setUserWalet] = useState();
  const [balanceOf, setBalanceOf] = useState(0);
  console.log(" userWalet ", userWalet);

  const logBalance = async () => {
    let balance = await web3.eth?.getBalance(userWalet);
    console.log(balance);
  };

  useEffect(() => {
    const userWalet = localStorage.getItem("userWalet");
    if (userWalet) {
      setUserWalet(userWalet);
    }
  }, []);

  useEffect(() => {
    logBalance();
  });

  return (
    <>
      <Container>
        <div className="pt-20">
          <h1 className="text-4xl xl:text-8xl font-normal text-white">
            My Account
          </h1>
          <div className="pt-6" />
        </div>
        <div className="pt-10 xl:pt-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {card.map((item) => (
            <Fragment key={item.key}>
              <BuyCard
                title={item.title}
                img={item.img}
                number={item.number}
                link={item.link}
              />
            </Fragment>
          ))}
        </div>
        <div className="pt-20 xl:pt-64" />
        <h2 className="text-4xl xl:text-8xl font-normal text-white">
          Collected
        </h2>
        <div className="">
          <p className="text-base xl:text-4xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus
            laoreet adipiscing tortor. Faucibus sed mattis laoreet tempor enim
            sed posuere neque.
          </p>
        </div>
        <div className="pt-10" />
        <div className="flex justify-between">
          <div className="w-17.5 h-25">
            <Image
              src="/images/NFT-sm-200.png"
              width={70}
              height={100}
              className={`w-17.5 h-25 object-cover grayscale `}
            />
          </div>

          <div className="w-17.5 h-25">
            <Image
              src="/images/NFT-sm-200.png"
              width={70}
              height={100}
              className={`w-17.5 h-25 object-cover   `}
            />
          </div>
        </div>
        <div className=" pt-10" />
        <ProfressLine />
        <div className="pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {card.map((item) => (
              <div className="flex justify-center" key={item.key}>
                <Image
                  src={item.img}
                  width={300}
                  height={390}
                  className={`w-full h-full object-cover ${item.active} `}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="pb-52" />
      </Container>
    </>
  );
}

export default Account;
