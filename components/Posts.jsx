import React from 'react';
import Link from 'next/link';

const Posts = () => {
  return (
    <section id="posts" className="w-full p-2 pt-8 mx-5">
      <div className="max-w-[1240px] m-auto">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#21568a]">
            Posts
          </p>
          <h2 className="py-4">What I&apos;ve Written</h2>

          <p className="ml-3">Wednesday, 24 August 2022</p>
          <Link href="/posts/how-to-setup-your-mac-for-development-2022">
            <h3 className="py-2 uppercase underline text-gray-600 text-2xl ml-3 hover:cursor-pointer hover:text-blue-800">
              How To Setup Your Mac For Development 2022
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Posts;
