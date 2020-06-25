import React from 'react';
import styled from 'styled-components';

const CallToAction = () => (
  <Wrap className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
    <Contents>
      <h3>Ready to grow your business?</h3>
      <p>Quis lectus nulla at volutpat diam ut.</p>
      <Button size="xl">Get Started Now</Button>
    </Contents>
  </Wrap>
);

const Wrap = styled.section`
  width: 100%;
`;
const Contents = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightskyblue;
  opacity: 0.9;
  border-radius: 35px;
  width: 80%;
  height: 90%;
  padding: 20px;
`;
const Button = styled.button`
  font-size: 1.5rem;
  line-height: 2.2rem;
  background-color: blue;
  border-radius: 20px;
`;

export default CallToAction;
