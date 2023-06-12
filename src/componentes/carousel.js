import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import costillaIcon from '../assets/costillas.png';
import polloIcon from '../assets/pollo.jpg';
import postreIcon from '../assets/postre.jpg';
import './CarouselComponent.css';

export default function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel>
        <div>
          <img src={costillaIcon} className="plato" alt="costilla" />
          <p className="legend">Descripción de la imagen 1</p>
        </div>
        <div>
          <img src={polloIcon} className="plato" alt="pollo" />
          <p className="legend">Descripción de la imagen 2</p>
        </div>
        <div>
          <img src={postreIcon} className="plato" alt="postre" />
          <p className="legend">Descripción de la imagen 3</p>
        </div>
      </Carousel>
    </div>
  );
}
