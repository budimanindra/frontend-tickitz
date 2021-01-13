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
                <button className='btn btn-light my-auto mr-4'><Link to='/'>Change Movie</Link></button>
              </div>

              <MovieSeat/>

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