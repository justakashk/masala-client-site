import product from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>SANJEEVANI</h1>
        <h2>A ORGANIC COOKING MASALA</h2>
        <p>
          Boost immunity, support digestion, and bring authentic
          Indian flavor to every dish.
        </p>

        <button className="btn">Visit Store</button>
      </div>

      <div className="hero-right">
        <img src={product} alt="hero-image" />
       
      </div>
    </section>
  );
}

export default Hero;