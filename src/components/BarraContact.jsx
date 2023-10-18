import React from "react";
import "../styles/barra.css";
const BarraContact = () => {
  return (
    <div className="barra-contact">
      <div className="container-contact">
        <div className="item-contact">
          <h3>Contacto</h3>
          <p>Agenda tu cita en solo unos minutos.</p>
          <a
            href="https://api.whatsapp.com/send?phone=525575015328"
            target="_blank"
            className="btn-rosa"
          >
            Agendar cita
          </a>
        </div>
        <div className="item-contact">
          <h3>Nuestros horarios</h3>
          <div className="sub-item-contact">
            <p>Lunes a Viernes </p>
            <p>09:00 am - 13:00 pm / 16:00 pm - 19:00 pm</p>
            <p>Sábado </p>
            <p> 09:00 am - 18:00 pm</p>
            <p> Domingo </p>
            <p>09:00 am - 15:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraContact;
