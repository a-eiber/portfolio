import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/assets/logo.png';

const Header = () => {
  return (
    <nav className="w-full h-28 z-[100] bg-[#f4f3ee]">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="my-4 md:mb-0">
          <Link href="/">
            <Image
              src={logo}
              alt="/"
              width="250"
              height="50"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center">
            <Link href="/#about">
              <li className="text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="sm:ml-6 md:ml-12 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <a
              href="/assets/Alec_Eiber_Resume1.pdf"
              target="_blank"
              rel="noreferrer">
              <li className="sm:ml-6 md:ml-12 text-sm uppercase hover:border-b">
                Resume
              </li>
            </a>
            <Link href="/#projects">
              <li className="sm:ml-6 md:ml-12 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="sm:ml-6 md:ml-12 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
