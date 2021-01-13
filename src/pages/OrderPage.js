import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import Sponsor from '../components/assets/sponsor2.png'
import '../components/order-page/order-page.css'
import FooterHome from '../components/FooterHome'
import sold from '../components/assets/sold.png'
import available from '../components/assets/available.png'
import lovenest from '../components/assets/lovenest.png'

class OrderPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarUser />
        <div className='container order-page-margin'>
          <div className='row'>
            <div className='col-md-8'>
              <p className='font-weight-bold'>Movie Selected</p>
            </div>
            <div className='col-md-4'>
              <p className='font-weight-bold'>Order Info</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>

            <div className='container'>
              <div className='col-md-8 d-flex justify-content-between p-3 shadow-sm'>
                <span className='font-weight-bold my-auto ml-4'>Spider-Man: Homecoming</span>
                <button className='btn btn-light my-auto mr-4'>change movie</button>
              </div>

              <p className='my-4 font-weight-bold'>Choose your seat</p>


              <div className='col-md-8 shadow text-center mb-2'>
                <p className='py-5'>Screen</p>
                <div className='row'>

                  <div className='col-md-12 d-flex justify-content-center bg-warning'>
                    <table>
                      <tr>
                        A
                              <td>
                          <input type="checkbox" className='m-1' value="A1" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A2" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A3" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A4" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A5" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A6" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A7" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <input type="checkbox" className='m-1' value="A8" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A9" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A10" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A11" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A12" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A13" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="A14" />
                        </td>
                      </tr>

                      <tr>
                        B
                    <td>
                          <input type="checkbox" className='m-1' value="B1" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B2" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B3" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B4" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B5" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B6" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B7" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <input type="checkbox" className='m-1' value="B8" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B9" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B10" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B11" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B12" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B13" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="B14" />
                        </td>
                      </tr>

                      <tr>
                        C
                    <td>
                          <input type="checkbox" className='m-1' value="C1" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C2" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C3" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C4" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C5" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C6" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C7" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <input type="checkbox" className='m-1' value="C8" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C9" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C10" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C11" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C12" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C13" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="C14" />
                        </td>
                      </tr>

                      <tr>
                        D
                    <td>
                          <input type="checkbox" className='m-1' value="D1" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D2" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D3" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D4" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D5" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D6" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D7" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <input type="checkbox" className='m-1' value="D8" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D9" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D10" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D11" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D12" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D13" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="D14" />
                        </td>
                      </tr>

                      <tr>
                        E
                    <td>
                          <input type="checkbox" className='m-1' value="E1" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E2" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E3" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E4" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E5" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E6" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E7" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <input type="checkbox" className='m-1' value="E8" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E9" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E10" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E11" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E12" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E13" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="E14" />
                        </td>
                      </tr>

                      <tr>
                        F
                        <td>
                          <input type="checkbox" className='m-1' value="F1" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F2" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F3" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F4" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F5" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F6" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F7" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <input type="checkbox" className='m-1' value="F8" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F9" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F10" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F11" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F12" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F13" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="F14" />
                        </td>
                      </tr>

                      <tr>
                        G
                        <td>
                          <input type="checkbox" className='m-1' value="G1" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G2" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G3" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G4" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G5" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G6" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G7" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <input type="checkbox" className='m-1' value="G8" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G9" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G10" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G11" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G12" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G13" />
                        </td>
                        <td>
                          <input type="checkbox" className='m-1' value="G14" />
                        </td>

                      </tr>
                      <tr>
                        <p className='m-1'></p>
                        <td>
                          <p className='mx-1'>1</p>
                        </td>
                        <td>
                          <p className='mx-1'>2</p>
                        </td>
                        <td>
                          <p className='mx-1'>3</p>
                        </td>
                        <td>
                          <p className='mx-1'>4</p>
                        </td>
                        <td>
                          <p className='mx-1'>5</p>
                        </td>
                        <td>
                          <p className='mx-1'>6</p>
                        </td>
                        <td>
                          <p className='mx-1'>7</p>
                        </td>
                        <p className='mx-1'></p>

                        <td>
                          <p className='mx-1'></p>
                        </td>


                        <td>
                          <p className='mx-1'></p>
                        </td>

                        <td>
                          <p className='mx-1'></p>
                        </td>

                        <td>
                          <p className='mx-1'>8</p>
                        </td>
                        <td>
                          <p className='mx-1'>9</p>
                        </td>
                        <td>
                          <p className='mx-1'>10</p>
                        </td>
                        <td>
                          <p className='mx-1'>11</p>
                        </td>
                        <td>
                          <p className='mx-1'>12</p>
                        </td>
                        <td>
                          <p className='mx-1'>13</p>
                        </td>
                        <td>
                          <p className='mx-1'>14</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div className='row'>
                  <p className='font-weight-bold ml-5'>Seating key</p>
                </div>
                <div className='row'>
                  <div className='col d-flex justify-content-center mb-5'>
                    <p>available</p>
                    <img src={available} className='mx-5' width='26px' height='26px' />
                    <p>lovenest</p>
                    <img src={lovenest} className='mx-5' width='26px' height='26px' />
                    <p>sold</p>
                    <img src={sold} className='mx-5' width='26px' height='26px' />
                  </div>
                </div>
              </div>
              <div className='col-md-8 d-flex justify-content-between mt-5'>
                <button className='btn btn-outline-primary order-page-button'>Change your movie</button>
                <button className='btn btn-outline-primary order-page-button'>Check out now</button>
              </div>
            </div>



            <div className='col-md-4 d-none d-md-block margin-order-info'>
              <div className='card shadow-lg p-3'>

                <div className='row d-flex justify-content-center'>
                  <img src={Sponsor} className='sponsor-dimension mt-3' alt="Sponsor CineOne21" />
                </div>

                <p className='h5 text-center font-weight-bold mb-4'>CineOne21 Cinema</p>

                <div className='row font-order-info'>
                  <div className='col'>
                    Movie selected
                  </div>
                  <div className='col d-flex justify-content-end font-weight-bold'>
                    Spider-Man: Homecoming
                    </div>
                </div>

                <div className='row font-order-info'>
                  <div className='col'>
                    Tuesday, 07 July 2020
                                    </div>
                  <div className='col d-flex justify-content-end font-weight-bold'>
                    02:00pm
                                    </div>
                </div>

                <div className='row font-order-info'>
                  <div className='col'>
                    One ticket price
                                    </div>
                  <div className='col d-flex justify-content-end font-weight-bold'>
                    $10
                                    </div>
                </div>

                <div className='row font-order-info'>
                  <div className='col'>
                    Seat choosed
                                    </div>
                  <div className='col d-flex justify-content-end font-weight-bold'>
                    C4, C5, C6
                                    </div>
                </div>

                <hr></hr>

                <div className='row font-order-info'>
                  <div className='col'>
                    Total Payment
                                    </div>
                  <div className='h4 col d-flex justify-content-end font-weight-bold'>
                    $30
                                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterHome />

      </React.Fragment>
    )
  }
}

export default OrderPage