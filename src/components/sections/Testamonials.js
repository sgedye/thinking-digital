import React from 'react';
import styled from 'styled-components';

import customerData from '../../data/customer-data';
import CustomerCard from '../CustomerCard';
import SectionHeading from '../../utils/SectionHeading';

const Testamonials = () => (
  <Wrap>
    <SectionHeading title="What customers are saying" />
    <p>Make this a 100% width card... only show one at a time... transition/slideshow</p>
    <TestamonialDiv>
      {customerData.map(customer => (
        <div key={customer.customerName}>
          <CustomerCard customer={customer} />
        </div>
      ))}
    </TestamonialDiv>
  </Wrap>
);

const Wrap = styled.section`
  width: 80vw;
  margin: 20px auto;
`;

const TestamonialDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export default Testamonials;
