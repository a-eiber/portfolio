import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#21568a]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Before I became a software engineer, I was a Naval Officer for six
            years, serving on ships around the world and working in leadership
            positions in operations and anti-terrorism.
          </p>

          <p className="py-2 text-gray-600">
            After completing my service and being honorably discharged, my
            passion for coding grew stronger, so I decided to get a formal
            education in full stack development. I applied to Fullstack
            Academy&apos;s Software Engineering immersive program and was
            fortunate enough to be accepted and graduate.
          </p>

          <p className="py-2 text-gray-600">
            I really enjoy being a part of something impactful to people, and
            right now, I&apos;m looking for opportunities to grow in my career
            and learn as much as I can.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/profile.jpeg"
            alt="/"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
