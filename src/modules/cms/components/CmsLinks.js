import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getCmsList } from '../actions';
import Tools from 'utils';

class CmsLinks extends Component {
  componentDidMount() {
    let { getCmsList } = this.props;

    getCmsList();
  }

  render() {
    let { fetching, data } = this.props.cms.cmsList;
    let { lang } = this.props;

    return (
      <div>
        {fetching || data === null ? null : (
          <div>
            <h5>Our Company</h5>
            {
              <ListGroup>
                {data.map((item, key) => (
                  <ListGroupItem
                    key={key}
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <Link
                      to={`/cms/${item.id}-${Tools.l(item.link_rewrite, lang)}`}
                    >
                      {Tools.l(item.meta_title, lang)}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            }
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ cms, languages }) {
  return {
    cms: cms,
    lang: languages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCmsList: bindActionCreators(getCmsList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CmsLinks);
