import product from '../../assets/model.png';
import './secondsec.css';


function Testimonial() {
 return (
     <section className="sec-2">
       <div className="sec-left">
         
         <h2 className='quote'>Trusted by Every Modern Indian Women!</h2>
         <p>
           Boost immunity, support digestion, and bring authentic
           Indian flavor to every dish.
         </p>
       </div>
 
       <div className="hero-right">
         <img className='sec-img' src={product} alt="Sanjeevani Masala" />
       </div>
     </section>
   );
}

export default Testimonial;