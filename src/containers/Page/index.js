import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
  Container, Row, Col, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import Header from '../Header/'
import renderHTML from 'react-render-html';
import {products} from '../../utils/products/'
import {images} from '../../utils/images/'

class Page extends Component {
  state = {
    data    : [],
    fetching: true
  }

  componentDidMount() {
    products.all().then(data => {
      this.setState({
        data    : data,
        fetching: false
      });
    });
  }


  render() {
    let {data, fetching} = this.state;

    if (fetching && data.length) {
      return (<div>Loading... </div>)
    }

    return (
      <Router>
        <main>
          <Header />
          <Container>
            <Route exact path="/" render={()=>(
              <Row>
              {data.map((item, key) => (
                <Col xs="4" key={key} className="mb-4">
                  <Card>
                    <CardImg top width="100%" src={images.productImage(item.id, item.associations.images[0].id)} alt={item.name}/>
                    <CardBlock>
                      <CardTitle>
                        <Link to={`/${item.id}-${item.link_rewrite}`}>{item.name}</Link>
                      </CardTitle>
                      <CardSubtitle>Price ${parseFloat(item.price).toFixed(2)}</CardSubtitle>
                      {renderHTML(item.description_short)}
                    </CardBlock>
                  </Card>
                </Col>
              ))}
              </Row>
            )}/>
            <Route path="/:id-:name" render={({ match })=>(
              <Row>
                <Col>{match.params.id}</Col>
                <Col>{match.params.name}</Col>
              </Row>
            )}/>
          </Container>
        </main>
      </Router>
    );
  }
}
export default Page;
