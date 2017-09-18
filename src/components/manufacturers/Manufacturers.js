import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Row, Col} from 'reactstrap';
import {getAll} from '../../actions/manufacturersActions'

import {
  Card, CardImg, CardBlock,
  CardSubtitle
} from 'reactstrap';

import {images} from '../../utils/images/'

class Manufacturers extends Component {
  componentDidMount() {
    let {getAll} = this.props
    let {data} = this.props.manufacturers

    if (data === null) {
      getAll();
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
                      {item.name}
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
    getAll: bindActionCreators(getAll, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);