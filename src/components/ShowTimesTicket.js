import React, { Component } from 'react'
import './Showtimes.css'
import CardMovie from './CardMovie'
import Ebv from '../components/assets/sponsor1.png'
import Cineone from '../components/assets/sponsor2.png'
import Hiflix from '../components/assets/sponsor3.png'

class ShowTimesTicket extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row mt-5'>
            <div className='col'>
              <CardMovie cinemalogo={Ebv} cinema='ebv.id' location='Whatever street No.12, South Purwokerto' />
            </div>
            <div className='col'>
              <CardMovie cinemalogo={Cineone} cinema='Cineone21' location='Downcare street  No. 21, East Purwokerto' />
            </div>
            <div className='col'>
              <CardMovie cinemalogo={Hiflix} cinema='hiflix Cineone' location='Colonel street No. 2, East Purwokerto' />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ShowTimesTicket