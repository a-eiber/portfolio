import Image from 'next/image';
import React, { useState } from 'react';
import tigerImage from '../public/assets/projects/tiger.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Header from '../components/Header';

const TigerProject = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="w-full">
      <Header collapse={collapse} setCollapse={setCollapse} />
      <div
        className={
          collapse
            ? 'w-screen h-[30vh] relative'
            : 'w-screen h-[30vh] relative mt-64'
        }>
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={tigerImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[48em] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 ml-5">Tiger Sports Basketball League</h2>
          <h3 className="ml-5 mb-2">
            A league website for players, coaches, and administrators
          </h3>
        </div>
      </div>
      <div className="max-w-[42em] mx-auto p-2 flex flex-col pt-8 px-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="my-3">
            A personal project, this web application is used to administer a
            basketball league, displaying the schedule, results, standings, and
            news updates. I also built a dashboard for the site administrator to
            log in and make required updates. This project is still in progress.
          </p>
          <p className="mb-3">
            This project is still in progress, and I&apos;m planning on adding
            additional functionality like accepting registration payments using
            the Stripe API, as well as ironing out the process for adding games
            to the schedule and updating results and standings.
          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8 btn">Demo</button> */}
          <a
            href="https://github.com/a-eiber/tigerbasketball"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 btn">Code</button>
          </a>
        </div>
        <div className="shadow-xl shadow-gray-400 rounded-xl p-4 mt-5">
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

export default TigerProject;
