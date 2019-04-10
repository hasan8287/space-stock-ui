import React from 'react'
import queryString from 'query-string'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomeContainer from './containder/Home'
import { getDataBuildings } from './../buildings/action'

class Home extends React.Component {
  constructor(props) {
    super(props)
    const search = queryString.parse(this.props.location.search);
    let page = 1
    let name = ""
    let type = ""
    
    if (search.page) {
      page = parseInt(search.page, 10)
    } 
    if (search.name) {
      name = search.name
    }

    if (search.type) {
      type = search.type
    }

    this.state = {
      page,
      name,
      type,
    }
  }

  componentWillMount() {
    
    this.props.getDataBuildings({
      limit: 4,
      page: this.state.page,
      name: this.state.name,
      type: this.state.type,
    })
  }

  render() {
    return <HomeContainer
      page={this.state.page}
      name={this.state.name}
      type={this.state.type}
      {...this.props}
    />
  }
}

const mapStateToProps = ({ buildings }) => ({
  ...buildings,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDataBuildings,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

