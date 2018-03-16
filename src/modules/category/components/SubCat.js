import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardGroup, CardSubtitle, CardBody } from 'reactstrap';

import { fetchSubCatRequest } from '../actions';
import Api from 'api';
import Tools from 'utils';

class SubCat extends Component {
  componentWillMount() {
    let { data } = this.props.category;
    if (data !== null && Array.isArray(data.associations.categories)) {
      this.props.fetchSubCatRequest(
        data.associations.categories.map(item => item.id)
      );
    }
  }

  render() {
    let { fetching, data } = this.props.category.subCat;
    let { lang } = this.props;

    return (
      <div>
        {fetching || data === null ? null : (
          <div>
            <h4 className="mt-3">Sub categories</h4>
            <CardGroup>
              {data.map((item, key) => (
                <Card key={key} style={{ maxWidth: 120 }}>
                  <CardImg
                    top
                    width="50"
                    src={Api.images.getCategoryImage(item.id)}
                    alt={Tools.l(item.name, lang)}
                  />
                  <CardBody>
                    <CardSubtitle className="text-center">
                      <Link
                        to={`/category/${item.id}-${Tools.l(
                          item.link_rewrite,
                          lang
                        )}`}
                      >
                        {Tools.l(item.name, lang)}
                      </Link>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              ))}
            </CardGroup>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = ({ category, languages }) => ({
  category: category,
  lang: languages
});

let mapDispatchToProps = dispatch => ({
  fetchSubCatRequest: bindActionCreators(fetchSubCatRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubCat);
