import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Ebv from '../components/assets/sponsor1.png'
import Cineone from '../components/assets/sponsor2.png'
import Hiflix from '../components/assets/sponsor3.png'
import './CardMovie.css'

class CardMovie extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid cardticket shadow p-4'>
          <div className='row'>
            <div className='col'>
              <img src={Ebv} alt="logo EBV" />
            </div>
            <div className='col'>
              <h5>ebv.id</h5>
              <p>Whatever street No.12, South Purwokerto</p>
            </div>
          </div>
          <hr></hr>
          <div className='row'>
            <div className='col'>
              <p>08:30</p>
            </div>
            <div className='col'>
              <p>10:30</p>
            </div>
            <div className='col'>
              <p>12:00</p>
            </div>
            <div className='col'>
              <p>14:00</p>
            </div>
          </div>
          <div className='row'>
          <div className='col'>
              <p>04:30</p>
            </div>
            <div className='col'>
              <p>07:00</p>
            </div>
            <div className='col'>
              <p>08:30</p>
            </div>
            <div className='col'>
              <p></p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>Price</p>
            </div>
            <div className='col'>
              <p>$10.00/seat</p>
            </div>
          </div>
          <div className='row'>
          <div className='col'>
          <button className='btn btn-primary buttoncard'><Link to='/order-page' className='white-text'>Book now</Link></button>
            </div>
            <div className='col'>
            <a className=''>Add to cart</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default CardMovie