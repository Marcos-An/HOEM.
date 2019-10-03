import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
class Mapas extends React.Component {

    render() {  
      const {Lat, Lon} = this.props;
        return (
            <Map 
              google={this.props.google}
              center={{
                  lat: Lat,
                  lng: Lon
                }}
              zoom={14}>   
                  <Marker onClick={this.onMarkerClick}  name={'Current location'} />
                  <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                      <h1>dfssf</h1>
                    </div>
              </InfoWindow>
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyDtMj3HvCIzKC0YtEXrZDVnVO-5hnSiGg8')
  })(Mapas)