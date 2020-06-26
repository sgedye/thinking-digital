import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import StyledHero from '../../utils/StyledHero';
// import HeroImage from '../../svg/HeroImage';
import Button from '../Button';

const getBackground = graphql`
  query {
    BackgroundImage: file(relativePath: { eq: "galaxy-bg.jpg" }) {
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
      className="styledHero"
      fluid={data.BackgroundImage.childImageSharp.fluid}
      alt="Hero Background"
    >
      <Wrap>
        <TextBox>
          <h1>Main title of your landing page</h1>
          <p>
            Free landing page template to promote your business startup and generate leads for the
            offered services
          </p>
          <p>
            <Button>Get Started</Button>
          </p>
          <p>Sed fermentum felis ut cursu</p>
        </TextBox>
        {/* <ImageBox>
          <HeroImage />
        </ImageBox> */}
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
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
  h1 {
    text-align: center;
  }
`;

// const ImageBox = styled.div`
//   margin: 10px 20px;
//   padding: 10px 20px;
//   width: 500px;
//   max-width: 90%;
//   min-height: 35%;
//   margin: 0 auto;
// `;

export default HeroSection;
