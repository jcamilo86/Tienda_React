import React from "react";
import Carrusel from "../Carrusel/Carrusel";
import Card from "../componentes/Card";
import modelo1 from "../imag/modelo1.jpg";
import Banerfinal from "./Banerfinal";

const cards = [
  {
    id: 1,
    title: "oufis1",
    image: modelo1,
  },
  {
    id: 2,
    tile: "oufis2",
    image: modelo1,
  },
  {
    id: 3,
    tile: "oufis3",
    image: modelo1,
  },
  {
    id: 4,
    tile: "oufis4",
    image: modelo1,
  },
  {
    id: 5,
    tile: "oufis5",
    image: modelo1,
  },
  // {
  //   id:6,
  //   tile:"oufis6",
  //   image:modelo6
  // },
  // {
  //   id:7,
  //   tile:"oufis7",
  //   image:modelo7
  // },
];

export default function Home() {
  return (
    <>
      <Carrusel />
      <br />
      <br />
      <br />
      <div className="continer d-flex justify-content ">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>

      <br />
      <br />
      <br />
      <Banerfinal />
     
    </>
  );
}
