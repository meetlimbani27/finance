import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="ml-2.5 text-2xl font-semibold text-white">Finance</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
