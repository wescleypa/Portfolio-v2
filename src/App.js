import './App.css';
import { ConfigProvider } from './contexts/config';
import CallToActionWithVideo from './components/header';
import About from './components/about';
import { Divider } from '@mui/material';
import History from './components/history';
import SoftSKills from './components/softskills';
import Youtube from './components/youtube';

function App() {
  return (
    <ConfigProvider>
      <div className="App" style={{ backgroundColor: 'RGB(244, 243, 243)' }}>
        <CallToActionWithVideo />
        <Divider />
        <About />
        <Divider sx={{ m: 6 }} />
        <History />
        <Divider sx={{ m: 6 }} />
        <SoftSKills />
        <Divider sx={{ m: 6 }} />
        <Youtube />
      </div>
    </ConfigProvider>
  );
}

export default App;
