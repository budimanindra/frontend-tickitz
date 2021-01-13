import React, { Component } from 'react'
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/FooterHome'
import LogoTickitz from '../components/assets/tickitzwhite.png'
import Bitmap from '../components/assets/bitmap.png'

class TicketResults extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarUser />
        
        <div className='container-fluid bg-light order-page-margin'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 shadow-lg text-center p-5'>
                <p className='text-center'>Proof of Payment</p>
              <div className='container shadow ticket-results-border'>
                <div className='row'>
                  <div className='col-md-5 d-flex align-items-start bg-purple rounded-top p-3'>
                    <img src={LogoTickitz} alt="Tickitz" />
                  </div>
                  <div className='col-md-2 d-flex align-items-center text-light justify-content-center bg-purple rounded-top p-3'>
                    Admit One
                  </div>
                  <div className='col-md-5 d-flex justify-content-center bg-purple rounded-top p-3'>
                    <img src={LogoTickitz} alt="Tickitz" />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-5'>
                    <div className='row ml-2'>
                    <p className='text-muted'><small>Movie</small></p>
                    </div>
                    <div className='row ml-2'>
                    <p className='font-weight-bold'>Spider-Man: Homecoming</p>
                    </div>
                  </div>
                  <div className='col-md-2'></div>
                  <div className='col-md-4'>
                    <div className='row ml-2'>
                    <p className='text-muted'><small>Movie</small></p>
                    </div>
                    <div className='row ml-2'>
                    <p className='font-weight-bold'>Spider-Man: Homecoming</p>
                    </div>
                  </div>
                  <div className='col-md-1 d-flex align-items-end'>
                  <img src={Bitmap} alt="Bitmap" />
                  </div>
                </div>
                
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Date</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>07 July</p>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Time</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>02:00 pm</p>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Category</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>PG-13</p>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Date</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>07 Jul</p>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Time</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>2:00 pm</p>
                    </div>
                  </div>
                  <div className='col-md-1 d-flex align-items-stretch'>
                  <img src={Bitmap} alt="Bitmap" />
                  </div>
                </div>


                <div className='row'>
                  <div className='col-md-3'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Count</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>3 pieces</p>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Seats</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>C4, C5, C6</p>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Price</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>$30.00</p>
                    </div>
                  </div>

                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Count</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>3 pcs</p>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Seats</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>C4, C5, C6</p>
                    </div>
                    <div className='row ml-2'>
                      <p className='text-muted'><small>Category</small></p>
                    </div>
                    <div className='row ml-2'>
                      <p className='font-weight-bold'>PG-13</p>
                    </div>
                  </div>
                  <div className='col-md-1 d-flex align-items-start'>
                  <img src={Bitmap} alt="Bitmap" />
                  </div>
                </div>
              </div>
              <div className='row d-flex justify-content-center'>
                <button type="button" class="btn btn-outline-dark mr-3 mt-5">Download</button>
                <button type="button" class="btn btn-outline-dark ml-3 mt-5 px-4">Print</button>
              </div>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default TicketResults