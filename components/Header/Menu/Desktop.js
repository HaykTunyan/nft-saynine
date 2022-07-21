import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ethers, providers } from "ethers";
import Web3 from "web3";
import vmContract from "../../../web/Web3clinet";

//
const classes = {
  menu: "flex space-x-8 text-white items-center justify-between mt-4 lg:mt-0",
  menuItem: "hover:text-primary text-white text-base lg:text-3xl",
  menuItemActive: "text-white",
};

const Desktop = ({ items, asPath }) => {
  
  let web3;
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const [ userWalet, setUserWalet ] = useState();


  const handleConect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res) => {
            console.log("  res request Accounts", res);
            // accountChangeHandler(res[0]);
            setUserWalet(res[0]);
            setdata({ address: res[0] });
          });
      } catch (error) {
        console.log(" error ", error.messages);
      }
    } else {
      console.log("install metamask extension!!");
    }
  };

  const connectWallets = () => {
    const {ethereum} = window;

    if(!ethereum) {
      console.log(" Metamask installed !  ")
    } else {
      console.log(" Installed Metamask  ")
    }
  }

  useEffect( () => {
    connectWallets()
  }, [] )

  return (
    <>
      <ul className={classes.menu}>
        {items.map((item) => {
          const isActive = asPath === item.path;
          return (
            <li
              key={item.path}
              className={classNames(classes.menuItem, {
                [classes.menuItemActive]: isActive,
              })}
            >
              <Link className="text-white " href={item.path}>
                {item.label}
              </Link>
            </li>
          );
        })}
        <li className={classes.menuItem}>
          <button
            className="text-white px-3 py-1 pb-1"
            onClick={() => handleConect()}
          >
            Login
          </button>
        </li>
      </ul>
    </>
  );
};

export default Desktop;
