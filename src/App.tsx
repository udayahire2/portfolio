import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/portfolio/Navigation';
import { PortfolioPage } from './components/portfolio/PortfolioPage';
import { ComponentsPage } from './components/portfolio/ComponentsPage';
import { ComponentDetailPage } from './components/portfolio/ComponentDetailPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navigation />
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/components/:componentId" element={<ComponentDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}