import { Hero } from './Hero';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Resume } from './Resume';
import { Contact } from './Contact';
import { MusicPlayer } from './MusicPlayer';

export function PortfolioPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </div>
      <MusicPlayer />
    </>
  );
}
