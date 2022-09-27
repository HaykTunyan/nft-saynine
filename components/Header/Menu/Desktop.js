import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { ethers } from "ethers";

const classes = {
  menu: "flex space-x-8 text-white items-center justify-between mt-4 md:mt-0",
  menuItem: "hover:text-primary text-white text-base md:text-3xl",
  menuItemActive: "text-white",
};

const Desktop = ({ items, asPath, isConnected }) => {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const loginBtn = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };

  return (
    <Fragment>
      <ul className={classes.menu}>
        {data ? (
          <li className={classes.menuItem}>
            <Link className="text-white " href="/account">
              My Account
            </Link>
          </li>
        ) : (
          <li className={classes.menuItem}>
            <button className="text-white px-3 py-1 pb-1" onClick={btnhandler}>
              Login
            </button>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default Desktop;
