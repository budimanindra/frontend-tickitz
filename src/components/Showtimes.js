import React, { Component } from 'react'
import './Showtimes.css'
import CardMovie from './CardMovie'

class Showtimes extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <p className='showtimes'>Showtimes and Tickets</p>

          <div className='row showlocdate'>
            <div className="col dropdown">
              <a class="btn btn-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                21/07/20
                        </a>
            </div>
            <div className="col dropdown">
              <a class="btn btn-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Purwokerto
                        </a>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col'>
              <CardMovie />
            </div>
            <div className='col'>
              <CardMovie />
            </div>
            <div className='col'>
              <CardMovie />
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col'>
              <CardMovie />
            </div>
            <div className='col'>
              <CardMovie />
            </div>
            <div className='col'>
              <CardMovie />
            </div>
          </div>

        </div>
        <p className='text-center text-view'>view more</p>
      </React.Fragment>
    )
  }
}

export default Showtimes