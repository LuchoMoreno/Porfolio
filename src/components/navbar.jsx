import React, {useEffect, useState, useContext} from "react";
import $ from "jquery";

import logo1 from "../img/logoAzulInvisible.png";
import logo2 from "../img/logoAzul.png";

import { FormattedMessage } from "react-intl";
import { langContext } from "../context/langContext";

import '../flag-icons.css'

const estadoInicial = {
  logo: logo1
}

const Navbar = () => {

  const [estado, setEstado] = useState(estadoInicial);
  const idioma = useContext(langContext);

  useEffect( () => {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        setEstado({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        setEstado({ logo: logo1 });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

  }, [])


    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={estado.logo}
              alt="logo"
              style={{ maxWidth: "50px" }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">

                  <FormattedMessage
                  id="app.menu.first"
                  defaultMessage="Inicio"
                  />

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  
                <FormattedMessage
                  id="app.menu.second"
                  defaultMessage="Sobre mi"
                  />

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                 
                <FormattedMessage
                  id="app.menu.third"
                  defaultMessage="Proyectos"
                  />

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                
                <FormattedMessage
                  id="app.menu.quad"
                  defaultMessage="Contacto"
                  />

                </a>
              </li>

              <li className="nav-item">

                <div className="banderas">
                  <button className="banderita" onClick={() => {idioma.establecerLenguaje('es-MX')}} ><span className="flag-icon flag-icon-ar"></span></button>
                  <button className="banderita" onClick={() => {idioma.establecerLenguaje('en-US')}} ><span className="flag-icon flag-icon-eu"></span></button>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  
}

export default Navbar;
