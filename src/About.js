import React, { Component } from 'react';
import './About.css';

class About extends Component{
  render(){
    return(
      <div>
        <h1 className="Welcome-text">Om oss</h1>
        <div className="miljö-background">
          <div>
          <div className="miljo-text">
          </div>
            <img className="image-miljo"src="miljöTröja.jpg" alt="workclother"/>
          </div>
        </div>
        <div className="om-oss-text">
          <span>
          Gör det du gör bäst – det gör vi!
          Tvättenergi är ett familjeägt textiltvätteri i Årsta som ingår
          i Rikstvätt. Vår ambition är att göra Er verksamhet inom hotell,
          konferens eller restaurang enklare, lönsammare och effektivare.
          Vår affärsidé är att hyra ut textilier i bästa kvalitet, till ett
          bra koncept som passar Er. Behöver du komfortabla, snygga och fräscha
          bäddtextilier, bordslinne, arbetskläder eller entrémattor står vi gärna
          till tjänst! Bli vår kund och du kan tryggt fokusera på det du gör bäst,
          och veta att vi gör detsamma. Fokusera på din verksamhet – inte tvätten! Den tar vi hand om.
          </span>
        </div>
      </div>

    )
  }
}


export default About;
