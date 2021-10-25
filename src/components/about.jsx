import React from "react";
import lineadetiempo from "../img/lineadetiempo.png";
import { FormattedMessage } from "react-intl";

import '../flag-icons.css'


const About = () => {

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">

                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">

                        <FormattedMessage
                          id="app.about"
                          defaultMessage="Sobre mi"
                        />

                      </h5>
                    </div>

                    <p className="lead">
                      <FormattedMessage
                        id="app.about.first"
                        defaultMessage="Soy Técnico Universitario en Programación y Técnico Universitario en Sistemas Informáticos. Ambas carreras cursadas en UTN - Universidad Tecnológica Nacional (FRA)."
                      />
                    </p>

                    <p className="lead">
                      <FormattedMessage
                        id="app.about.second"
                        defaultMessage="Soy una persona responsable, ordenada, y detallista. Me gustan los estilos minimalistas y las cosas simples."
                      />
                    </p>

                    <p className="lead">
                      <FormattedMessage
                        id="app.about.third"
                        defaultMessage="Tengo gran capacidad para el analisis y la resolucion de problemas, me gusta pensar las cosas de forma 'Think out the box'."
                      />
                    </p>

                    <p className="lead">
                      <FormattedMessage
                        id="app.about.quad"
                        defaultMessage="Tengo experiencia realizando trabajos de forma grupal e individual. Me resulta simple adaptarme a nuevos entornos, siempre presentando una actitud motivadora y caracter dedicado."
                      />
                    </p>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">
                      <FormattedMessage id="app.languages" defaultMessage="Idiomas" />
                    </h5>
                  </div>

                  <div className="skill-mf">

                    <span><FormattedMessage id="app.languages.first" defaultMessage="Español" /> </span>{" "}
                    <span className="pull-right"> 100% </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <span><FormattedMessage id="app.languages.second" defaultMessage="Inglés" /> </span>{" "}
                    <span className="pull-right"> 75% </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <span><FormattedMessage id="app.languages.third" defaultMessage="Portugués" /> </span>{" "}
                    <span className="pull-right"> 50% </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>



                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">

                <div className="col-md-12">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left"><FormattedMessage id="app.skills" defaultMessage="Conocimientos" /></h5>
                    </div>

                    <a href={lineadetiempo} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={lineadetiempo} alt="" className="img-fluid" />
                      </div>
                    </a>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
