import React, { useState, useEffect } from 'react';
import {
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MobileMenu from './components/mobileMenu';
import DesktopMenu from './components/desktopMenu';
import menus from './menusData';

const NavigationMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!!isMobile) {
    return (<MobileMenu scrolled={scrolled} open={open} setOpen={setOpen} />);
  }

  return (<DesktopMenu open={open} setOpen={setOpen} menuItems={menus} />);
};

export default NavigationMenu;