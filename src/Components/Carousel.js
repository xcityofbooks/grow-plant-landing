import { useState } from "react";
import FirstPlant from "../Images/plant1.png";
import SecondPlant from "../Images/plant2.png";
import ThirdPlant from "../Images/plant3.png";
import FourthPlant from "../Images/plant4.png";
import "../Style-sheets/Carousel.css";

export const Carousel = () => {
  const SalePlants = [
    {
      title: "Sansevieria Trifasciata",
      description: "Lorem Ipsum is simply dummy text.",
      price: "$" + 10,
      img: FirstPlant,
      state: true,
    },
    {
      title: "Dracaena Reflexa",
      description: "Lorem Ipsum is simply dummy text.",
      price: "$" + 8,
      img: SecondPlant,
      state: false,
    },
    {
      title: "Aplenium Nidus",
      description: "Lorem Ipsum is simply dummy text.",
      price: "$" + 12,
      img: ThirdPlant,
      state: false,
    },
    {
      title: "Dracaena Deremensis Compacta",
      description: "Lorem Ipsum is simply dummy text.",
      price: "$" + 6,
      img: FourthPlant,
      state: false,
    },
  ];

  const [plantState, SetPlantState] = useState(SalePlants);

  const togglePlantState = (index) => {
    const updatedPlants = [...plantState];
    updatedPlants[index].state = !updatedPlants[index].state;

    updatedPlants.forEach((plant, i) => {
      plant.state = i !== index ? false : true;
    });
    SetPlantState(updatedPlants);
  };

  return (
    <>
      <div className="carousel-cards-container">
        {plantState.map((product, index) => (
          <div
            className={
              product.state ? "carousel-card-green" : "carousel-card-white"
            }
            key={index}
            onClick={() => togglePlantState(index)}
          >
            <figure>
              <img src={product.img} alt={product.title} />
            </figure>
            <div className="carousel-card-details">
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <h5>{product.price}</h5>
              {product.state ? (
                <button className="carousel-button-green">Add to cart</button>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
