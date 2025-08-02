import { Close, Menu } from '@mui/icons-material';
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme
} from '@mui/material';
import { FloatingMenu } from '../style';
import menus from '../menusData';
import useScrollToSection from '../../../hooks/useScrollToSection';

const MobileMenu = ({ open, setOpen, scrolled }) => {
  const theme = useTheme();
  const { currentSection } = useScrollToSection();

  return (
    <Collapse in={currentSection !== 'header' && currentSection !== 'footer'}>
      <Tooltip title="Menu" arrow>
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            position: 'fixed',
            zIndex: 1100,
            left: 16,
            top: scrolled ? 16 : 80,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: 'white'
            }
          }}
        >
          {open ? <Close /> : <Menu />}
        </IconButton>
      </Tooltip>

      <FloatingMenu in={!!open} sx={{
        left: 80,
        top: scrolled ? 20 : 84,
        transform: 'none',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}>
        <List dense sx={{ p: 1 }}>
          {menus.map((item) => (
            <ListItem
              key={item.section}
              disablePadding
              onClick={() => {
                document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
            >
              <ListItemButton
                selected={currentSection === item.section}
                sx={{
                  borderRadius: '12px',
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </FloatingMenu>
    </Collapse>
  );
};

export default MobileMenu;