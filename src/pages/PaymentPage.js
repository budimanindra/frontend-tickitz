import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import '../components/order-page/order-page.css'
import FooterHome from '../components/FooterHome'

class PaymentPage extends Component {
    render() {
        return (
        <React.Fragment>
            
                <div className='container bg-success shadow'>
                    <div className='row'>
                        <div className='col-md-8'>
                        <p>Payment Info</p>
                            <div className='container bg-danger shadow'>
                                <div className='row'>
                                    <div className='col'>
                                        <p>Date Time</p>
                                    </div>
                                    <div className='col'>
                                        <p>Tuesday, 07 July 2020 at 02:00pm</p>
                                    </div>
                                </div>
                                <hr></hr>

                                <div className='row'>
                                    <div className='col'>
                                        <p>Movie title</p>
                                    </div>
                                    <div className='col'>
                                        <p>Spider-Man: Homecoming</p>
                                    </div>
                                </div>
                                <hr></hr>

                                <div className='row'>
                                    <div className='col'>
                                        <p>Cinema name</p>
                                    </div>
                                    <div className='col'>
                                        <p>CineOne21 Cinema</p>
                                    </div>
                                </div>
                                <hr></hr>

                                <div className='row'>
                                    <div className='col'>
                                        <p>Number of tickets</p>
                                    </div>
                                    <div className='col'>
                                        <p>3 pieces</p>
                                    </div>
                                </div>
                                <hr></hr>

                                <div className='row'>
                                    <div className='col'>
                                        <p>Total payment</p>
                                    </div>
                                    <div className='col'>
                                        <p>$30,00</p>
                                    </div>
                                </div>
                                <hr></hr>

                            </div>
                        </div>

                        <div className='col-md-4'>
                        <p>Personal Info</p>
                            <div className='container bg-warning shadow'>
                                <div className='row d-flex justify-content-center'>
                                    <div className="form-group">
                                        <label for="exampleInputFullName1"><b>Full Name</b></label>
                                        <input type="password" className="form-control" placeholder="Jonas El Rodriguez" />
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div className="form-group">
                                        <label for="exampleInputEmail2"><b>Email</b></label>
                                        <input type="email" className="form-control" placeholder="jonasrodri123@gmail.com" />
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div class="input-group">
                                        <span class="input-group-text">+62</span>
                                        <input type="email" className="form-control" placeholder="jonasrodri123@gmail.com" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <FooterHome />
        </React.Fragment>
    )
  }
}

export default PaymentPage