import React from 'react';
import tigerImg from '../public/assets/projects/tiger.jpg';
import pokeImg from '../public/assets/projects/poke-mart2.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#21568a]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tiger Sports Basketball League"
            backgroundImg={tigerImg}
            projectUrl="/tiger-sports-basketball-league"
          />
          <ProjectItem
            title="Poké  Mart"
            backgroundImg={pokeImg}
            projectUrl="/poke-mart"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
