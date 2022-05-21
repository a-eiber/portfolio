import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';

import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Alec Eiber | Full Stack Engineer</title>
        <meta name="description" content="Alec Eiber Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
