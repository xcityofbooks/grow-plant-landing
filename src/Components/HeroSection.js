import "../Style-sheets/HeroSection.css";
import { Carousel } from "./Carousel";
import PlantTest from "../Images/plantest.png";

export const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-container">
          <div className="hero-section-texts">
            <h3>#NATURAL PLANTS</h3>
            <h1>Various Indoor Plant Shop</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <div className="hero-section-btn-container">
              <button className="hero-section-btns green-btn">
                <a href="#products">Shop here</a>
              </button>
              <button className="hero-section-btns white-btn">
                <a href="#contact-us">Contact Us</a>
              </button>
            </div>
          </div>

          <div className="hero-section-image">
            <img
              src={PlantTest}
              alt="background-plant-img"
              className="hero-section-img"
            />
          </div>
        </div>
        <Carousel />
      </section>
    </>
  );
};
