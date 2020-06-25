import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomerCard = ({ customer }) => (
  <Card>
    <p className="text-xl font-semibold">{customer.title}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
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
  customer: PropTypes.node.isRequired
};

export default CustomerCard;
