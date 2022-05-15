import Image from "next/image";
import Link from "next/link";

function BrandLogo() {
  return (
    <Link href="/" className="">
      <Image
        src="/saynine-logo-desktop.svg"
        width={134}
        height={44}
        alt="SAYNIN-LOGO-DESKTOP"
        className="cursor-pointer flex-shrink-0"
      />
    </Link>
  );
}

export default BrandLogo;
