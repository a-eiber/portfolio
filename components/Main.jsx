import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GrDocumentUser } from 'react-icons/gr';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Tooltip from '@nextui-org/react/tooltip';

const Main = () => {
  return (
    <div id="home" className="w-full text-center">
      <div className="max-w-[1240px] mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 mt-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#21568a]">Alec</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full Stack Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a software engineer and US Navy veteran living in New York
            City. I love programming and have a passion for building tech
            that&apos;s impactful to people.
          </p>
          <p className="pt-2 pb-8 text-gray-600 max-w-[70%] m-auto underline cursor-pointer">
            <a
              href="/assets/Alec_Eiber_Resume1.pdf"
              target="_blank"
              rel="noreferrer">
              Click here to view my resume
            </a>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/aleceiber"
              target="_blank"
              rel="noreferrer">
              <Tooltip content={'LinkedIn'} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </Tooltip>
            </a>
            <a
              href="https://www.github.com/a-eiber"
              target="_blank"
              rel="noreferrer">
              <Tooltip content={'GitHub'} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </Tooltip>
            </a>
            <Tooltip content={'Email me below'} rounded color="primary">
              <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
            </Tooltip>
            <a
              href="/assets/Alec_Eiber_Resume1.pdf"
              target="_blank"
              rel="noreferrer">
              <Tooltip content={'Resume'} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <GrDocumentUser />
                </div>
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
