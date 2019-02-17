import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <>
      <div className="footer-container">
      <div className="footer-tvattenergi-text">Tvättenergi AB</div>
        <div className="footer-text">
          <div>Postadress:</div>
          <div>Box 38154</div>
          <div>100 64 Årsta</div>
        </div>
        <div className="footer-text">
          <div>Besöksadress:</div>
          <div>Box Byängsgränd 6 13</div>
          <div>118 53 Årsta</div>
        </div>
        <div className="footer-text">
          <div>Öppettider:</div>
          <div>Mån-fre:</div>
          <div>08:00-17:00</div>
        </div>
        <div className="footer-text">
          <div>Kundservice:</div>
          <div><a  className="mail-text" href="mailto:granlundcaroline@gmail.com" target="_top">granlundcaroline@gmail.com</a></div>
          <div> Tel: <a className="number" href="tel:+46738350555">0738350555</a></div>
        </div>
      </div>

      <div>
      <div className="icon-container">
        <div className="icon">
        <a href="#"><i className="fab fa-facebook-square"></i></a>
        </div>
        <div className="icon">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="icon">
        <a href="https://www.youtube.com/?hl=sv&gl=SE" target="_blank"><i className="fab fa-youtube"></i></a>
        </div>
        </div>
      </div>


</>
    )
  }
}


export default Footer;
