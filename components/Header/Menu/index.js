import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import DesktopMenu from "./Desktop";
import MobileMenu from "./Mobile";

const MENU_ITEMS = [
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
  // { label: "Blog", path: "/blog" },
];

const Menu = () => {
  const { asPath } = useRouter();
  return (
    <Fragment>
      <div className="md:block hidden">
        <DesktopMenu items={MENU_ITEMS} asPath={asPath} />
      </div>
      <div className="md:hidden block">
        <MobileMenu items={MENU_ITEMS} asPath={asPath} />
      </div>
    </Fragment>
  );
};

export default Menu;
