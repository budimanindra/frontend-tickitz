import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import DetailMovie from '../components/DetailMovie'
import ShowTimesTicket from '../components/ShowTimesTicket'
import FooterHome from '../components/FooterHome'
import http from '../helpers/http'
import Moment from 'react-moment'


class MovieDetails extends Component {

  state = {
    errorMsg: '',
    movie: {

    }
  }

  getDetailMovie = async (id) => {
    try {
      const result = await http().get(`/movies/${id}`)
      this.setState({
        errorMsg: '',
        movie: result.data.results
      })
    } catch (err) {
      this.setState({
        errorMsg: err.response.message,
        movie: {}
      })
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.getDetailMovie(id)
  }

  render() {
    return (
      <React.Fragment>
        <NavbarUser />
        <div className='container-fluid margin-top-detail'>
          <div className='row'>

            <div className='col-md-3 mb-5'>
              <div className="cardbox shadow-lg margin-col-image">
                <img src={this.state.movie.image} className='movie-image' />
              </div>
            </div>

            <div className='col-md-9'>
              <h3 className="margin-col-description">{this.state.movie.name}</h3>
              <p className="margin-col-description">{this.state.movie.genreName}</p>

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
                <Moment format='MMMM, D YYYY'>{this.state.movie.releaseDate}</Moment>
                </div>
                <div className='col'>
                  {this.state.movie.directedBy}
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
                  {this.state.movie.duration} minutes
                </div>
                <div className='col'>
                  {this.state.movie.castName}
                </div>
              </div>

              <hr className="margin-col-description"></hr>

              <h5 className="margin-col-description">
                Synopsis
              </h5>

              <p className="margin-col-description text-justify mr-5">
                {this.state.movie.synopsis}
              </p>

            </div>

          </div>

        </div>

        <div className='row d-flex justify-content-center font-weight-bold mt-5'>Showtimes and Tickets</div>

        <div className='row showlocdate'>
          <div className="col dropdown">
            <a className="btn btn-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              21/07/20</a>
          </div>
          <div className="col dropdown">
            <a className="btn btn-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Purwokerto</a>
          </div>
        </div>
        <ShowTimesTicket />
        <p className='text-center text-view'>view more</p>
        <FooterHome />
      </React.Fragment>
    )
  }
}

export default MovieDetails