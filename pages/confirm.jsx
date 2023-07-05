import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';

const Confirm = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div>
      <Header collapse={collapse} setCollapse={setCollapse} />
      <h1 className="m-10">
        Your email has been sent! I&apos;ll get back to you as soon as possible.
      </h1>
      <Link href="/">
        <p className="underline cursor-pointer mt-10 ml-10">Go Back</p>
      </Link>
    </div>
  );
};

export default Confirm;
