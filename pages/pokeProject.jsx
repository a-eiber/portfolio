import Image from "next/image";
import React, { useState } from "react";
import pokeImage from "../public/assets/projects/poke-mart2.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Header from "../components/Header";

const PokeProject = () => {
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
          src={pokeImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[48em] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2  ml-5">Poké Mart E-Commerce Store</h2>
          <h3 className="ml-5 mb-2">
            An e-commerce website based on the in-game marts found in the
            Pokémon series
          </h3>
        </div>
      </div>

      <div className="max-w-[42em] mx-auto p-2 flex flex-col pt-8 px-8">
        <div className="col-span-4 dark:text-white">
          <h2>Overview</h2>
          <p className="my-3">
            Along with three other software developers, we created an online
            e-commerce version of the Poké-Mart store popularly found in Pokémon
            games. I personally focused creating the APIs, developing the cart
            functionality and it&apos;s persistence on the database, as well as
            user authentication and storing guest&apos;s carts in local storage.
          </p>
          <p>
            We built the app in about a week and it&apos;s intended to be a
            minimum viable product for a e-commerce website. The site uses
            React, Redux Toolkit, and a PostgreSQL database to store product and
            user information. Users (both guests and signed-in customers) can
            browse the store, add items to their cart, edit cart items, and
            checkout. Non-signed in users (guests) have their cart items saved
            in local storage while customers who&apos;ve created an account can
            have their cart items persist in the database.
          </p>

          <p className="my-3">
            Check out the code below to view all the different components as
            well as the Readme file for more information. The demo below was
            originally hosted on Heroku, but since they shifted to paid plans,
            the store is no longer available to view.
          </p>
          {/* <a
            href="https://poke-mart-fsa.herokuapp.com/"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 btn">Demo</button>
          </a> */}
          <a
            href="https://github.com/a-eiber/poke-mart"
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
            <p className="text-center font-bold pb-2 dark:text-white">
              Technologies Used:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Sequelize
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> React-Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> JSON Web Tokens
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

export default PokeProject;
