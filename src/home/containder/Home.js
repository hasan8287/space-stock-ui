import React from 'react'
import { Input, Row, Col, Button, Media } from 'reactstrap'
import { Link } from 'react-router-dom'

import MapAll from './../../buildings/container/map_all'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      type: this.props.type,
      nextPage: this.props.page + 1,
      previuosPage: this.props.page - 1,
    }
  }

  handleChange = event => 
    this.setState({ name: event.target.value })

  ButtonPreview = () => {
    if (this.props.page > 1) {
      return (
        <a href={'/home?page=' + this.state.previuosPage + '&name=' + this.state.name + '&type=' + this.state.type}>
          <Button>
            Previuos
          </Button>
        </a>
      )
    }

    return <div />
  }

  ButtonNext = () => {
    if (this.props.data.nextPage != null) {
      return (
        <a href={'/home?page=' + this.state.nextPage + '&name=' + this.state.name + '&type=' + this.state.type}>
          <Button>
            Next
          </Button>
        </a>
      )
    }
    
    return <div />
  }


  hanldeSearch = () => {
    window.location.assign(`/home?page=1&name=${this.state.name}&type=${this.state.type}`)
  }

  filterBuildings = (e) => {
    window.location.assign(`/home?page=1&name=${this.state.name}&type=${e.target.value}`)
  }

  SearchForm = () => {
    return (
      <Row style={{ borderBottom: 'solid black 1px', paddingBottom: '10px', marginBottom: '10px', marginTop: '10px' }}>
        <Col xl={3} md={3} sm={12} />
        <Col xl={3} md={3} sm={12}>
          <Input
            type="text"
            value={this.state.name}
            placeholder="text here"
            onChange={this.handleChange}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.hanldeSearch()
              }
            }}
          />
        </Col>
        <Col xl={2} md={3} sm={12}>
          <Input type="select" value={this.state.type} onChange={this.filterBuildings.bind(this)}>
            <option value="">All</option>
            <option value="office">Office</option>
            <option value="apartment">Appartment</option>
          </Input>
        </Col>
        <br />
      </Row>
    )
  }

  render() {
    
    if (this.props.isLoading) return <h3>Loading......</h3>
    if (this.props.err) return <b>ERROR: {this.props.err}</b>

    if (this.props.data.docs.length < 1) {
      return (
        <div>
          {this.SearchForm()}
          <h3> DATA NOT FOUND</h3>
        </div>
      )
    }
    return (
      <div>
        {this.SearchForm()}
        <Row style={{ margin: '5px' }}>
          <Col xl={6} md={12} sm={12}>
            <Row>
              {this.props.data.docs.map(entrie => (
                <Col xl={6} md={6} sm={12}>
                  <div style={{ border: 'solid 1px black', margin: '5px' }}>
                    <Media style={{ height: '150px' }}>
                      <Media body>
                        <img src={entrie.images[0]} width={'100%'} alt="" /> 
                      </Media>
                    </Media>
                    <div style={{margin: '3px'}}>
                      <b>{entrie.name}</b>
                      <p>
                        {entrie.description}
                      </p>
                      <p align="right">
                        <Link to={`/buildings/${entrie.id}`}>
                          <Button>Detail</Button>
                        </Link> 
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col sm={12} align="center">
                {this.ButtonPreview()}
                &nbsp;
                {this.ButtonNext()}
              </Col>
            </Row>
          </Col>
          <Col xl={6} md={12} sm={12}>
            {this.props.data.docs.length > 0 ? (
              <MapAll
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDT8poa9P36ZXAA4tQqJq5FUx-crb4cJro&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                data={this.props.data.docs}
              />
            ) : (
              <div />
            )}
            
          </Col>
        </Row>
      </div> 
    )
  }
}

export default Home;
