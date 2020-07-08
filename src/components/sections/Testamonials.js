import React from 'react';
import styled from 'styled-components';

import customerData from '../../data/customer-data';
// import CustomerCard from '../CustomerCard';
import SectionHeading from '../../utils/SectionHeading';
import TestimonialCard from '../TestimonialCard';
import DotNav from '../../utils/DotNav';
// import TestimonialSvg from '../../svg/TestimonialSvg';

const Testamonials = () => {
  const randomCustomer = Math.floor(Math.random() * customerData.length);

  return (
    <Wrap id="testamonials">
      <SectionHeading title="What customers are saying" />
      <TestimonialDiv>
        <TestimonialCard customer={customerData[randomCustomer]} />
        <p style={{ color: 'blue', textAlign: 'center' }}>
          Dots here to switch between different testamonials
        </p>
        <DotNav numDots={customerData} />
      </TestimonialDiv>
      {/* <TestimonialSvg /> */}
    </Wrap>
  );
};

const Wrap = styled.section`
  /* width: 90vw; */
  /* margin: 20px auto; */
  padding: 25px;
  background-color: #557;
  @media screen and (min-width: 768px) {
    /* width: 80vw; */
  }
`;

const TestimonialDiv = styled.div`
  /* margin: 0 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333; */
  text-align: center;
`;

// const TestimonialDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   @media screen and (min-width: 600px) {
//     flex-direction: row;
//   }
// `;

export default Testamonials;
