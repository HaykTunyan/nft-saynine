import Link from "next/link";
import BrandLogo from "../BrandLogo";
import FacebookIcon from "../../components/Icons/facebook";
import LinkedinIcon from "../../components/Icons/linkedin";
import Twitter from "../../components/Icons/twitter";
import Container from "../Container";

const MENU_ITEMS = [
  { label: "About Us", path: "/" },
  { label: "Packages", path: "/" },
  { label: "My Account", path: "/account" },
];

const SOCIAL_LINKS = [
  { Icon: Twitter, path: "https://www.linkedin.com/company/saynine/" },
  { Icon: FacebookIcon, path: "https://www.facebook.com/sayninewithninty/" },
  { Icon: LinkedinIcon, path: "https://www.linkedin.com/company/saynine/" },
 
];

function Footer() {
  return (
    <footer className="pt-8 py-8">
      <Container className="grid grid-cols-3 gap-2 items-center">
        <div className="w-72 text-xs">
          <BrandLogo />
        </div>
        <div classNames="w-full">
          <ul className="flex space-x-5 items-center">
            {MENU_ITEMS.map((item) => (
              <li key={item.path} className="text-center text-3xl text-white">
                <Link className="w-full" href={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <ul className="flex space-x-5">
            {SOCIAL_LINKS.map(({ Icon, path }) => (
              <li key={path} className="text-xs">
                <a href={path} target="_blank">
                  <Icon className="fill-current text-white w-6 h-6 md:w-9 md:h-9" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
