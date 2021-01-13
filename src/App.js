import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import OrderPage from './pages/OrderPage'
import Home from './pages/Home'
import PaymentPage from './pages/PaymentPage'
import TicketResults from './pages/TicketResult'

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
            <Route path="/order-page" exact component={OrderPage} />
            <Route path="/payment-page" exact component={PaymentPage} />
            <Route path="/ticket-results" exact component={TicketResults} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;