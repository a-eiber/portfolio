import React from "react";
import Link from "next/link";

const Posts = () => {
  return (
    <section id="posts" className="w-full p-2 pt-8 mx-5">
      <div className="max-w-[1240px] m-auto">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#21568a]">
            Posts
          </p>
          <h2 className="py-4">What I&apos;ve Written</h2>

          <p className="ml-3">Monday, 10 October 2022</p>
          <Link href="https://aeiber.notion.site/How-To-Setup-Your-Mac-For-Development-2022-ec6e1214f6e24d38bfce1631b113e202">
            <h3 className="py-2 underline text-gray-600 text-2xl ml-3 hover:cursor-pointer hover:text-blue-800">
              How To Setup Your Mac For Development 2023
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Posts;
