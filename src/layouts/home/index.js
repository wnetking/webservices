import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { ProductList } from 'modules/productlist/components';
import { Manufacturers } from 'modules/manufacturers/components';
import { Stores } from 'modules/stores/components';

const Home = () => (
  <div className="flex-grow-1">
    <Stores />
    <Container className="flex-grow-1 mb-5">
      <h2 className="text-center mb-4">Products</h2>
      {<ProductList limit={16} />}
    </Container>
    <Container className="flex-grow-1">
      {<h2 className="text-center mb-4">Brands</h2>}
      <Manufacturers limit={null} />
    </Container>
  </div>
);

export default Home;
