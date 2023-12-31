import React from "react";
import Mapa from "../assets/miMapa.png";
import "../styles/footer.css";
const Footer = () => {
  return (
    <>
      <footer id="ubicacion">
        <div className="mapa">
          <div className="container-mapa">
            <div className="item-mapa">
              <h2>Ubicación</h2>
              <h3>
                Plaza Punto MAQ, Av. Miguel Ángel de Quevedo 1144, Coyoacán,
                CDMX
              </h3>
              <a
                href="https://api.whatsapp.com/send?phone=525575015328"
                target="_blank"
                className="btn-rosa"
              >
                Contacto
              </a>
            </div>
            <div className="item-mapa">
              <img src={Mapa} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-footer">
          <div className="item-footer-footer">
            <p>© 2023 Todos los derechos reservados Bioforma.</p>
            <p>Desarrollado por Agencia de Marketing Dentarios © 2023</p>
          </div>
          <div className="item-footer-footer">
            <a href="tel:5652700762" target="_blank">
              <i className="fa-solid fa-phone"></i> 5575015328
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=525575015328"
              target="_blank"
            >
              <i className="fa-brands fa-square-whatsapp"></i> +525652700762
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
