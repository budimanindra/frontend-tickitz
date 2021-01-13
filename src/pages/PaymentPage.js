import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import '../components/payment-page/payment-page.css'
import FooterHome from '../components/FooterHome'
import PayGoogle from '../components/assets/paygpay.png'
import PayGopay from '../components/assets/paygopay.PNG'
import PayVisa from '../components/assets/payvisa.png'
import PayPaypal from '../components/assets/paypaypal.png'
import PayDana from '../components/assets/paydana.png'
import PayBCA from '../components/assets/paybca.png'
import PayBRI from '../components/assets/paybri.png'
import PayOvo from '../components/assets/payovo.png'


class PaymentPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarUser />

        <div className='container order-page-margin'>
          <div className='row'>
            <div className='col-md-8'>
              <p class='h5 font-weight-bold mb-3'>Payment Info</p>
              <div className='container shadow'>
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
              <p class='h5 font-weight-bold mb-3'>Personal Info</p>
              <div className='container p-3 shadow'>
                <div className='row d-flex justify-content-center'>
                  <div className="form-group">
                    <label for="exampleInputFullName1">Full Name</label>
                    <input type="password" className="form-control" placeholder="Jonas El Rodriguez" />
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                  <div className="form-group">
                    <label for="exampleInputEmail2">Email</label>
                    <input type="email" className="form-control" placeholder="jonasrodri123@gmail.com" />
                  </div>
                </div>

                
                <label className='ml-5'>Phone Number</label>
                <div class="input-group special mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">+62</span>
                  </div>
                  <input type="text" class="form-control" placeholder="81445687121" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>

                <div class="alert alert-warning" role="alert">
                  Fill your data correctly!
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-8'>
              <p className='h5 font-weight-bold mt-5 mb-3'>Choose a payment method</p>
              <div className='container shadow text-center p-5'>
                <div className='row'>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayDana} alt="Visa Payment" />
                    </button>
                  </div>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayBCA} alt="Visa Payment" />
                    </button>
                  </div>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayBRI} alt="Visa Payment" />
                    </button>
                  </div>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayOvo} alt="Visa Payment" />
                    </button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayGoogle} alt="Visa Payment" />
                    </button>
                  </div>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayVisa} alt="Visa Payment" />
                    </button>
                  </div>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayGopay} alt="Visa Payment" />
                    </button>
                  </div>
                  <div className='col-md-3  d-flex justify-content-center'>
                    <button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                      <img src={PayPaypal} alt="Visa Payment" />
                    </button>
                  </div>
                </div>
                <p className='text-muted my-5 hr-sect'>or</p>
                <p>Pay via cash. <Link to='/sign-in' className='text-purple'>See how it work</Link></p>
              </div>
            </div>

            <div className='col-md-8 ml-2 d-flex justify-content-between mt-5'>
              <button className='btn btn-outline-primary order-page-button'><Link to='/' className='text-purple'>Change your movie</Link></button>
              <button className='btn btn-outline-primary order-page-button'><Link to='/ticket-results' className='text-purple'>Check out now</Link></button>
            </div>

          </div>
        </div>
        <FooterHome />
      </React.Fragment>
    )
  }
}

export default PaymentPage