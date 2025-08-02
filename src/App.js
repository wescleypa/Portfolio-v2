import './App.css';
import { useState } from 'react';
import { ThemeProvider, CssBaseline, } from '@mui/material';
import { lightTheme } from './components/themes/light';
import { darkTheme } from './components/themes/dark';
import Header from './sections/Header';
import { ThemeToggleButton } from './components/themes/toggleButton';
import AboutSection from './sections/About';
import History from './sections/History';
import Projects from './sections/Projects';
import Youtube from './sections/Youtube';
import Blog from './sections/Blog';
import StatsSection from './sections/Statistics';
import TestimonialsSection from './sections/Testimonials';
import CertificationsSection from './sections/Certifications';
import Footer from './sections/Footer';
import NavigationMenu from './components/Navigation';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={!!darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ThemeToggleButton darkMode={!!darkMode} setDarkMode={setDarkMode} />

      {/* Navigation Menu */}
      <NavigationMenu />

      {/* Sections List */}
      <Header />
      <AboutSection />
      <History />
      <Projects />
      <Youtube />
      <Blog />
      <StatsSection />
      <TestimonialsSection />
      <CertificationsSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
