import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: "400px",
      height: "300px",
    };
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 37.658842565065406,  lng: -122.40020027518004 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDWq4A2P-CBi_npo5ZaZcagtoRqPKdC2-U'
})(Maps);