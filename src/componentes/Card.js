
import Section from "./Section";

export default function Card({ card }) {
  return (
    <div className="contenendor-galeria">
      <div className="espaciado">
        <div className="espaciado" key={card.id}>
          <Section title={card.title} imgeSource={card.image} />
        </div>
      </div>
    </div>
  );
}

    