import React, { useState } from "react";
import { Element } from "react-scroll";
import "../styles/about.css";

const About = () => {
  const Somos = [
    {
      id: 1,
      title: "Nosotros",
      texto:
        "Odontólogos Especialistas con más de 20 años de experiencia buscando siempre un mejor servicio y atención para nuestros pacientes. Se funda Bioforma Dental en el 2020. Clínica Dental especializada en diferentes áreas de la odontología, contamos con la más alta tecnología para poder diagnosticar y tratar problemas de estética facial, vías aéreas, oclusión funcional y la conexión de la cavidad oral con las condiciones sistémicas del cuerpo.",
      texto2: " ",
    },
    {
      id: 2,
      title: "Nosotros",
      texto:
        "Utilizando materiales de alta calidad para que nuestros pacientes tengan la satisfacción de poder salir de nuestras instalaciones con una sonrisa renovada.",
      texto2:
        "En Bioforma nos enfocamos en buscar siempre dar el mejor trato a cada paciente y cumplir con sus necesidades y deseos para que consiga la sonrisa de sus sueños.",
    },
  ];

  const [isSlider, setIsSlider] = useState(false);

  const hadleSlider = (e) => {
    setIsSlider(!isSlider);
    let event = e.target.id;
    console.log(event);
    textSlider(event);
  };

  const textSlider = (event) => {
    let container = document.getElementById("aboutSlider");
    container.innerHTML = "";
    Somos.filter((text) => text.id == event).map((text) => {
      container.innerHTML += `
      <h2 className="text-title" >${text.title}</h2>
        <p className="text-event" id="texto1">${text.texto}</p>
        <p className="text-event" id="texto2">${text.texto2}</p>
        
        
        `;
    });
  };
  return (
    <div className="about" id="nosotros">
      <div className="container-about">
        <div className="about-slider" id="aboutSlider">
          <div className={`textos ${isSlider ? "show" : ""}`}>
            <h2>Nosotros</h2>
            <span>
              Odontólogos Especialistas con más de 20 años de experiencia
              buscando siempre un mejor servicio y atención para nuestros
              pacientes. Se funda Bioforma Dental en el 2020. Clínica Dental
              especializada en diferentes áreas de la odontología, contamos con
              la más alta tecnología para poder diagnosticar y tratar problemas
              de estética facial, vías aéreas, oclusión funcional y la conexión
              de la cavidad oral con las condiciones sistémicas del cuerpo.
            </span>
          </div>
        </div>
        <button
          className="btn-about"
          id="1"
          onClick={(e) => hadleSlider(e, !isSlider)}
        >
          1
        </button>
        <button
          className="btn-about"
          id="2"
          onClick={(e) => hadleSlider(e, !isSlider)}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default About;
