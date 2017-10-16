import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {Row, Col} from 'reactstrap';
import {getFilterManufacturersList} from '../../actions/manufacturersActions'

import {
  Card, CardImg, CardBlock,
  CardSubtitle
} from 'reactstrap';

import {images} from '../../api/images/'

class Manufacturers extends Component {
  componentDidMount() {
    let {getFilterManufacturersList, limit} = this.props
    let {data} = this.props.manufacturers

    if (data === null) {
      getFilterManufacturersList(limit);
    }
  }

  render() {
    let {fetching, data} = this.props.manufacturers

    return (

      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <Row>
            {data.map((item, key) => (
              <Col xs="12" md="3" className="mb-4" key={key}>
                <Card>
                  <div className="text-center pt-4">
                    <CardImg top height="40px" src={images.getManufacturersImg(item.id)} alt={item.name}/>
                  </div>
                  <CardBlock>
                    <CardSubtitle className="text-center">
                      <Link to={`/manufacturer/${item.id}-${item.link_rewrite}`}>
                       {item.name}
                      </Link>
                    </CardSubtitle>
                  </CardBlock>
                </Card>
              </Col>
            ))}
          </Row>
        }
      </div>
    )
  }
}


function mapStateToProps({manufacturersReducer}) {
  return {
    manufacturers: manufacturersReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFilterManufacturersList: bindActionCreators(getFilterManufacturersList, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);