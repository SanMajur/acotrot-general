import React from "react";
import logoImg from "../../public/images/file.png";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-[73%] ">
      <Link href={"/"} className="flex items-center gap-4">
        <Image src={logoImg} alt="logo" width={70} height={40} />
        <h1 className="uppercase text-lg text-gray-700">
          Acotrot General Trading Co. LTD
        </h1>
      </Link>
    </div>
  );
}
