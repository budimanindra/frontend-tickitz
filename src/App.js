import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import MovieDetail from './pages/MovieDetail'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import OrderPage from './pages/OrderPage'
import Home from './pages/Home'
import PaymentPage from './pages/PaymentPage'
import TicketResults from './pages/TicketResult'
import AdminPage from './pages/AdminPage'
import ProfilePage from './pages/ProfilePage'


import {Provider} from 'react-redux'

import PrivateRoute from './components/PrivateRoute'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie-detail/:id" exact component={MovieDetail} />
            <Route path="/movie-details/:id" exact component={MovieDetails} />
            <Route path="/sign-in" exact component={SignIn} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/order-page" exact component={OrderPage} />
            <Route path='/ticket-results' exact Component={TicketResults} />
            <Route path='/profile' exact Component={ProfilePage} />
            <PrivateRoute path="/payment-page" privateComponent={PaymentPage} />
            <PrivateRoute path="/admin-page" privateComponent={AdminPage} />

          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;