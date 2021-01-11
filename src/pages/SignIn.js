import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoTickitzLarge from '../components/LogoTickitzLarge'
import '../components/sign-in/sign-in.css'

class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-7 bg-infinity'>
              <LogoTickitzLarge/>
              <h1 className='title-lg'>wait, watch, wow!</h1>
            </div>


            <div className='col-md-5'>
              <form>
                <h1 className='text2signin'>Sign In</h1>
                <h5 className='text3signin'>Sign in with your data that you entered during your registration</h5>
                <div className="form-group">
                  <label for="exampleInputEmail1"><b>Email</b></label>
                  <input type="email" className="form-control" placeholder="Write your email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>Password</b></label>
                  <input type="password" className="form-control" placeholder="Write your password" />
                </div>
                <button type="submit" className="btn button4">Sign In</button>
              </form>

              <p className="text4">Forgot your password? <Link to='/forgot-password'>Reset now</Link></p>

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

export default SignIn