import React from 'react'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

import CustomMarker from './custome_marker'

const MapWithAMarker = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: props.data[0].address.latitude, lng: props.data[0].address.longitude }}
    >
      {props.data.map((entrie) => {
        const position = {
          lat: entrie.address.latitude,
          lng: entrie.address.longitude,
        };

        return (
          <CustomMarker
            position={position}
            data={entrie}
            key={entrie.id}
          />
        )
      })}
    </GoogleMap>
  )
}));

export default MapWithAMarker
