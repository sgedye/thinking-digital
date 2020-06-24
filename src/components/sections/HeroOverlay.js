import React from 'react';
import styled from 'styled-components';

const HeroOverlay = () => (
  <OverlayPanel id="overlayPanel">
    <div className="overlay" />
  </OverlayPanel>
);

const OverlayPanel = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  mix-blend-mode: difference;
  z-index: 22;

  .overlay {
    width: 300%;
    height: 300%;
    margin: -100vh -100vw;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.79);
  }
`;

export default HeroOverlay;
