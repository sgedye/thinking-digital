import React from 'react';
import styled from 'styled-components';

import customerData from '../../data/customer-data';
import CustomerCard from '../CustomerCard';
import SectionHeading from '../../utils/SectionHeading';

const Testamonials = () => (
  <Wrap>
    <SectionHeading>What customers are saying</SectionHeading>
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
  width: 100%;
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
