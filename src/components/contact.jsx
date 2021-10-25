import React from "react";

import particles from '../../src/const/particle.js';
import Particles from 'react-particles-js';

import { FormattedMessage } from "react-intl";

const Contact = () => {

    return (
      
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route" >
        
        <div className="overlay-mf"></div>

        <Particles params={particles} className="App-particles__container" />

        <div className="container">
          <div className="row">
            
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">
                        <FormattedMessage
                        id="app.contact.left.title"
                        defaultMessage="Enviame un mensaje"/>
                        </h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/f/xbjqbozn"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">

                          <FormattedMessage
                          id="app.contact.left.sent"
                          defaultMessage="El mensaje ha sido enviado. Muchas gracias por contactarte!"/>
                          
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Name"
                                  data-rule="minlen:4"
                                  data-msg="Por favor, ingrese al menos 4 caracteres."
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                  data-rule="email"
                                  data-msg="Por favor, ingrese un email válido."
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Reason"
                                  data-rule="minlen:4"
                                  data-msg="Por favor, ingrese al menos 8 caracteres."
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Por favor, no deje el campo vacío."
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                <FormattedMessage id="app.contact.left.sendButton" defaultMessage="Enviar mensaje"/>

                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">
                        <FormattedMessage id="app.contact.right.title" defaultMessage="Estemos en contacto"/>
                        </h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                        <FormattedMessage id="app.contact.right.subtitle" defaultMessage="Por cualquier motivo que necesites charlar, sea una duda, colaboración, o propuesta laboral, sólo envia un mensaje!"/>
                          <br />
                          <br />
                          <FormattedMessage id="app.contact.right.media" defaultMessage="También, estas son mis redes sociales: "/>
                        </p>

                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/LuchoMoreno"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/lucho-moreno/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  
}

export default Contact;
