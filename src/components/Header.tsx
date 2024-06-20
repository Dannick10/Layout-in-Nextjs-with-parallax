import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaRegUserCircle } from "react-icons/fa";

interface Props {
    offsetY: number
};

const Header = ({offsetY}: Props) => {
  return (
    <header className="flex justify-between p-8 text-white absolute top-0 left-0 w-full" style={{transform: `translateY(${-offsetY * 0.2}px)`}}>
      <div>
        <p>MNTN</p>
      </div>
      <div>
        <ul className="flex gap-4">
        <Link href="/" className="hover:text-yellow-300">Equipament</Link>
        <Link href="/" className="hover:text-yellow-300">About us</Link>
        <Link href="/" className="hover:text-yellow-300">Blog</Link>
        
        </ul>
      </div>

      <div className="flex gap-2 items-center">
        <FaRegUserCircle className="text-lg" />
        <p>Account</p>
      </div>
    </header>
  );
};

export default Header;
