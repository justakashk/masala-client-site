import product from "../assets/Rasoi Sanjeevani.png";

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
        <img src={product} alt="Sanjeevani Masala" />
        <img className="mini" src={product} alt="Sanjeevani Masala" />
      </div>
    </section>
  );
}

export default Hero;