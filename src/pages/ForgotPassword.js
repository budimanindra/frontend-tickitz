import React, { Component } from 'react'
import LogoTickitz from '../components/LogoTickitz'
import '../components/forgot-pass/forgot-pass.css'


class ForgotPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-7 bg-infinity'>
              <LogoTickitz />
              <h1 className='title-md title-ml'>Lets reset your password</h1>
              <p className='description-md title-ml'>To be able to use your account again, please<br>
              </br>complete the following steps</p>

              <a className="btn btn-light button-sign-up disable" href="#">1</a>
              <span className="text-button1 white-text">Fill your complete email</span>
              <p className="line"></p>
              <a className="btn btn-transparent button-sign-up disable white-text" href="#">2</a>
              <span className="text-button1 white-text">Activate your email</span>
              <p className="line"></p>
              <a className="btn btn-transparent button-sign-up disable white-text" href="#">3</a>
              <span className="text-button1 white-text">Enter your new password</span>
              <p className="line"></p>
              <a className="btn btn-transparent button-sign-up disable white-text" href="#">4</a>
              <span className="text-button1 white-text">Done</span>

            </div>


            <div className='col-md-5'>
              <form>
                <h5 className='text3-forgotpassword'>Fill your additional details</h5>
                <p>we'll send a link to your email shortly</p>
                <div className="form-group margin-email-forgotpassword">
                  <label for="exampleInputEmail1"><b>Email</b></label>
                  <input type="email" className="form-control" placeholder="Write your email" />
                </div>
                <button type="submit" className="btn button4-forgotpassword mb-5">Activate now</button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ForgotPassword