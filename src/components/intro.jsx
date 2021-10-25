import React, {useContext} from "react";
import "./stars.scss";
import Typed from "react-typed";

import particles from '../../src/const/particle.js';
import Particles from 'react-particles-js';
import curriculum from "../assets/curriculum.pdf";
import curriculumIngles from "../assets/curriculumIngles.pdf";

import { FormattedMessage } from "react-intl";
import { langContext } from "../context/langContext";


const Intro = () => {

    const idioma = useContext(langContext);
   
    return (
      
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">

      <Particles params={particles} className="App-particles__container" />


        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
            <h1 className="intro-title mb-4">

            <FormattedMessage
                  id="app.intro"
                  defaultMessage="¡Hola! 🖥️ soy Luciano Moreno"
                  />

            </h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>

                <strong className="text-slider">
                  {idioma.locale === 'es-MX' ? 
                  
                  <Typed strings={[ "Desarrollador Back End", "Desarrollador Front End"]}
                    typeSpeed={90}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />: 
                  
                  <Typed strings={[ "Back end Developer", "Front end Developer"]}
                  typeSpeed={90}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                  
                />}
                  
                </strong>
                
              </p>

              
              <p className="pt-3">
              {idioma.locale === 'es-MX' ?
                <a className="btn btn-primary btn js-scroll px-4" href={curriculum} role="button" >
                <FormattedMessage id="app.intro.cv" defaultMessage="Descargar CV" />
                </a>

                :

                <a className="btn btn-primary btn js-scroll px-4" href={curriculumIngles} role="button" >
                <FormattedMessage id="app.intro.cv" defaultMessage="Descargar CV" />
                </a>
                }

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Intro;
