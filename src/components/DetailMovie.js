import React, { Component } from 'react'
// import {Button} from 'react-bootstrap'
import MovieImage from '../components/assets/card1.png'
import './movie-image.css'

class DetailMovie extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid margin-top-detail'>
          <div className='row'>

            <div className='col-md-3'>
              <div className="cardbox shadow-lg margin-col-image">
                <img src={MovieImage} className='movie-image' />
              </div>
            </div>

            <div className='col-md-9'>
              <h3 className="margin-col-description">Spider-Man: Homecoming</h3>
              <p className="margin-col-description">Adventure, Action, Sci-Fi</p>

              <div className='row margin-col-description'>
                <div className='col'>
                  Release date
                </div>
                <div className='col'>
                  Directed by
                </div>
              </div>
              <div className='row margin-col-description'>
                <div className='col'>
                  June 28, 2017
                </div>
                <div className='col'>
                  Jon Watts
                </div>
              </div>

              <br></br>

              <div className='row margin-col-description'>
                <div className='col'>
                  Duration
                </div>
                <div className='col'>
                  Casts
                </div>
              </div>
              <div className='row margin-col-description'>
                <div className='col'>
                  2 Hours 13 minutes
                </div>
                <div className='col'>
                  Tom Holland, Michael Keaton, Robert Downey Jr., ...
                </div>
              </div>

              <hr className="margin-col-description"></hr>

              <h5 className="margin-col-description">
                Synopsis
              </h5>

              <p className="margin-col-description text-justify mr-5">
                Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. 
              </p>

            </div>

          </div>

        </div>
      </React.Fragment >
    )
  }
}

export default DetailMovie