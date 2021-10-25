import React from "react";

// imagenes
import imagenProyecto1 from "../img/proyecto1.png";
import imagenProyecto2 from "../img/proyecto2.png";
import imagenProyecto3 from "../img/proyecto3.png";
import imagenIonic1 from "../img/proyectoionic1.png";
import imagenIonic2 from "../img/proyectoionic2.png";
import imagenIonic3 from "../img/proyectoionic3.png";

import { FormattedMessage } from "react-intl";


const Portfolio = () =>  {

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">

        <div className="container">


          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  <FormattedMessage
                    id="app.portfolio.title"
                    defaultMessage="Proyectos realizados"/>
                </h3>
                <p className="subtitle-a">
                  
                <FormattedMessage
                    id="app.portfolio.subtitle"
                    defaultMessage="Una pequeña galería para previsualizar proyectos determinados."/>
             
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>


          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h5 className="title-a mt-2">
                <FormattedMessage
                    id="app.portfolio.web"
                    defaultMessage="Proyectos web"/>
                </h5>
              </div>
            </div>
          </div>


          <div className="box-shadow-full">
          <div className="row">

            <div className="col-md-8">
              <div className="work-box">
                <a href={imagenProyecto1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={imagenProyecto1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                        <FormattedMessage
                        id="app.portfolio.web.madeWith"
                        defaultMessage="Realizado con:"/>
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Angular - Angular Material - Firebase - HTML5 - CSS3.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 mt-2">
              <div className="title-box text-center">
                <h3 className="subtitle-a">Multitask</h3>
                <p >
                <FormattedMessage
                    id="app.portfolio.web.app1.subtitle1"
                    defaultMessage="Proyecto realizado entre 3 personas. Consiste en una aplicación que incorpora un sistema de ventas, permutas, y reparaciones de distintos aparatos tecnológicos. Incopora la gestion de distintos tipos de usuarios con diferentes posibilidades respectivamente al tipo elegido, cada uno poseé su propio panel."/>
                </p>

                <p >
                <FormattedMessage
                    id="app.portfolio.web.app1.subtitle2"
                    defaultMessage="Se puede comprar, vender, permutar, crear publicaciones, pedir presupuestos, y muchas acciones más."/>
                </p>
                <div className="line-mf"></div>

                <p></p>
                <a href="https://github.com/LuchoMoreno/PPSII-Multitask"> <FormattedMessage id="app.sourceCode.available" defaultMessage="Ver código fuente"/> </a>
              </div>
            </div>



            <div className="col-md-4 mt-2">
              <div className="title-box text-center">
                <h3 className="subtitle-a">Buena sonrisa</h3>
                <p >
                <FormattedMessage
                    id="app.portfolio.web.app2.subtitle1"
                    defaultMessage="Consiste en una aplicación que incorpora el manejo completo de una clínica de otontología. Incopora la gestion de distintos tipos de usuarios con diferentes posibilidades respectivamente al tipo elegido, cada uno poseé su propio panel."/>
                </p>

                <p >
                <FormattedMessage
                    id="app.portfolio.web.app2.subtitle2"
                    defaultMessage="Los pacientes pueden pedir turnos, gestionar los turnos, cancelarlos, visualizarlos. Cada profesional puede cargar una breve reseña de la consula realizada. Tambien se incorpora un sistema de estadísticas para la administración."/>
                </p>
                <div className="line-mf"></div>

                <p></p>
                <a href="https://github.com/LuchoMoreno/LAB-IV-TPFINAL"> <FormattedMessage id="app.sourceCode.available" defaultMessage="Ver código fuente"/> </a>

              </div>
            </div>


            <div className="col-md-8">
              <div className="work-box">
                <a href={imagenProyecto2} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={imagenProyecto2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                        <FormattedMessage
                        id="app.portfolio.web.madeWith"
                        defaultMessage="Realizado con:"/>
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Angular - Angular Material - Firebase - HTML5 - CSS3.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>


            <div className="col-md-8">
              <div className="work-box">
                <a href={imagenProyecto3} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={imagenProyecto3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                        <FormattedMessage
                        id="app.portfolio.web.madeWith"
                        defaultMessage="Realizado con:"/>
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Angular - Angular Material - Firebase - HTML5 - CSS3.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>


            <div className="col-md-4 mt-2">
              <div className="title-box text-center">
                <h3 className="subtitle-a">Breakind Bad - API</h3>
                <p >
                <FormattedMessage
                    id="app.portfolio.web.app3.subtitle1"
                    defaultMessage="Primer pagina realiza con Angular. Simplemente incorpora un sistema de login, autentificación, y consumo de una API."/>
                </p>

                <p >
                <FormattedMessage
                    id="app.portfolio.web.app3.subtitle2"
                    defaultMessage="Un usuario puede registrarse, posteriormente ingresar, y ver los personajes y capitulos de la serie breaking bad. Puede seleccionar favoritos."/>
                </p>
                <div className="line-mf"></div>

                <p></p>
                <a href="https://github.com/LuchoMoreno/LAB-IV-PARCIAL-I"> <FormattedMessage id="app.sourceCode.available" defaultMessage="Ver código fuente"/> </a>

              </div>
            </div>

          </div>
          </div>


          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h5 className="title-a mt-2">
                <FormattedMessage
                    id="app.portfolio.phone"
                    defaultMessage="Aplicaciones móviles"/>
                </h5>
              </div>
            </div>
          </div>


          <div className="box-shadow-full">
          <div className="row">

            <div className="col-md-4">
              <div className="work-box">

                <a href={imagenIonic1} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={imagenIonic1} alt="" className="img-fluid" />
                  </div>
                </a>

                <div className="work-content">
                  <div className="row">
                    <div className="title-box text-center">
                      <h3 className="subtitle-a">
                        <FormattedMessage
                        id="app.portfolio.phone.app1.title"
                        defaultMessage="Apps varias"/>
                        </h3>
                          <p >
                          <FormattedMessage
                          id="app.portfolio.phone.app1.subtitle1"
                          defaultMessage="Aplicaciones móviles realizadas para la materia Práctica Profesional Supervisada. Consiste en desarrollar 5 aplicaciones en IONIC."/>
                          </p>
                          <p >
                          <FormattedMessage
                          id="app.portfolio.phone.app1.subtitle2"
                          defaultMessage="Incluye: Relevamiento visual - Tabla didáctica - Alarma anti robo - Lector de pagos QR - Conversando! (Chat)."/>
                            
                          </p>
                      <div className="line-mf"></div>
                      <p></p>

                      <p> <a href="https://github.com/LuchoMoreno/LAB-IV-PARCIAL-I"> <FormattedMessage id="app.sourceCode.available" defaultMessage="Ver código fuente"/> </a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">

                <a href={imagenIonic2} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={imagenIonic2} alt="" className="img-fluid" />
                  </div>
                </a>

                <div className="work-content">
                  <div className="row">
                    <div className="title-box text-center">
                      <h3 className="subtitle-a">La comanda</h3>
                          <p >
                          <FormattedMessage
                          id="app.portfolio.phone.app2.subtitle1"
                          defaultMessage="Aplicacion móvil realizada para el final de la materia Práctica Profesional Supervisada. Consiste en la gestión completa de un restaurante."/>
                          </p>
                          <p >
                          <FormattedMessage
                          id="app.portfolio.phone.app2.subtitle2"
                          defaultMessage="Incluye: 5 tipos de usuarios distintos. Cliente, mozo, metre, cocinero, bartender. Cada uno con sus propias acciones a realizar."/>
                          </p>
                      <div className="line-mf"></div>
                      <p></p>

                      <p> <a href="https://github.com/LuchoMoreno/PPS-Final-LaComanda"> <FormattedMessage id="app.sourceCode.available" defaultMessage="Ver código fuente"/> </a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">

                <a href={imagenIonic3} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={imagenIonic3} alt="" className="img-fluid" />
                  </div>
                </a>

                <div className="work-content">
                  <div className="row">
                    <div className="title-box text-center">
                      <h3 className="subtitle-a">Bolillero Lucky</h3>
                          <p >
                          <FormattedMessage
                          id="app.portfolio.phone.app3.subtitle1"
                          defaultMessage="Aplicacion móvil realizada a modo de práctica. Consiste en un bolillero para realizar dos tipos de sorteos, con numeros aleatorios mostrados en una bolilla."/>
                          </p>
                          <p >
                          <FormattedMessage
                          id="app.portfolio.phone.app3.subtitle2"
                          defaultMessage="Incluye: 2 tipos de sorteos, con repetición / sin repetición. Con el numero de bolilla y lista de números. App publicada en Playstore."/>
                          </p>
                      <div className="line-mf"></div>
                      <p></p>

                      <p> <FormattedMessage id="app.sourceCode.unavailable" defaultMessage="Código fuente no disponible"/> </p>
                    </div>
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

export default Portfolio;
