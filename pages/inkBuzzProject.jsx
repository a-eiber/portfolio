import Image from "next/image";
import React, { useState } from "react";
import inkImage from "../public/assets/projects/inkBuzz.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Header from "../components/Header";

const InkBuzzProject = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="w-full">
      <Header collapse={collapse} setCollapse={setCollapse} />
      <div
        className={
          collapse
            ? "w-screen h-[30vh] relative"
            : "w-screen h-[30vh] relative mt-64"
        }
      >
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={inkImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[48em] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2  ml-5">Ink Buzz Social Media Platform</h2>
          <h3 className="ml-5 mb-2">
            A social media platform where users can connect with tattoo artists
          </h3>
        </div>
      </div>

      <div className="max-w-[42em] mx-auto px-8 p-2 flex flex-col pt-8 dark:text-white">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="my-3">
            I managed a team of three developers in creating, designing, and
            deploying a social media web application where users connect with
            tattoo artists. This was a group project built in less than three
            weeks and is intended to showcase a minimum viable product for a
            social media app with a built-in crypto payment feature.
          </p>

          <p>
            The site is as a Progressive Web Application (PWA) so it would be
            available on all platforms without any extra fees or restrictions.
            Using React, Redux Toolkit, and the Chakra component library, the
            front end is completely responsive for all screen sizes. On the back
            end, the app uses Firebase for authentication, storage, and hosting.
          </p>

          <p className="my-3">
            Users can view and search for different tattoos, favorite designs,
            follow specific artists, and within the chat feature, message and
            pay artists using crypto currencies like ethereum. Transactions are
            stored on the blockchain to verify payments and the transfer of
            specific designs.
          </p>

          <a href="https://ink-buzz.web.app/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 btn dark:shadow-none">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/FSA-CapStone-TeamAwesome/ink-buzz-pwa"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 btn dark:shadow-none">
              Code
            </button>
          </a>
        </div>
        <div className="shadow-xl shadow-gray-400 rounded-xl p-4 mt-5 dark:shadow-none">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Coinbase Wallet
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Ether.js
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Infura
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Web3.js
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Wallet Connect
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Google Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Chakra UI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer my-10 dark:text-white">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default InkBuzzProject;
