import { useState, useEffect, useRef } from 'react';

const useScrollToSection = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const currentSectionRef = useRef(currentSection);

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  const scrollTo = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  useEffect(() => {
    const sectionIds = [
      'header',
      'about',
      'history',
      'projects',
      'youtube',
      'blog',
      'stats',
      'testimonials',
      'certifications',
      'footer'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
          setCurrentSection(id);
          break;
        }
      }
    };

    const scrollListener = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', scrollListener);
    handleScroll();

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return { scrollTo, currentSection, getCurrentSection: () => currentSectionRef.current };
};

export default useScrollToSection;