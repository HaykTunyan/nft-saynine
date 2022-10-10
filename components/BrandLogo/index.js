import Image from "next/image";
import Link from "next/link";

function BrandLogo() {
  return (
    <a href="/" className="">
      <Image
        src="/images/saynine_logo_larg.svg"
        width={132}
        height={44}
        alt="SAYNIN-LOGO-LARG"
        className="cursor-pointer flex-shrink-0"
      />
    </a>
  );
}

export default BrandLogo;
