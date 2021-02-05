import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import "./map.css"

export class Maps extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{ lat: 37.658842565065406,  lng: -122.40020027518004 }}
      >
      <Marker position ={{ lat: 37.658842565065406,  lng: -122.40020027518004 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDWq4A2P-CBi_npo5ZaZcagtoRqPKdC2-U'
})(Maps);