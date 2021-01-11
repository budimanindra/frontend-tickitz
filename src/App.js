import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie-details" exact component={MovieDetails} />
            <Route path="/sign-in" exact component={SignIn} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;