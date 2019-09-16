import React from 'react';
import ReactStreetview from 'react-streetview';
 
export default class App extends React.Component {

    render() {
        // see https://developers.google.com/maps/documentation/javascript
        const googleMapsApiKey = 'YOUR_API_KEY';
 
        // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
        const streetViewPanoramaOptions = {
            position: {lat: 46.9171876, lng: 17.8951832},
            pov: {heading: 100, pitch: 0},
            zoom: 1
        };
 
        return (
            <div style={{
                width: '800px',
                height: '450px',
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