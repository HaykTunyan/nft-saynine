import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { ethers } from "ethers";

// 


const classes = {
  menu: "flex space-x-8 text-white items-center",
  menuItem: "hover:text-primary text-white text-3xl",
  menuItemActive: "text-white",
};

const Desktop = ({ items, asPath }) => {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  // console.log(" data ", data);

 

  console.log(" address ", data.address);
  // console.log(" balance ", data.Balance);



  const handleConect = () => {
    if (window.ethereum) {
      window.ethereum.request({ 
        method: "eth_requestAccounts",    
      }).then((res) => {
       console.log("  res", res);
        // accountChangeHandler(res[0]);



        setdata({ address: res[0] })
      });
    } else {
      console.log("install metamask extension!!");
    }
  };

  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
    getbalance(account);
  };

  const getbalance = (address) => {
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

  

  return (
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
            <Link className="text-white" href={item.path}>
              {item.label}
            </Link>
          </li>
        );
      })}
      <li className={classes.menuItem}>
        <button className="text-white px-3 py-1 " onClick={() =>handleConect()}>
          Login
        </button>
        <div className="pb-1" />
      </li>
    </ul>
  );
};

export default Desktop;
