import React from 'react';
import ProductList from './product/ProductList';
import Card from './card/cards';

const HomePage = () => {

  const dummyData = {
    userId: "987654321",
    balance: "25.00",
  };

  return (
    <div style={{ backgroundColor: "#E1F7F5" }}>
      <Card userData={dummyData}/>
      <ProductList />
    </div>
  );
};

export default HomePage;
