import { ThemeSelector } from '../../style';
import { Box } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

export const ThemeToggleButton = ({ darkMode, setDarkMode }) => (
  <ThemeSelector onClick={() => setDarkMode(!darkMode)}>
    <Box
      sx={{
        position: 'relative',
        height: 25
      }}
    >
      {/* Dark Mode */}
      <Box
        hidden={!darkMode}
        sx={{
          position: 'relative',
          opacity: darkMode ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <LightMode sx={{ color: 'text.primary' }} />
      </Box>

      {/* Light Mode */}
      <Box
        hidden={darkMode}
        sx={{
          position: 'relative',
          opacity: darkMode ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <DarkMode sx={{ color: 'text.primary' }} />
      </Box>
    </Box>
  </ThemeSelector>
);