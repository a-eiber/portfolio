import React from 'react';
import tigerImg from '../public/assets/projects/tiger.jpg';
import pokeImg from '../public/assets/projects/poke-mart2.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2 pt-8">
      <div className="max-w-[1240] mx-auto px-2">
        <p className="text-xl tracking-widest uppercase text-[#21568a]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tiger Sports Basketball League"
            backgroundImg={tigerImg}
            projectUrl="/tigerProject"
          />
          <ProjectItem
            title="Poké  Mart"
            backgroundImg={pokeImg}
            projectUrl="/pokeProject"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
