import React, { useState } from "react";
import Services1 from "../assets/biomimetica.png";
import Services2 from "../assets/estetica.png";
import Services3 from "../assets/ortodoncia.png";
import Services4 from "../assets/endodoncia.png";
import Services5 from "../assets/maxilar.png";
import Services6 from "../assets/invasiva.png";
import Services7 from "../assets/implantologia.png";
import Services8 from "../assets/bruxismo.png";
import Services9 from "../assets/ortodoncia-laser.png";
import Services10 from "../assets/atm.png";
import "../styles/services.css";

const Services = () => {
  const Servicios = [
    {
      id: 1,
      title: "Odontología General Biológica",
      imgSrc: Services1,
      texto:
        "Es la especialidad que se centra en el diagnóstico, tratamiento y prevención de los problemas primarios de la salud bucodental. Estos incluyen problemas que afectan a los dientes, a las encías, el tejido periodontal y la articulación temporomandibular.",
    },
    {
      id: 2,
      title: "Periodoncia",
      imgSrc: Services2,
      texto:
        "Un candidato para la estética restauradora, primero debe agendar una cita general para formular un plan de tratamiento y lograr el resultado deseado. En Bioforma, es nuestro enfoque dinámico e innovador en el manejo de la estética dental, el que nos diferencia de los demás.",
    },
    {
      id: 3,
      title: "Ortodoncia Funcional",
      imgSrc: Services3,
      texto:
        "Corrige los defectos de la posición dental para mantener una boca perfecta y sana. En Bioforma, somos especialistas en ortodoncia y realizamos diferentes tipos de tratamientos para adaptarnos a tus necesidades.",
    },
    {
      id: 4,
      title: "Endodoncia",
      imgSrc: Services4,
      texto:
        "Es un procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando su pérdida. Para ello, se extrae la pulpa dental y la cavidad resultante, se rellena y sella con material inerte y biocompatible.",
    },
    {
      id: 5,
      title: "Prótesis Biofuncional",
      imgSrc: Services5,
      texto:
        "Representan una solución apropiada para aquellas personas que necesitan recuperar el correcto funcionamiento de la boca, ya que se trata de dispositivos diseñados especialmente para reemplazar los dientes perdidos y favorecer la oclusión dental.",
    },
    {
      id: 6,
      title: "Bruxismo",
      imgSrc: Services6,
      texto:
        "El bruxismo es una afección en la que una persona rechina, aprieta o cruje los dientes; puede ocurrir cuando se está despierto o dormido. El bruxismo que ocurre mientras una persona está despierta es más frecuente, pero el bruxismo que ocurre durante el sueño se ha estudiado más.",
    },
    {
      id: 7,
      title: "Implantología Dental",
      imgSrc: Services7,
      texto:
        "Es la disciplina encargada del reemplazo de las piezas dentales perdidas mediante la colocación quirúrgica de un aditamento intraóseo (implante dental) y un aditamento protésico (corona, puente o prótesis), tanto en el maxilar como en la mandíbula.",
    },
    {
      id: 8,
      title: " Cirugía Ortognática",
      imgSrc: Services8,
      texto:
        "La cirugía ortognática es una intervención quirúrgica que se realiza para corregir la posición de los maxilares, o más propiamente dicho, del conjunto compuesto por el maxilar y la mandíbula. Este tipo de cirugía es competencia exclusiva del cirujano maxilofacial, que es el único especialista indicado para tratar tanto los huesos como los tejidos blandos del área facial.",
    },
    {
      id: 9,
      title: "Ortodoncia Láser",
      imgSrc: Services9,
      texto:
        "Los láseres de alta potencia son una alternativa eficaz al método convencional en la adhesión y remoción de brackets sin alterar el esmalte ni dañar la pulpa dental, así como, en la prevención de la desmineralización del esmalte y el manejo de tejidos blandos durante el tratamiento ortodóntico.",
    },
    {
      id: 10,
      title: "Articulación Temporomandibular",
      imgSrc: Services10,
      texto:
        "La articulación temporomandibular (ATM) es la articulación que está formada por la parte superior de la mandíbula y el hueso temporal del cráneo. Este hueso actúa como una bisagra deslizante y, en algunos casos, puede presentar problemas a causa de la complejidad de los movimientos que realiza.",
    },
  ];
  const [isModal, setIsModal] = useState(false);
  const handleModal = (e) => {
    setIsModal(true);
    let event = e.target.id;
    openModal(event);
  };
  const openModal = (event) => {
    let modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = "";
    Servicios.filter((item) => item.id == event).map((item) => {
      modalContainer.innerHTML += `
       <img src=${item.imgSrc} alt="" />
       <h2>${item.title} </h2>
       <p>${item.texto} </p>
       <a
       href="https://api.whatsapp.com/send?phone=525575015328"
       target="_blank"
            id="btnAncla"
            
          >
          
            Contacto
          </a>
      
       `;
    });
  };

  return (
    <div className="services" id="servicios">
      <h2 className="title-services">Especialidades</h2>
      <div className="container-services">
        <div className="item-services">
          <img src={Services1} alt="" />
          <h2>Odontología General Biológica</h2>
          <button
            className="btn-services"
            id="1"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services2} alt="" />
          <h2>Periodoncia</h2>
          <button
            className="btn-services"
            id="2"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services3} alt="" />
          <h2>Ortodoncia Funcional</h2>
          <button
            className="btn-services"
            id="3"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services4} alt="" />
          <h2>Endodoncia</h2>
          <button
            className="btn-services"
            id="4"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services5} alt="" />
          <h2>Prótesis Biofuncional</h2>
          <button
            className="btn-services"
            id="5"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services6} alt="" />
          <h2>Bruxismo</h2>
          <button
            className="btn-services"
            id="6"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services7} alt="" />
          <h2>Implantología Dental</h2>
          <button
            className="btn-services"
            id="7"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services8} alt="" />
          <h2> Cirugía Ortognática</h2>
          <button
            className="btn-services"
            id="8"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services9} alt="" />
          <h2>Ortodoncia Láser</h2>
          <button
            className="btn-services"
            id="9"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services10} alt="" />
          <h2>Articulación Temporomandibular</h2>
          <button
            className="btn-services"
            id="10"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
      </div>
      <div
        className={`modal-services-home ${
          isModal ? "modal-services-home openModal" : ""
        }`}
      >
        <i class="fa-solid fa-x" onClick={() => setIsModal(false)}></i>
        <div className="container-modal-services" id="modalContainer"></div>
      </div>
    </div>
  );
};

export default Services;
