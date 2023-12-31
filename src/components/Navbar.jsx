import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/bioforma_dorado.jpg";
import Menu from "../assets/menu.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [openMenu, isOpenMenu] = useState(false);

  return (
    <>
      <header>
        <div className="header-top">
          <div className="item-header-top">
            <p>Teléfono</p>
            <a href="tel:5575015328" target="_blank">
              5575015328
            </a>
          </div>
          <div className="item-header-top whatsapp">
            <p>Whatsapp</p>
            <a
              href="https://api.whatsapp.com/send?phone=525575015328"
              target="_blank"
            >
              +525575015328
            </a>
          </div>
        </div>
        <div className="menu">
          <div className="container-menu">
            <div className="container-logo">
              <img src={Logo} alt="" />
            </div>
            <nav className={`menu-nav ${openMenu ? "openMenu" : ""}`}>
              <Link
                to="inicio"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Inicio
              </Link>
              <Link
                to="nosotros"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Nosotros
              </Link>
              <Link
                to="servicios"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Especialidades
              </Link>
              <Link
                to="promo"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Promociones
              </Link>
              <Link
                to="ortodoncia"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Ortodoncia
              </Link>
              <Link
                to="ubicacion"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
              >
                Ubicación
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
                className="agendar menu-link nav-contacto"
                onClick={() => isOpenMenu(false)}
              >
                Agendar cita
              </a>
            </nav>
            <div className="btn-menu" onClick={() => isOpenMenu(!openMenu)}>
              <img src={Menu} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
