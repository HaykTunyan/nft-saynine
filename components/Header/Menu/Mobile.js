import { useState, useEffect, Fragment } from "react";
import classNames from "classnames";
import Link from "next/link";
import MenuIcon from "../../Icons/menu";
import CloseIcon from "../../Icons/close";

const classes = {
  menu: "grid gap-y-2",
  menuItem: "hover:text-primary text-3xl text-center",
  menuItemActive: "text-primary",
  button: "flex",
  icon: "w-6 fill-current text-primary transition-all",
  overlay:
    "fixed h-screen w-screen inset-0 bg-white z-40 pt-30 flip-horizontal-top scale-up-ver-center",
};

const MenuOverlay = ({ items, asPath }) => (
  <div className={classes.overlay}>
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
            <Link href={item.path}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  </div>
);

const Mobile = ({ items, asPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [asPath]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <Fragment>
      <button onClick={toggle} className="flex relative z-50">
        {isOpen ? (
          <CloseIcon className={classes.icon} />
        ) : (
          <MenuIcon className={classes.icon} />
        )}
      </button>
      {isOpen ? <MenuOverlay items={items} asPath={asPath} /> : null}
    </Fragment>
  );
};

export default Mobile;
