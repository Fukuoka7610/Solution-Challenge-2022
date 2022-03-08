import { GoogleMap, LoadScript } from "@react-google-maps/api";

import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'

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
      <SearchBar/>
      <LoadScript googleMapsApiKey='Key'>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}/>
      </LoadScript>
    </div>

  )
}

export default Map