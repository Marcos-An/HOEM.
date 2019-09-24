import React from 'react';
import ReactStreetview from 'react-streetview';

export default class StreetView extends React.Component {

    render() {  
        const {Lat, Lon} = this.props;
        const googleMapsApiKey = 'AIzaSyDtMj3HvCIzKC0YtEXrZDVnVO-5hnSiGg8';
        const streetViewPanoramaOptions = {
            position: {lat: Lat, lng: Lon},
            pov: {heading: 100, pitch: 0},
            zoom: 1
        };
        return (
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#eeeeee'
            }}>
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>
        );
    }
}
