import './Map.scss'

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import NavBar from '../../common/components/NavBar/NavBar'
//import GoogleMapReact from "google-map-react";
import React from 'react'
import SearchBar from '../../common/components/SearchBar/SearchBar'

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
      <NavBar img={`${process.env.PUBLIC_URL}/magnifying-glass-white.svg`}/>
      <SearchBar/>

      <div className='map'>
        <LoadScript googleMapsApiKey='API_Key'>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}/>
        </LoadScript>
      </div>
    </div>

  )
}

export default Map
