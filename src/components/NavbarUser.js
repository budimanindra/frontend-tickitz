import React, { Component } from 'react'
import LogoTickitz from '../components/assets/VTickitz.png'
import User from '../components/assets/user.png'
import { Link } from 'react-router-dom'
import '../components/NavbarUser.css'


class NavbarUser extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><Link to='/'><img src={LogoTickitz} alt="" /></Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse font-weight-bold" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-4">
                  <a className="nav-link" href="#">Movies</a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="#">Cinema</a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="#">Buy ticket</a>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Location
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Jakarta</a>
                    <a class="dropdown-item" href="#">Balikpapan</a>
                    <a class="dropdown-item" href="#">Mataram</a>
                  </div>
                </li>
              </ul>

              <button class="btn btn-outline-transparent mx-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                  viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>

              <span class="glyphicon glyphicon-search form-control-feedback"></span>
              
              <a href="#"><img src={User} className="user-icon" alt="" /> </a>
            </div>
            </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default NavbarUser