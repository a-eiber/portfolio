import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import profile from '../public/assets/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="w-full p-2 flex items-center pt-8 mx-5">
      <div className="max-w-[1240px] m-auto">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#21568a]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <div className="mx-5">
            <figure className="sm:w-96 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mb-6">
              <Image
                src={profile}
                alt="/"
                width="300"
                height="300"
                className="rounded-xl"
              />
            </figure>

            <p className="py-2 text-gray-600">
              Before I became a software engineer, I was a Naval Officer for six
              years, serving on ships around the world and working in leadership
              positions in operations and anti-terrorism.
            </p>

            <p className="py-2 text-gray-600">
              After completing my service and being honorably discharged, my
              passion for coding grew stronger, so I decided to get a formal
              education in full stack development. I applied to{' '}
              <a
                href="/assets/certificate.pdf"
                className="underline cursor-pointer"
                target="_blank"
                rel="noreferrer">
                Fullstack Academy&apos;s
              </a>{' '}
              Software Engineering immersive program and was fortunate enough to
              be accepted and graduate.
            </p>

            <p className="py-2 text-gray-600">
              I really enjoy being a part of something impactful to people, and
              right now, I&apos;m looking for opportunities to grow in my career
              and learn as much as I can.
            </p>

            <p className="py-2 text-gray-600 underline cursor-pointer">
              <Link href="/#projects">
                Check out some of my latest projects
              </Link>
            </p>

            <p className="py-2 text-gray-600 underline cursor-pointer">
              <a
                href="/assets/Alec_Eiber_Resume1.pdf"
                target="_blank"
                rel="noreferrer">
                Click here to view my resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
