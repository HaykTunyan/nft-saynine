import Link from "next/link";
import Image from "next/image";
import BrandLogo from "../BrandLogo";
import Container from "../Container";
import { useRouter } from "next/router";
import DesktopMenu from "./Menu/Desktop";

const MENU_ITEMS = [
  { label: "About", path: "/" },
  { label: "Packages", path: "/" },
];

function Header() {
  const { asPath } = useRouter();
  return (
    <header className="mt-10 xl:px-5">
      <Container>
        <div className="flex justify-center flex-col items-center lg:flex-row lg:justify-between">
          <div className="">
            <div className="md:flex hidden">
              <BrandLogo />
            </div>
            <div className="md:hidden flex">
              <Link href="/" className="">
                <Image
                  src="/images/saynine_logo_small.svg"
                  width={132}
                  height={44}
                  alt="SAYNINE-LOGO-SMALL"
                  className="cursor-pointer flex-shrink-0"
                />
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <DesktopMenu items={MENU_ITEMS} asPath={asPath} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
