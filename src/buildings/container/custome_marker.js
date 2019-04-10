import React from 'react'

import {
  Marker,
  InfoWindow,
} from "react-google-maps";

class CustomMarker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  onMarkerClick = (evt) => {
    this.setState({ isOpen: true })
  };

  render () {
    return (
      <Marker
        onClick={this.onMarkerClick}
        {...this.props}
      >
        { (this.state.isOpen === true) && 
            <InfoWindow  onCloseClick={this.props.onToggleOpen}>
              <a href={"/buildings/"+this.props.data.id}>
                <div>
                  <div>{this.props.data.name}</div>
                  <div>{this.props.data.description}</div>
                </div>
              </a>
            </InfoWindow>}
      </Marker>
    )
  }   
}

export default  CustomMarker
