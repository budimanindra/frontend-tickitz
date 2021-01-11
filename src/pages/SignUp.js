import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoTickitz from '../components/LogoTickitz'
import '../components/sign-up/sign-up.css'


class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-7 bg-infinity'>
              <LogoTickitz/>
              <h1 className='title-md title-ml'>Lets build your account</h1>
              <p className='description-md title-ml'>To be a loyal moviegoer and access all the features,<br>
              </br>your detail are required</p>

              <a className="btn btn-light button-sign-up disable" href="#">1</a>
              <span className="text-button1 white-text">Fill your additional details</span>
              <p className="line"></p>
              <a className="btn btn-transparent button-sign-up disable white-text" href="#">2</a>
              <span className="text-button1 white-text">Activate your account</span>
              <p className="line"></p>
              <a className="btn btn-transparent button-sign-up disable white-text" href="#">3</a>
              <span className="text-button1 white-text">Done</span>

            </div>


            <div className='col-md-5'>
              <form>
                <h5 className='text3'>Fill your additional details</h5>
                <div className="form-group ">
                  <label for="exampleInputEmail1"><b>Email</b></label>
                  <input type="email" className="form-control" placeholder="Write your email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>Password</b></label>
                  <input type="password" className="form-control" placeholder="Write your password" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" for="exampleCheck1">I agree to terms & conditions</label>
                </div>
                <button type="submit" className="btn button4">Join for free now</button>
              </form>

              <p className="text4">Do you already have an account?                             <Link to='/sign-in'>Log In</Link></p>

              <p className='or-center'>Or</p>

              <div className='button-sosmed'>
                <a className="btn btn-sm button5" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Google</a>
                <a className="btn btn-sm button6" href="#"><img src="https://img.icons8.com/fluent/16/000000/facebook-new.png" /> Facebook</a>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SignUp