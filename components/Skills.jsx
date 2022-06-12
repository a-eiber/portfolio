import Image from 'next/image';
import React from 'react';
import javascriptImg from '../public/assets/skills/javascript.png';
import nodeImg from '../public/assets/skills/node.png';
import reactImg from '../public/assets/skills/react.png';
import reduxImg from '../public/assets/skills/redux2.png';
import postgresImg from '../public/assets/skills/postgresql.png';
import sequelizeImg from '../public/assets/skills/sequelize.png';
import expressImg from '../public/assets/skills/express.png';
import githubImg from '../public/assets/skills/github1.png';
import htmlImg from '../public/assets/skills/html.png';
import cssImg from '../public/assets/skills/css.png';
import firebaseImg from '../public/assets/skills/firebase.png';
import mongoImg from '../public/assets/skills/mongo.png';

const Skills = () => {
  return (
    <section id="skills" className="w-full p-2 pt-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#21568a]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 sm:mx-auto">
          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javascriptImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nodeImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reduxImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={postgresImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sequelizeImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Sequelize</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={expressImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={firebaseImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongoImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={githubImg} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
