import Link from "next/link";
import Image from "next/image";
import BrandLogo from "../BrandLogo";
import Container from "../Container";
import { useRouter } from "next/router";
import DesktopMenu from "./Menu/Desktop";
import MobileMenu from "./Menu/Mobile";

const MENU_ITEMS = [
  { label: "About", path: "/" },
  { label: "Packages", path: "/" },
  { label: "My Account", path: "/account" },
];

function Header() {
  const { asPath } = useRouter();
  return (
    <header className="mt-10 ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <div className="md:flex hidden">
              <BrandLogo />
            </div>
            <div className="md:hidden flex">
              <Link href="/" className="">
                <Image
                  src="/saynine-logo-mobile.svg"
                  width={32}
                  height={32}
                  alt="SAYNINE-LOGO-MOBILE"
                  className="cursor-pointer flex-shrink-0"
                />
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="md:block hidden">
              <DesktopMenu items={MENU_ITEMS} asPath={asPath} />
            </div>
            <div className="md:hidden block ">
              <MobileMenu items={MENU_ITEMS} asPath={asPath} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
