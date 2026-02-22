import "./Hero.css";
import product from "../../../assets/product.png"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>SANJEEVANI</h1>
          <h2>A ORGANIC COOKING MASALA</h2>

          <p>
            Boost immunity, support digestion, and bring
            authentic Indian flavor to every dish.
          </p>

          <button className="hero-btn">
            🏬 Visit Store
          </button>
        </div>

        {/* RIGHT PRODUCT */}
        <div className="hero-right">
          <div className="product-wrapper">
            <img
              src="{product}"
              alt="Big Box"
              className="big-box"
            />
            <img
              src="{product}"
              alt="Small Box"
              className="small-box"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;