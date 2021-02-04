import React, { Component } from 'react'
import NavbarUser from '../components/NavbarUser'
import MovieImage from '../components/assets/card1.png'
import Ebv from '../components/assets/sponsor1.png'
import Cineone from '../components/assets/sponsor2.png'
import Hiflix from '../components/assets/sponsor3.png'



class AdminPage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarUser />
                <div className='container order-page-margin'>
                    <div className='row bg-danger'>
                        <div className='col-md-8'>
                            <p className='font-weight-bold h5'>Movie Description</p>
                            <div className='row'>
                                <div className='col-md-5 bg-primary'>
                                    <div className='card p-4 m-3 rounded'>
                                        <img src={MovieImage} className='admin-page-movie-image' />
                                    </div>
                                </div>
                                <div className='col-md-7 mt-3 bg-success'>
                                    <p>Movie Name</p>
                                    <div class='card mb-3'>
                                        <div class='card-body'>
                                            <p class='card-text text-black text-left'>Spider-Man: Homecoming</p>
                                        </div>
                                    </div>
                                    <p>Category</p>
                                    <div class='card mb-3'>
                                        <div class='card-body'>
                                            <p class='card-text text-black text-left'>Action, Adventure, Sci-Fi</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p>Release Date</p>
                                            <div class='card'>
                                                <div class='card-body'>
                                                    <p class='card-text text-black text-left'>07/05/2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <p>Duration (hour/minute)</p>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div class='card '>
                                                        <div class='card-body'>
                                                            <p class='card-text text-black'>2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col'>
                                                    <div class='card '>
                                                        <div class='card-body'>
                                                            <p class='card-text text-black'>13</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <p>Director</p>
                                    <div class='card'>
                                        <div class='card-body'>
                                            <p class='card-text text-black text-left'>Jon Watts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <p>Casts</p>
                                    <div class='card'>
                                        <div class='card-body'>
                                            <p class='card-text text-black text-left'>Tom Holland, Michael Keaton, Robert Dow..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p>Synopsis</p>
                                    <div class='card mb-3'>
                                        <div class='card-body'>
                                            <p class='card-text text-black text-left'>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p className='font-weight-bold h5'>Premiere Location</p>
                            <div className='row bg-warning'>
                                <div class='card m-4'>
                                    <div class='card-body'>
                                        <p class='card-text text-black text-left'>Purwokerto</p>
                                    </div>
                                </div>
                            <div className='row'>
                                <div className='col-md-4'>
                                    
                                </div>
                                <div className='col-md-4'>
                                    
                                </div>
                                <div className='col-md-4'>
                                    
                                </div>
                            </div>
                            </div>
                            <p className='font-weight-bold h5 mt-3'>Showtimes</p>
                            <div className='row bg-dark'>
                                <p>lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row bg-warning'>
                        <div className='col-md-8'>
                            <p className='font-weight-bold h5'>Sales Charts</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AdminPage
