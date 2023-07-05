import React from 'react';
import tigerImg from '../public/assets/projects/tiger.jpg';
import pokeImg from '../public/assets/projects/poke-mart2.jpg';
import inkImg from '../public/assets/projects/inkBuzz.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <section id="projects" className="w-full container p-2 flex items-center pt-8 mx-5">
      <div className="max-w-[1240px] m-auto px-2">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#21568a]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <p className="text-xs text-center sm:text-left sm:text-base tracking-widest uppercase py-4">
            Click on the images below to view additional details
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            <ProjectItem
              title="Ink Buzz"
              backgroundImg={inkImg}
              projectUrl="/inkBuzzProject"
              description="A social media platform where users can connect with tattoo artists"
            />
            <ProjectItem
              title="Poké Mart"
              backgroundImg={pokeImg}
              projectUrl="/pokeProject"
              description="An e-commerce website based on the in-game marts found in the Pokémon series"
            />
            <ProjectItem
              title="Tiger Sports Basketball League"
              backgroundImg={tigerImg}
              projectUrl="/tigerProject"
              description="A league website for players, coaches, and administrators"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
