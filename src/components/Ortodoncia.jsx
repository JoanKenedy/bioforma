import React, { useState } from "react";
import Promo1 from "../assets/promo-1.jpg";
import Invisaling from "../assets/invisiling.jpg";
import brackets1 from "../assets/galery-5.jpg";
import brackets2 from "../assets/galery-9.jpg";
import brackets3 from "../assets/galery-11.jpg";
import brackets4 from "../assets/galery-12.jpg";
import brackets5 from "../assets/galery-14.jpg";
import brackets6 from "../assets/galery-15.jpg";
import brackets7 from "../assets/galery-16.jpg";
import brackets8 from "../assets/galery-26.jpg";
import "../styles/ortodoncia.css";

const Ortodoncia = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="ortodoncia" id="ortodoncia">
      <div className="container-ortodoncia">
        <div className="item-ortodoncia">
          <h2>Ortodoncia</h2>
          <p>
            La ortodoncia es una rama de la odontología que se enfoca en
            corregir las irregularidades en la alineación de los dientes y la
            mandíbula, con el objetivo de mejorar la función oral y la estética
            de la sonrisa. Utilizando dispositivos como brackets, alambres y
            aparatos ortopédicos, un ortodoncista trabaja para alinear los
            dientes de manera adecuada y lograr una mordida correcta. Esta
            disciplina no solo busca la corrección estética, sino también mejora
            la salud bucal al prevenir problemas como caries y enfermedades de
            las encías asociadas con dientes mal alineados.
          </p>
        </div>
        <div className="item-ortodoncia">
          <img src={Promo1} alt="" />
        </div>
        <div className="item-ortodoncia">
          <img src={Invisaling} alt="" />
        </div>
        <div className="item-ortodoncia">
          <h2>INVISALIGN</h2>
          <h4>(Alineadores Invisibles)</h4>
          <p>
            Invisalign es un sistema de ortodoncia avanzado y transparente que
            se ha vuelto cada vez más popular en comparación con la ortodoncia
            convencional. En lugar de utilizar brackets y alambres metálicos,
            Invisalign emplea una serie de alineadores plásticos transparentes y
            removibles que se ajustan cómodamente sobre los dientes. Estos
            alineadores son personalizados para cada paciente y se cambian cada
            pocas semanas para aplicar una presión suave y gradual en los
            dientes, moviéndolos hacia su posición deseada. Una de las
            principales ventajas de Invisalign es su apariencia discreta, ya que
            los alineadores son prácticamente invisibles, lo que resulta en una
            experiencia más estética para el paciente.
          </p>
          <p>
            Además de su aspecto discreto, Invisalign ofrece ventajas en
            términos de comodidad y conveniencia. Los alineadores son
            extraíbles, lo que facilita la higiene oral y permite al paciente
            comer y beber sin restricciones.
          </p>
        </div>
      </div>
      <button id="brackets" className="btn-brackets" onClick={handleVisible}>
        Galeria de brackets
      </button>
      <div className={`galery-brackets ${isVisible ? "aparecer" : ""}`}>
        <h2>Galeria</h2>
        <div className="container-brackets">
          <div className="item-galery-brackets">
            <img src={brackets1} alt="" />
          </div>
          <div className="item-galery-brackets">
            <img src={brackets2} alt="" />
          </div>
          <div className="item-galery-brackets">
            <img src={brackets3} alt="" />
          </div>
          <div className="item-galery-brackets">
            <img src={brackets4} alt="" />
          </div>
          <div className="item-galery-brackets">
            <img src={brackets5} alt="" />
          </div>
          <div className="item-galery-brackets">
            <img src={brackets6} alt="" />
          </div>
          <div className="item-galery-brackets">
            <img src={brackets7} alt="" />
          </div>
          <div className="item-galery-brackets">
            <img src={brackets8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ortodoncia;
