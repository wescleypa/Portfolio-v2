import './App.css';
import { ConfigProvider } from './contexts/config';
import Header from './components/header';
import About from './components/about';
import { Divider } from '@mui/material';
import History from './components/history';
import SoftSKills from './components/softskills';
import Youtube from './components/youtube';
import HardSkills from './components/hardskills';

function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ConfigProvider>
      <div className="App" style={{ backgroundColor: 'RGB(244, 243, 243)' }}>
        <Header scrollToSection={scrollToSection} />
        <Divider />
        <About />
        <Divider sx={{ m: 6 }} />
        <History />
        <Divider sx={{ m: 6 }} />
        <SoftSKills />
        <Divider sx={{ m: 6 }} />
        <Youtube />
        <HardSkills />
      </div>
    </ConfigProvider>
  );
}

export default App;
