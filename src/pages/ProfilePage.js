import React, { Component } from 'react'
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/FooterHome'
import User from '../components/assets/user2.png'
import LoyaltyPoint from '../components/assets/loyaltypoint.png'

class ProfilePage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarUser />

        <div className='container bg-dark order-page-margin'>
          <div className='row'>
            <div className='col-md-4 shadow bg-light'>
              <div className='container mt-5 mb-5 bg-primary'>
                <div className='row'>
                  <div className='col d-flex justify-content-start'>
                    <p><small>INFO</small></p>
                  </div>
                  <div className='col d-flex justify-content-end'>
                    ...
                  </div>
                </div>
                <div className='row d-flex justify-content-center mt-2'>
                  <img src={User} alt="User" />
                </div>
                <div className='row d-flex justify-content-center mt-2'>
                  <p className='font-weight-bold'>Jonas El Rodriguez</p>
                </div>
                <div className='row d-flex justify-content-center'>
                  <p><small>moviegoers</small></p>
                </div>
                <hr></hr>
                <div className='row d-flex justify-content-start ml-1'>
                  <p className='font-weight-bold'>Loyalty Points</p>
                </div>
                <div className='row d-flex justify-content-center mt-2'>
                  <img src={LoyaltyPoint} alt="" />
                </div>
              </div>
            </div>
            <div className='col-md-8 shadow'>
              <div className='container bg-success'>
                lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet
            </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    )
  }
}

export default ProfilePage