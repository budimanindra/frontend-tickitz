import React from 'react'
// import CardMovie from './CardMovie'
// import Ebv from '../components/assets/sponsor1.png'
// import Cineone from '../components/assets/sponsor2.png'
// import Hiflix from '../components/assets/sponsor3.png'

const binatangs = [
  {
    nama: 'kuda',
    harga: 12000
  },
  {
    nama: 'ayam',
    harga: 10000
  },
  {
    nama: 'sapi',
    harga: 15000
  },
]

const MapMovie = () => {
  return (
    <div>
      <h1>Map</h1>
      <div className='container-fluid'>
        <div className='row mt-5'>
          <div className='col'>
            {/* <ul> */}
            {binatangs.map((binatang) => (
              <li>{binatang.nama} {binatang.harga}</li>
            )
            )}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapMovie
