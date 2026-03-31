import React from 'react';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import ProjectArchive from '../components/ProjectArchive';
import Capabilities from '../components/Capabilities';
import TechnicalArsenal from '../components/TechnicalArsenal';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ProjectArchive />
      <Capabilities />
      <TechnicalArsenal />
      <Experience />
    </>
  );
}

export default Home;
