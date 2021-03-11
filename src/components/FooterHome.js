import React, { Component } from 'react'
import LogoTickitzBottom from '../components/assets/tickitz2bottom.png'
import '../components/FooterHome.css'
import Sponsor1 from '../components/assets/sponsor1.png'
import Sponsor2 from '../components/assets/sponsor2.png'
import Sponsor3 from '../components/assets/sponsor3.png'
import IconFB from '../components/assets/icon_fb.png'
import IconIG from '../components/assets/icon_ig.png'
import IconTW from '../components/assets/icon_tw.png'
import IconYT from '../components/assets/icon_yt.png'

function FooterHome () {
    return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
            <a className='logoloc' href="#"><img src={LogoTickitzBottom} alt="Logo Tickitz"/></a>
            </div>
            <div className="row">
              <p className="slogantext">Stop waiting in line, Buy tickets <br>
              </br> conveniently, watch movies quietly</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <p className="explore"><b>Explore</b></p>
            </div>
            <div className="row">
              <a className="footer-font" href="#">Cinemas</a>
            </div>
            <div className="row">
              <a className="footer-font" href="#">Movies List</a>
            </div>
            <div className="row">
              <a className="footer-font" href="#">My Ticket</a>
            </div>
            <div className="row">
              <a className="footer-font" href="#">Notification</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <p className="our-sponsor"><b>Our Sponsor</b></p>
              <br></br>
            </div>
            <div className="row">
              <a href="#" className="sponsor"><img src={Sponsor1} alt=""/> </a>
            </div>
            <div className="row">
              <a href="#" className="sponsor"><img src={Sponsor2} alt=""/> </a>
            </div>
            <div className="row">
              <a href="#" className="sponsor"><img src={Sponsor3} alt=""/> </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <p className="follow-us"><b>Follow Us</b></p>
              <br></br>
            </div>
            <div className="row">
              <a href="#" className="footer-font"><img src={IconFB} alt=""/> Tickitz Cinema id</a>
            </div>
            <div className="row">
              <a href="#" className="footer-font"><img src={IconIG} alt=""/> tickitz.id</a>
            </div>
            <div className="row">
              <a href="#" className="footer-font"><img src={IconTW} alt=""/> tickitz.id</a>
            </div>
            <div className="row">
              <a href="#" className="footer-font"><img src={IconYT} alt=""/> Tickitz Cinema id</a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center footer-tickitz">© 2020 Tickitz, All Rights Reserved.</p>
    </React.Fragment>
    )
}

export default FooterHome