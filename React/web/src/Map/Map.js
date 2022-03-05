import { GoogleMap, LoadScript } from "@react-google-maps/api";

import React from 'react'

const containerStyle = {
  width: '100%',
  height: '90vh',
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const Map = () => {
  return (
    <div>
      Map Page
      <LoadScript googleMapsApiKey='AIzaSyCA54hI6blCLXItNTOXpx8AImUykaMyMTg'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        ></GoogleMap>
      </LoadScript>
    </div>

  )
}

export default Map