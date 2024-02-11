"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../app/images/logo.png";
const Header = () => {
  return (
    <>
      <div className="bg-[#3b8053] h-16 flex justify-between items-center px-10 text-white py-4 font-bold">
        <h3 className="">
          <Link href="/">
            <Image href="/" src={Logo} alt="sproutvestor logo" height={93} />
          </Link>
        </h3>
        <div className="flex  gap-10 ">
          <h4>Career</h4>
          <h4>Blog</h4>
          <h4>Account</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
