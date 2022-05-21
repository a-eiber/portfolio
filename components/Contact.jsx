import Image from 'next/image';
import Link from 'next/link';
import Tooltip from '@nextui-org/react/tooltip';
import React, { useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GrDocumentUser } from 'react-icons/gr';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const Contact = () => {
  const [inputRef, setInputFocus] = useFocus();
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 pt-8 w-full">
        <p className="text-xl tracking-widest uppercase text-[#21568a]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <div>
              <div className="grid grid-cols-2 gap-8 py-4 sm:flex sm:flex-wrap sm:items-center sm:justify-around">
                <div className="mx-auto ">
                  <a href="https://www.linkedin.com/in/aleceiber">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn className="mx-auto mb-1" /> LinkedIn
                    </div>
                  </a>
                </div>

                <div className="mx-auto ">
                  <a href="https://www.github.com/a-eiber">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub className="mx-auto mb-1" /> GitHub
                    </div>
                  </a>
                </div>

                <div className="mx-auto ">
                  <Tooltip
                    content={'Use the form below'}
                    rounded
                    color="primary"
                    onClick={setInputFocus}
                    className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <div>
                      <AiOutlineMail className="mx-auto mb-1" /> Email Me
                    </div>
                  </Tooltip>
                </div>

                <div className="mx-auto ">
                  <a href="/assets/Alec_Eiber_Resume.pdf">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300">
                      <GrDocumentUser className="mx-auto mb-1" /> Resume
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    ref={inputRef}
                    required
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    required
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  required
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                />
              </div>

              <button className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#21568a]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
