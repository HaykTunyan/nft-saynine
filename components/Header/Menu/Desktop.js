import Link from "next/link";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const classes = {
  menu: "flex space-x-8 text-white items-center justify-between mt-4 md:mt-0",
  menuItem: "hover:text-primary text-white text-base md:text-3xl",
  menuItemActive: "text-white",
};

const Desktop = ({ items, asPath, isConnected }) => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [user, getUser] = useState(null);

  const connectWollett = () => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setUserBalance(balance);
      });
  };

  useEffect(() => {
    if (defaultAccount) {
      localStorage.setItem("userToken", JSON.stringify(defaultAccount));
    }
  }, [defaultAccount]);

  useEffect(() => {
    if (userBalance) {
      localStorage.setItem("userBalance", JSON.stringify(userBalance));
    }
  }, [userBalance]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userToken"));
    getUser(user);
  }, []);

  return (
    <Fragment>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <button
            className="text-white px-3 py-1 pb-1"
            onClick={connectWollett}
          >
            Contect Wollet
          </button>
        </li>

        {user !== "null" && (
          <li className={classes.menuItem}>
            <Link className="text-white " href="/account">
              My Account
            </Link>
          </li>
        )}
      </ul>
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
      {/* Same as */}
      <ToastContainer />
    </Fragment>
  );
};

export default Desktop;
