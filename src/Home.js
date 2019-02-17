import React, { Component } from 'react';
import './Home.css';
import Slider from "react-slick";
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (

      <div className="App">
        <div className="container-hero">
          <div class="hero-texto">Tvättenergi</div>
        </div>



        <h1 className="text2">Våra tjänster</h1>
        <header className="App-header">
        </header>

        <div className="slider-container">
          <Slider {...settings}>
          <div className="image1">
            <img className="img-card"src="restaurangTextile.jpg" alt="restaurangtextile"/>

            <p className="hotel-description">
            <p className="hotel-textile-title">Hotell och Restaurangtextiler</p>När man kommer till ett hotell eller restaurang är man
             ute efter den där lyxiga känslan. Med våra mjuka, snyggt vikta frottéhanddukar
              och krispiga, rena lakan och exklusiva linneservetter och dukar gör så att det
               är just det bemötandet era gäster får!</p>
          </div>
          <div className="image1">
            <img className="img-card"src="workclother1.jpg" alt="workclother"/>
            <p className="hotel-description">
            <p className="hotel-textile-title">Arbetskläder</p>Funktion, säkerhet och bekvämlighet
             samt slitstyrka är exempel på krav som du ska ställa på ett yrkesplagg. Berätta vad du
             behöver så hjälper vi dig på bästa sätt! Att välja rätt yrkesplagg för olika arbetsuppgifter
             </p>
          </div>
          <div className="image1">
            <img className="img-card"src="carpet3.jpg" alt="carpet"/>
            <p className="hotel-description">
            <p className="hotel-textile-title">Entrémattor</p>Vi på Tvättenergi erbjuder slitstarka entrémattor
             till alla företag, vilken bransch du än jobbar i. Våra entrémattor är speciellt framtagna för att
             skona golven. Smuts och väta samlas effektivt upp. Men våra entrémattor gör mycket mer än så.
             De ger ett snyggt intryck, välkomnar besökare och leder dem rätt i lokalen.
             Och de kan stärka er profil med unik form och design.</p>

          </div>
        </Slider>

        </div>


        <h1 className="text2">Kontakta oss</h1>

        <div className="form-containers-container">
        <form className="form-container">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputname">Namn:</label>
              <input type="name" className="form-control" id="name" placeholder="Namn"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputLastname">Efternamn:</label>
              <input type="lastname" className="form-control" id="inputLastname" placeholder="Efternamn"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPhone">Tel:</label>
              <input type="phone" className="form-control" id="inputPhone" placeholder="Tel"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4">Tjänster:</label>
              <select id="inputState" className="form-control">
                <option selected>Välj tjänster</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail">E-post:</label>
              <input type="Email" className="form-control" id="Email" placeholder="E-post"/>
            </div>
            <div className="form-group col-md-6">
              <label for="Ovrigt">Övrigt:</label>
              <input type="Ovrigt" className="form-control" id="Ovrigt" placeholder="Övrigt"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
            </div>
            <div className="form-group col-md-6">
            </div>
            <div className="form-group col-md-2">
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
            </div>
          </div>
          <button type="submit" className="button-kontakta btn btn-primary">Kontakta oss</button>
        </form>
        </div>
        </div>
        );
      }
    }

export default Home;
