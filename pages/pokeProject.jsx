import Image from 'next/image';
import React, { useState } from 'react';
import pokeImage from '../public/assets/projects/poke-mart2.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Header from '../components/Header';

const PokeProject = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="w-full">
      <Header collapse={collapse} setCollapse={setCollapse} />
      <div
        className={
          collapse
            ? 'w-screen h-[30vh] relative'
            : 'w-screen h-[30vh] relative mt-60'
        }>
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pokeImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2  ml-5">Poké Mart E-Commerce Store</h2>
          <h3 className="ml-5 mb-2">
            An e-commerce website based on the in-game marts found in the
            Pokémon series
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 flex flex-col pt-8 px-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            An online e-commerce version of the store popularly found in Pokémon
            games. Guests can add items to their cart, edit cart items, and
            checkout, with cart items saved in local storage. Users who create
            an account can have their cart items persist in an SQL database.
          </p>
          <a
            href="https://poke-mart-fsa.herokuapp.com/"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 btn">Demo</button>
          </a>
          <a
            href="https://github.com/a-eiber/poke-mart"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 btn">Code</button>
          </a>
        </div>
        <div className="shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sequelize
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JSON Web Tokens
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer my-10">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default PokeProject;
