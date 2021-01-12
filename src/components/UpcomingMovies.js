import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import card1 from '../components/assets/card1.png'
import card4 from '../components/assets/card4.png'
import card5 from '../components/assets/card5.png'
import card6 from '../components/assets/card6.png'
import '../components/UpcomingMovies.css'

class UpcomingMovies extends Component {
  render() {
    return (

      <div className="container upcoming-movies-margin">
        <div className="row">
          <h5 className="font-weight-bolder">Upcoming Movies</h5>
          <button className="view-all2">view all</button>
        </div>

        <div className="row">
          <button type="button" className="btn btn-outline-primary upcoming-button">September</button>
          <button type="button" className="btn btn-outline-primary upcoming-button">October</button>
          <button type="button" className="btn btn-outline-primary upcoming-button">November</button>
          <button type="button" className="btn btn-outline-primary upcoming-button">Desember</button>
          <button type="button" className="btn btn-outline-primary upcoming-button">January</button>
          <button type="button" className="btn btn-outline-primary upcoming-button">February</button>
          <button type="button" className="btn btn-outline-primary upcoming-button">March</button>
          <button type="button" className="btn btn-outline-primary upcoming-button">April</button>
        </div>

        <div className="row mt-5">
          <div className="col-md">
            <div className="card-upcoming-movies shadow-lg">
              <img src={card1} />
              <p className="movie-title">Spider-Man</p>
              <p className="movie-genre">Adventure, Action, Sci-Fi</p>
              <button className="btn btn-outline-primary upcoming-button custom-text" type="button"><Link to='/movie-details'className='custom-text'>Details</Link></button>
            </div>
          </div>
          <div className="col-md">
            <div className="card-upcoming-movies shadow-lg">
              <img src={card5} className="" />
              <p className="movie-title">The Witches</p>
              <p className="movie-genre">Adventure, Comedy, Family</p>
              <button type="button" className="btn btn-outline-primary upcoming-button">Details</button>
            </div>
          </div>
          <div className="col-md">
            <div className="card-upcoming-movies shadow-lg">
              <img src={card4} className="" />
              <p className="movie-title">Tenet</p>
              <p className="movie-genre">Action, Sci-Fi</p>
              <button type="button" className="btn btn-outline-primary upcoming-button">Details</button>
            </div>
          </div>
          <div className="col-md">
            <div className="card-upcoming-movies shadow-lg">
              <img src={card6} />
              <p className="movie-title">Black Widow</p>
              <p className="movie-genre">Action, Adventure, Sci-Fi</p>
              <button type="button" className="btn btn-outline-primary upcoming-button">Details</button>
            </div>
          </div>
          <div className="col-md">
            <div className="card-upcoming-movies shadow-lg">
              <img src={card5} />
              <p className="movie-title">The Witches</p>
              <p className="movie-genre">Adventure, Comedy, Family</p>
              <button type="button" className="btn btn-outline-primary upcoming-button">Details</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default UpcomingMovies