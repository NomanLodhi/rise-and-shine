import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px"
};

const center = {
  lat: 49.1044,
  lng: -122.8011
};

const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#1d2c4d" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#8ec3b9" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1a3646" }]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#4b6878" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#0c0c0c" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#2e3b4e" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#304a7d" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  }
];

const serviceAreas = [
  { name: "Langley", lat: 49.1044, lng: -122.6603 },
  { name: "Pitt Meadows", lat: 49.2338, lng: -122.6900 },
  { name: "Maple Ridge", lat: 49.2197, lng: -122.5986 },
  { name: "Aldergrove", lat: 49.0580, lng: -122.4695 },
  { name: "White Rock", lat: 49.0284, lng: -122.8058 },
  { name: "Surrey", lat: 49.1913, lng: -122.8490 },
  { name: "New Westminster", lat: 49.2057, lng: -122.9109 },
  { name: "North Vancouver", lat: 49.3200, lng: -123.0735 },
  { name: "Burnaby", lat: 49.2488, lng: -122.9805 },
  { name: "Richmond", lat: 49.1666, lng: -123.1336 },
  { name: "Delta", lat: 49.0844, lng: -123.0586 },
  { name: "West Vancouver", lat: 49.3271, lng: -123.1558 },
  { name: "East Vancouver", lat: 49.2497, lng: -123.0566 },
  { name: "Chilliwack", lat: 49.1579, lng: -121.9515 }
];

export default function Map() {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyC25K7fui4Q2ns2zDRQ4ZHBXUgYjN6EZ1E">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            styles: darkMapStyle,
            disableDefaultUI: false,
            mapTypeControl: false
          }}
        >
          {serviceAreas.map((area, index) => (
            <Marker
              key={index}
              position={{ lat: area.lat, lng: area.lng }}
              title={area.name}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
