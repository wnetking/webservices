import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {Row, Col} from 'reactstrap';
import {
  Card, CardImg, CardBody,
  CardSubtitle,Alert
} from 'reactstrap';
import {fetchListRequest} from '../actions'
import Api from 'api'

class Manufacturers extends Component {
  componentDidMount() {
    let {fetchListRequest, limit,manufacturers} = this.props
    let {data} = manufacturers

    if (data === null) {
      fetchListRequest(limit);
    }
  }

  render() {
    let {fetching, data, error} = this.props.manufacturers

    return (

      <div>
        { error.status ? 
          <Alert color="danger">{error.message}</Alert> :
          fetching ?
          <Alert color="info">Loading ...</Alert>
          :
          <Row>
            {data.map((item, key) => (
              <Col xs="12" md="3" className="mb-4" key={key}>
                <Card>
                  <div className="text-center pt-4">
                    <CardImg top height="40px" src={Api.images.getManufacturersImg(item.id)} alt={item.name}/>
                  </div>
                  <CardBody>
                    <CardSubtitle className="text-center">
                      <Link to={`/manufacturer/${item.id}-${item.link_rewrite}`}>
                       {item.name}
                      </Link>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        }
      </div>
    )
  }
}


function mapStateToProps({manufacturers}) {
  return {
    manufacturers: manufacturers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchListRequest: bindActionCreators(fetchListRequest, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);