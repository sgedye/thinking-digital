// This component was written by Noman Gul, edited by Shaun Gedye
import React, { useState, useEffect } from 'react';

const PageProgress = () => {
  const [width, setWidth] = useState(null);

  const watchScrolling = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    const winHeight = scrollHeight - clientHeight;
    const scrolled = `${(winScroll / winHeight) * 100}%`;
    return winHeight > 0 ? setWidth(scrolled) : setWidth(0);
  };

  useEffect(() => {
    window.addEventListener('scroll', watchScrolling);
    return () => window.removeEventListener('scroll', watchScrolling);
  });

  const styles = {
    progress: {
      marginTop: '80px',
      padding: 0,
      opacity: 0.6,
      // background: color ? color : "skyblue",
      background: 'linear-gradient(45deg, blue, darkgreen)',
      position: 'fixed',
      height: 5,
      width,
      top: 0,
      zIndex: 3,
      transition: 'width 200ms ease-out'
    }
  };

  return <div style={styles.progress} />;
};

export default PageProgress;
