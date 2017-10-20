import React, {Component} from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';
import renderHTML from 'react-render-html'

import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import { ManufactureInfo } from 'modules/manufacturers/components'
import {Features} from 'modules/product/components'

class ProductTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state  = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    let {product} = this.props.combinations
    
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })} 
                     onClick={() => { this.toggle('1'); }}>
              Description
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={() => { this.toggle('2'); }}>
              Product Details
            </NavLink>
          </NavItem>
        </Nav>
        {product.fetching ? null: 
          <TabContent activeTab={this.state.activeTab} className="pt-4">
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  {renderHTML(product.data.description[0].value)}
                </Col>
              </Row>
           </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <ManufactureInfo />
                  <Features />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        }
      </div>
    );
  }
}

function mapStateToProps ({ combinations }) {
  return {
    combinations: combinations
  }
}

export default connect(mapStateToProps)(ProductTabs)