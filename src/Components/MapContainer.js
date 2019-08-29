import React, {Component} from 'react'
// import GoogleMapReact from 'google-map-react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

export class MapContainer extends Component {



    state = {
        lat: 40.7009098,
        long: -73.9877041
    }

    componentDidMount(){
        const geo_success = (position) => {
            this.setState({lat: position.coords.latitude, long: position.coords.longitude})
          }
          
        const geo_error = () => {
            console.log("Sorry, no position available.");
          }
          
        const geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 5000, 
            timeout           : 27000
          };
          
        navigator.geolocation.watchPosition(geo_success, geo_error, geo_options)
    }

      render() {
        return (
          <Map google={this.props.google} zoom={14}>
     
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>
        );
      }
    }
     
    export default GoogleApiWrapper({
      apiKey: ("AIzaSyAhARXMUa4JsfXvvKhNUWlY5UqabXjP0YM")
    })(MapContainer)