import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Secondsec/Testimonial";
import AvailableAt from "./components/AvailableAt/AvailableAt";
import HealthQuote from "./components/HealthQuote/HealthQuote";
import Footer from "./components/Footer/Footer";
import FAQs from "./components/FAQs/FAQs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <AvailableAt />
      <HealthQuote />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;