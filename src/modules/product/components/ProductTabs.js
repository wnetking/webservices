import React, {Component} from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';

import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import { ManufactureInfo } from 'modules/manufacturers/components'
import {Features, Description} from 'modules/product/components'

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
    let {active} = this.props.languages
    
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
                  <Description data={product.data} active={active}/>
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

function mapStateToProps ({ combinations, languages }) {
  return {
    combinations: combinations,
    languages: languages
  }
}

export default connect(mapStateToProps)(ProductTabs)