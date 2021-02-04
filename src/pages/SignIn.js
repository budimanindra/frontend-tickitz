import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import LogoTickitzLarge from '../components/LogoTickitzLarge'
import '../components/sign-in/sign-in.css'

import { connect } from 'react-redux'

import { login } from '../redux/actions/auth'

class SignIn extends Component {

  state = {
    username: '',
    password: ''
  }

  submitData = (e) => {
    e.preventDefault();
    const { username, password } = this.state
    this.props.login(username, password)
  }

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidUpdate() {
    if (this.props.auth.token) {
      const { from = null } = this.props.location.state
      console.log(`from:${from}`)
      this.props.history.push((from && from.pathname) || '/')
    }
  }

  

  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-7 bg-infinity'>
              <LogoTickitzLarge />
              <h1 className='title-lg'>wait, watch, wow!</h1>
            </div>


            <div className='col-md-5'>
              <form onSubmit={this.submitData}>
                <h1 className='text2signin'>Sign In</h1>
                <h5 className='text3signin'>Sign in with your data that you entered during your registration</h5>
                {this.props.auth.errorMsg !== '' && <Alert variant='danger'>{this.props.auth.errorMsg}</Alert>}
                <div className="form-group">
                  <label for="exampleInputEmail1"><b>Email</b></label>
                  <input name="username" type="email" className="form-control" onChange={(event) => this.changeText(event)} placeholder="Write your email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>Password</b></label>
                  <input name="password" type="password" className="form-control" onChange={(event) => this.changeText(event)} placeholder="Write your password" />
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

const mapStateToProps = state => (
  { auth: state.auth }
)

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)