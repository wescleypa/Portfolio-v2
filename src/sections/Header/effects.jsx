import { useEffect, useRef, useState } from "react";

export function useTypingEffect() {
  const [currentProfession, setCurrentProfession] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [displayText, setDisplayText] = useState('');

  // Typewriter effect
  useEffect(() => {
    let timer;
    const professions = [
      "Full Stack Developer",
      "System Analyst",
      "Tech Content Creator",
      "Open Source Contributor"
    ];

    const currentText = professions[currentProfession];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(150);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentProfession((prev) => (prev + 1) % professions.length);
          setTypingSpeed(150);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentProfession, isDeleting, typingSpeed]);

  return {
    displayText
  }
};

export function useVideoEffect() {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(false);


  // Video autoplay handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlayAttempt = async () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        await playPromise
          .then(() => setShowPlayButton(false))
          .catch(() => setShowPlayButton(true));
      }
    };

    if (video.readyState >= 3) {
      handlePlayAttempt();
    } else {
      video.addEventListener('loadedmetadata', handlePlayAttempt);
      return () => video.removeEventListener('loadedmetadata', handlePlayAttempt);
    }
  }, []);

  const handlePlayClick = () => {
    videoRef.current?.play()
      .then(() => setShowPlayButton(false))
      .catch(console.error);
  };

  return {
    showPlayButton,
    handlePlayClick,
    videoRef
  }
}