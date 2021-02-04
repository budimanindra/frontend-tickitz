import React,{Component} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import './Register.css'

import {login} from '../redux/actions/auth'

class SignIn extends Component{
  state = {
    username: '',
    password: ''
  }
  submitData = (e)=> {
    e.preventDefault();
    const {username, password} = this.state
    this.props.login(username, password)
  }

  changeText = (event)=> {
    this.setState({[event.target.name]:event.target.value})
  }
  render(){
    return(
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Form onSubmit={this.submitData} className="form-register">
          <h1>Login</h1>
          {this.props.auth.errorMsg!== '' && <Alert variant="danger">{this.props.auth.errorMsg}</Alert>}
          <hr />
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" onChange={(event)=>this.changeText(event)} type="text" placeholder="Enter your username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={(event)=>this.changeText(event)} type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = {login}

export default connect(null, mapDispatchToProps)(SignIn)