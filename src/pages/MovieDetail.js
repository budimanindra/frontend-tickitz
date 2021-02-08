import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getMovie, getShowDate, getShowLocation, getAvailCinema } from '../redux/actions/movie'
import http from '../helpers/http'
import NavbarUser from '../components/NavbarUser'
import ShowTimesTicket from '../components/ShowTimesTicket'
import FooterHome from '../components/FooterHome'

import 'bootstrap/dist/css/bootstrap.min.css'


class MovieDetail extends Component {
  state = {
    selectedDate: null,
    selectedLocation: null,
    selectedShowtime: null,
    finish: false,
  }

  movieDetailFormat = data => {
    const releaseDatetime = data.releaseDate.split('T')
    const endDatetime = data.endDate.split('T')
    data.releaseDate = releaseDatetime[0]
    data.endDate = endDatetime[0]
    const durationTime = data.duration.split(':')
    data.duration = `${Number(durationTime[0])} hours ${durationTime[1]} minutes`
    return data
  }

  generateListDate = data => {
    let listDate = []
    let releaseDate = data.releaseDate
    let endDate = data.endDate
    let strDate = releaseDate
    let index = 1
    let dateMove = new Date(releaseDate)

    while (strDate < endDate) {
      strDate = dateMove.toISOString().slice(0, 10)
      let dateObject = { id: index, readable: strDate }
      listDate.push(dateObject)
      dateMove.setDate(dateMove.getDate() + 1)
      index++
    }
    return listDate
  }

  async componentDidMount() {

    const { id } = this.props.match.params
    const resultsDetailMovie = await http().get(`/movies/${id}`)
    const dataMovie = this.movieDetailFormat(resultsDetailMovie.data.results)
    this.props.getMovie(dataMovie)

    const showDate = this.generateListDate(dataMovie)
    this.props.getShowDate(showDate)

    const resultsCity = await http().get(`/cities`)
    this.props.getShowLocation(resultsCity.data.results)
  }


  getCinemaByCondition = async (id, date, city) => {
    const resultsCinema = await http().get(`/cinemas?id=${id}&date=${date}&city=${city}`)
    this.props.getAvailCinema(resultsCinema.data.results)
  }

  componentDidUpdate() {
    const { selectedDate, selectedLocation, finish } = this.state
    if (selectedDate !== null && selectedLocation !== null && !finish) {
      this.setState({ finish: true }, () => {
        this.getCinemaByCondition(
          this.props.movie.details.id,
          this.props.movie.showDate[Number(selectedDate) - 1].readable,
          this.props.movie.showLocation[Number(selectedLocation) - 1].name
        )
      })
    }
  }
  book = (idShowtime) => {
    this.props.history.push(`/order/${idShowtime}`)
  }
  render() {
    if (!this.props.movie.isLoading) {
      return (
        <div>
          <NavbarUser />
          <div className='container-fluid margin-top-detail'>
            <div className='row'>
              <div className='col-md-3 mb-5'>
                <div className="cardbox shadow-lg margin-col-image">
                  <img src={this.props.movie.details.image} className='movie-image' />
                </div>
              </div>
              <div className='col-md-9'>
                <h3 className="margin-col-description">{this.props.movie.details.name}</h3>
                <p className="margin-col-description">{this.props.movie.details.genreName}</p>
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
                    <>{this.props.movie.details.releaseDate}</>
                  </div>
                  <div className='col'>
                    {this.props.movie.details.directedBy}
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
                    {this.props.movie.details.duration}
                  </div>
                  <div className='col'>
                    {this.props.movie.details.castName}
                  </div>
                </div>
                <hr className="margin-col-description"></hr>
                <h5 className="margin-col-description">
                  Synopsis
              </h5>
                <p className="margin-col-description text-justify mr-5">
                  {this.props.movie.details.synopsis}
                </p>
              </div>
            </div>
          </div>

          <div className='row d-flex justify-content-center font-weight-bold mt-5'>Showtimes and Tickets</div>
          <div className='row'>
            <div className="col">
              <FormControl onChange={e => this.setState({ selectedDate: e.target.value })} as="select" name="selected-date">
                {this.props.movie.isDateLoading &&
                  <option style={{ display: 'none' }}>Loading...</option>
                }
                {!this.props.movie.isDateLoading &&
                  <React.Fragment>
                    <option style={{ display: 'none' }}>Select available date</option>
                    {this.props.movie.showDate.map(date => (
                      <React.Fragment>
                        <option value={date.id}>{date.readable}</option>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                }
              </FormControl>
            </div>

            <div className="col">
              <FormControl onChange={e => this.setState({ selectedLocation: e.target.value })} as="select" name="selected-location">
                {this.props.movie.isLocationLoading &&
                  <option style={{ display: 'none' }}>Loading...</option>
                }
                {!this.props.movie.isLocationLoading &&
                  <React.Fragment>
                    <option style={{ display: 'none' }}>Select available location</option>
                    {this.props.movie.showLocation.map(location => (
                      <React.Fragment>
                        <option value={location.id}>{location.name}</option>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                }
              </FormControl>
            </div>
          </div>

          <ShowTimesTicket />
          <p className='text-center text-view'>view more</p>
          <FooterHome />



          {/*  */}



          {/* <p>{this.props.movie.details.image}</p> */}
          {/* {JSON.stringify(this.props.movie.details)}
          <FormControl onChange={e => this.setState({ selectedDate: e.target.value })} as="select" name="selected-date">
            {this.props.movie.isDateLoading &&
              <option style={{ display: 'none' }}>Loading...</option>
            }
            {!this.props.movie.isDateLoading &&
              <React.Fragment>
                <option style={{ display: 'none' }}>Select available date</option>
                {this.props.movie.showDate.map(date => (
                  <React.Fragment>
                    <option value={date.id}>{date.readable}</option>
                  </React.Fragment>
                ))}
              </React.Fragment>
            }
          </FormControl>

          <FormControl onChange={e => this.setState({ selectedLocation: e.target.value })} as="select" name="selected-location">
            {this.props.movie.isLocationLoading &&
              <option style={{ display: 'none' }}>Loading...</option>
            }
            {!this.props.movie.isLocationLoading &&
              <React.Fragment>
                <option style={{ display: 'none' }}>Select available location</option>
                {this.props.movie.showLocation.map(location => (
                  <React.Fragment>
                    <option value={location.id}>{location.name}</option>
                  </React.Fragment>
                ))}
              </React.Fragment>
            }
          </FormControl>

          {this.props.movie.isCinemaLoading &&
            <React.Fragment>
              Loading cinema list...
            </React.Fragment>
          }
          {!this.props.movie.isCinemaLoading &&
            <React.Fragment>
              {this.props.movie.availCinema.map(cinema => (
                <React.Fragment>
                  <div>
                    <div>{cinema.cinemaName}</div>
                    <div>{cinema.time.map(time => {
                      return (
                        <React.Fragment>
                          <button className="btn btn-sm btn-primary" onClick={() => this.setState({ selectedShowtime: time.id })}>
                            {time.name}
                          </button>{' '}
                        </React.Fragment>
                      )
                    })}</div>
                    <button className="btn btn-primary" onClick={()=>this.book(this.state.selectedShowtime)}>
                    Book Now
                </button>
                    <Link className={`btn btn-primary ${this.state.selectedShowtime === null && 'disabled'}`} to={`/order/${this.state.selectedShowtime}`}>Book Now</Link>
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          } */}
        </div>
      )
    } else {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  movie: state.movie
})

const mapDispatchToProps = {
  getMovie,
  getShowDate,
  getShowLocation,
  getAvailCinema
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)