import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TestamonialCard = ({ customer }) => (
  <Card>
    <Content>
      <p>&quot;{customer.content}&quot;</p>
      <hr />
    </Content>
    <CustomerDetails>
      <img
        className="customerLogo"
        src={customer.customerLogo}
        alt={`${customer.customerCompany} Logo`}
      />
      <p className="customerName">{customer.customerName}</p>
      <p className="customerTitle">{customer.customerTitle}</p>
      <p className="customerCompany">{customer.customerCompany}</p>
    </CustomerDetails>
  </Card>
);

const Card = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.article`
  p {
    font-size: 1.2rem;
    margin: 0 auto;
  }
  hr {
    width: 100%;
    margin: 20px auto;
  }
  @media screen and (min-width: 768px) {
    hr {
      width: 75%;
    }
  }
`;
const CustomerDetails = styled.article`
  display: grid;
  grid-template-areas:
    'logo name'
    'logo title'
    'logo company';
  gap: 0 10px;
  justify-content: center;
  align-items: center;
  .customerLogo {
    grid-area: logo;
    text-align: right;
    width: 120px;
    max-height: 120px;
    /* position: absolute; */
    /* clip: rect(0px, 120px, 66px, 0px); */
  }
  p {
    margin: 0;
    text-align: left;
  }
  .cusomerName {
    grid-area: name;
  }
  .customerTitle {
    grid-area: title;
  }
  .customerCompany {
    grid-area: company;
  }
`;

TestamonialCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  customer: PropTypes.object.isRequired
};

export default TestamonialCard;
