import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/assets/logo.png';

const Header = () => {
  return (
    <div className="w-full h-28 z-[100] bg-[#f4f3ee]">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="my-4 md:mb-0">
          <Link href="/">
            <a>
              <Image src={logo} alt="/" width="250" height="50" />
            </a>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row flex-wrap justify-center">
            <Link href="/#about">
              <li className="text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-6 md:ml-12 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-6 md:ml-12 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-6 md:ml-12 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
