import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import StyledHero from '../../utils/StyledHero';
// import HeroImage from '../../svg/HeroImage';
import Button from '../Button';

const getBackground = graphql`
  query {
    BackgroundImage: file(relativePath: { eq: "images/road-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const HeroSection = () => {
  const data = useStaticQuery(getBackground);
  return (
    <StyledHero
      id="home"
      className="styledHero"
      fluid={data.BackgroundImage.childImageSharp.fluid}
      alt="Hero Background"
    >
      <Wrap>
        <TextBox>
          <h1>Web Solutions</h1>
          <p>We create bespoke websites and web applications to solve to solve your needs.</p>
          <p>
            <Button additionalStyles={{ backgroundColor: 'red', borderRadius: '25px' }}>
              Learn More -- smooth scroll to about us.
            </Button>
          </p>
          <p>Sed fermentum felis ut cursu</p>
        </TextBox>
      </Wrap>
    </StyledHero>
  );
};

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const TextBox = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  width: 50%;
  min-height: 35%;
  text-align: center;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
  text-shadow: 1px 1px 5px white;
  h1 {
    text-align: center;
  }
`;

export default HeroSection;
