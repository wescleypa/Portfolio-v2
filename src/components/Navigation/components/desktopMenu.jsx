import React from 'react';
import { FloatingMenu } from '../style';
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme
} from '@mui/material';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import menus from '../menusData';
import useScrollToSection from '../../../hooks/useScrollToSection';

const DesktopMenu = ({ open, setOpen }) => {
  const theme = useTheme();
  const { currentSection } = useScrollToSection();

  return (
    <FloatingMenu in={currentSection !== 'header' && currentSection !== 'footer'}>

      {/* Open/Close Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
        <IconButton
          onClick={() => setOpen(!open)}
          size="small"
          sx={{
            color: theme.palette.text.secondary,
            ml: !!open ? 'auto' : 0,
          }}
        >
          {open ? <KeyboardDoubleArrowLeft /> : <KeyboardDoubleArrowRight />}
        </IconButton>
      </Box>

      <Divider />

      <List dense sx={{ p: 1 }}>
        {menus.map((item) => (
          <Tooltip key={item.section} title={!open ? item.text : ''} placement="right" arrow>
            <ListItem disablePadding>
              <ListItemButton
                selected={currentSection === item.section}
                onClick={() => document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  borderRadius: '12px',
                  justifyContent: open ? 'initial' : 'center',
                  transition: 'all ease 0.3s',
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: 'inherit'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Collapse in={open} orientation="horizontal">
                  <ListItemText primary={item.text} />
                </Collapse>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </FloatingMenu>
  );
};

export default DesktopMenu;