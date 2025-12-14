import { Hero } from './components/portfolio/Hero';
import { Skills } from './components/portfolio/Skills';
import { Projects } from './components/portfolio/Projects';
import { Experience } from './components/portfolio/Experience';
import { Resume } from './components/portfolio/Resume';
import { Contact } from './components/portfolio/Contact';
import { MusicPlayer } from './components/portfolio/MusicPlayer';
import { Navigation } from './components/portfolio/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </div>
      <MusicPlayer />
    </div>
  );
}