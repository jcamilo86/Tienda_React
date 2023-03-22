import React from "react";

export default function Section({ title, imgeSource }) {
  return (
    <>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="imgen">
              <img src={imgeSource} alt="" />
            </div>
          </a>

          <div className="tarjeta">
            <h4 className="titulo">{title}</h4>
            <p className="texto-image">Shirt Pants</p>
            <p className="precie">$ 50.000</p>

            <br />
            <div className="buttom">
              <button className="btn">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
