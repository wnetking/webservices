import React, {Component} from 'react';
import {compose} from "recompose";
import {withScriptjs,withGoogleMap,GoogleMap,Marker,InfoWindow} from "react-google-maps";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {request} from '../actions'

class Stores extends Component {
  state = {
    infoToggle: []
  }

  componentDidMount() {
    let {request} = this.props
    let {data} = this.props.stores

    if (data === null) {
      request();
    }
  }

  render() {
    let {fetching, data} = this.props.stores
    let markers, defaultCenter = {};

    if (!fetching) {
      markers = data.map((item, key)=> {
        return (
          <Marker position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)}} key={key}>
            <InfoWindow>
              <div>
                <p>{item.name}</p>
                <span>Address: {item.address1}</span>
              </div>
            </InfoWindow>
          </Marker>
        )
      });

      defaultCenter = {
        lat: parseFloat(data[0].latitude),
        lng: parseFloat(data[0].longitude)
      }
    }
    const MapWithAMakredInfoWindow = compose(
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap defaultZoom={10} defaultCenter={props.defaultCenter}>
        {markers}
      </GoogleMap>
    );

    return (
      <div className="mb-5">
        {fetching ?
          <div style={{ height: `600px` }} className="justify-content-center d-flex align-items-center">
            Loading ... </div>
          :
          <div>
            <MapWithAMakredInfoWindow defaultCenter={defaultCenter} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `600px` }} />} mapElement={<div style={{ height: `100%` }} />}/>
          </div>
        }
      </div>
    )
  }
}


function mapStateToProps({stores}) {
  return {
    stores: stores
  }
}
function mapDispatchToProps(dispatch) {
  return {
    request: bindActionCreators(request, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
