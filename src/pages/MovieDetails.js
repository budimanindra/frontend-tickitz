import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {Button} from 'react-bootstrap'
import NavbarUser from '../components/NavbarUser'
import DetailMovie from '../components/DetailMovie'
import Showtimes from '../components/Showtimes'
import FooterHome from '../components/FooterHome'

class MovieDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarUser/>
        <DetailMovie/>
        <Showtimes/>
        <FooterHome/>
      </React.Fragment>
    )
  }
}

export default MovieDetails