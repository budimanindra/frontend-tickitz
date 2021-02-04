import React from 'react'
import { Link } from 'react-router-dom'
import './CardMovie.css'


const CardMovie = (props) => {
    return(
        <div className='container-fluid cardticket shadow p-4'>
          <div className='row'>
            <div className='col'>
              <img src={props.cinemalogo} alt="logo EBV" />
            </div>
            <div className='col'>
              <h5>{props.cinema}</h5>
              <p>{props.location}</p>
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
            <a href='#'>Add to cart</a>
            </div>
          </div>
        </div>
    )
}

export default CardMovie