import React from 'react'
import { Row, Col, Badge } from 'reactstrap'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getDataBuildingsDetail } from './../action'
import MapAll from './map_all'
import Media from './media'

class DetailBuildings extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params
    this.props.getDataBuildingsDetail(id)
  }
  render() {
    if (this.props.isLoading) return <h3>Loading......</h3>
    if (this.props.err) return <b>ERROR: {this.props.err}</b>

    const { detail } = this.props
    const { images = [], facilities = [], address = {} } = detail
    return (
      <div>
        <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <Col sm={12} md={12} xl={12} style={{ height: '350px', textAlign: 'center' }}>
            <img src={images[0]} style={{ height: '350px', width: '100%' }} alt="" />
          </Col>
        </Row>
        <Row>
          <Col xl={2} />
          <Col xl={8} md={12} sm={12}>
            <Row>
              <Col xl={6} md={6} sm={12}>
                <h3>{detail.name}</h3>
                <p>
                  Description
                  <br />
                  {detail.description}
                </p>
                <p>
                  Facities
                  <br />
                  {facilities.map(entrie => (
                    <Badge style={{ marginLeft: '3px' }}>{entrie}</Badge>
                  ))}
                </p>
              </Col>
              <Col xl={6} md={6} sm={12} style={{ minHeight: '250px'}}>
                <b>Locations</b>
                <p>{address.streets}, {address.city}, {address.country}</p>
                {detail ? (
                  <MapAll
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDT8poa9P36ZXAA4tQqJq5FUx-crb4cJro&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    data={[detail]}
                  />
                ) : (
                  <div />
                )}
              </Col>
              <Col xl={12} md={12} sm={12}>
                <br />
                <br />
                <br />
                <div>
                  <Media 
                    images={detail.images}
                  />
                </div>
                <p>
                  
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    ) 
  }
}

const mapStateToProps = ({ buildings }) => ({
  ...buildings,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDataBuildingsDetail,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailBuildings)

