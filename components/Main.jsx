import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Tooltip from "@nextui-org/react/tooltip";
import Header from "./Header";
import "animate.css";
import Typewriter from "./TypewriterClass.ts";

const Main = () => {
  const [collapse, setCollapse] = useState(true);
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    if (pageLoad) {
      const typewriter = new Typewriter(document.querySelector(".whitespace"), {
        loop: true,
        typingSpeed: 100,
        deletingSpeed: 50,
      });

      setTimeout(() => {
        typewriter
          .typeString("A Full Stack Engineer")
          .pauseFor(1500)
          .deleteChars(19)
          .typeString("US Navy Veteran")
          .pauseFor(1500)
          .deleteChars(15)
          .typeString("Software Engineer")
          .pauseFor(1500)
          .deleteChars(17)
          .typeString("Web Developer")
          .pauseFor(1500)
          .deleteChars(15)
          .start();
      }, 1250);
    }
  }, [pageLoad]);

  useEffect(() => {
    setPageLoad(true);
  }, []);

  return (
    <div id="home" className="w-full text-center container">
      <Header collapse={collapse} setCollapse={setCollapse} />
      <main
        className={
          collapse
            ? "max-w-[1240px] mx-auto p-2 flex justify-center items-center"
            : "mt-60"
        }
      >
        <div>
          <h1 className="animate__animated animate__zoomInDown py-4 text-gray-700 dark:text-white">
            Hi, I&apos;m <span className="text-[#21568a] dark:text-white">Alec</span>
          </h1>
          <h2 className="py-4 text-gray-700 h-24 dark:text-white">
            <span className="whitespace"></span>
          </h2>
          <p className="py-4 text-gray-600 max-w-[38em] m-auto dark:text-white">
            I&apos;m a{" "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>software engineer</strong>
            </span>{" "}
            and{" "}
            <span className="text-[#21568a] font-bold dark:text-white">
              <strong>US Navy veteran</strong>
            </span>{" "}
            living in New York City. I love programming and have a passion for
            building tech that&apos;s impactful to people.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/aleceiber"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content={"LinkedIn"} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaLinkedinIn />
                </div>
              </Tooltip>
            </a>
            <a
              href="https://www.github.com/a-eiber"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content={"GitHub"} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <FaGithub />
                </div>
              </Tooltip>
            </a>
            <Tooltip content={"Email me below"} rounded color="primary">
              <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <AiOutlineMail />
                </div>
              </Link>
            </Tooltip>
            <a
              href="/assets/Alec_Eiber_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content={"Resume"} rounded color="primary">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:shadow-none">
                  <GrDocumentUser />
                </div>
              </Tooltip>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
