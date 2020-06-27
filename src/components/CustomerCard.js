import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomerCard = ({ customer }) => (
  <Card>
    <p>{customer.title}</p>
    <p>{customer.content}</p>
    <div>
      <img src={customer.customerImage} alt={customer.customerName} />
      <div>
        <p>{customer.customerName}</p>
        <p>{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);

const Card = styled.article`
  margin: 0 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
`;

CustomerCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  customer: PropTypes.object.isRequired
};

export default CustomerCard;
