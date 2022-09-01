import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

//
const classes = {
  menu: "flex space-x-8 text-white items-center justify-between mt-4 lg:mt-0",
  menuItem: "hover:text-primary text-white text-base lg:text-3xl",
  menuItemActive: "text-white",
};

const Desktop = ({ items, asPath, isConnected }) => {

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const [userWalet, setUserWalet] = useState();

  const handleConect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res) => {
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
    const { ethereum } = window;

    if (!ethereum) {
      console.log(" Metamask installed !  ");
    } else {
      console.log(" Installed Metamask  ");
    }
  };

  useEffect(() => {
    connectWallets();
  }, []);

  useEffect(() => {
    localStorage.setItem("userWalet", JSON.stringify(userWalet));
  });

  return (
    <Fragment>
      <ul className={classes.menu}>
        {userWalet ? (
          <li className={classes.menuItem}>
            <Link className="text-white " href="/account">
              My Account
            </Link>
          </li>
        ) : (
          <li className={classes.menuItem}>
            <button
              className="text-white px-3 py-1 pb-1"
              onClick={() => handleConect()}
            >
              Login
            </button>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default Desktop;
