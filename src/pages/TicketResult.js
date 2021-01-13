import React, {Component} from 'react'
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/FooterHome'

class TicketResults extends Component {
    render(){
        return(
            <React.Fragment>
                <NavbarUser/>
                <div className='container-fluid bg-light order-page-margin'>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default TicketResults