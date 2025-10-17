import React from 'react';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import './index.css';
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
{/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">
<a className="navbar-brand" href="#">Henna Elegance</a>
<button className="navbar-toggler" 
type="button"
data-bs-toggle="collapse" 
data-bs-target="#navbarNav"
aria-controls='navbarNav' 
aria-expanded="false" 
aria-label="Toggle-navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav ms-auto">
 <li className="nav-item">
<a className="nav-link active" href="/">Home</a>
</li>
<li className="nav-item">
<a className="nav-link" href="/services">Services</a>
</li>
<li className="nav-item">
<a className="nav-link" href="/gallery">Gallery</a>
</li>
 <li className="nav-item">
 <a className="nav-link" href="/contact">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

{/*  Hero Section */}
 <section
  style={{
    backgroundImage: "url('/images/image-110.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2rem',
  }}
>
  <div
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.7)', 
      color: 'white',
      padding: '2rem',
      borderRadius: '10px',
      maxWidth: '500px',
    }}
  >
    <h1 className="display-4">Henna Elegance</h1>
    <p className="lead">Beautiful, Traditional, and Artistic Mehendi Designs</p>
    <button className="btn btn-success mt-3">Book Now</button>
  </div>
</section>



{/*  Services Section */}
<h2 className='text-center mt-4 '>List of our Henna Services</h2>
<div className="row justify-content-center text-center">
  <ServiceCard 
    icon="/images/mehendi.jpg" 
    title="Bridal Mehendi" 
    text="Highly detailed full-hand and full-leg designs with symbols of love and marriage." 
  />
  <ServiceCard 
    icon="/images/m2.jpg" 
    title="Indian Mehendi" 
    text="Intricate designs with peacocks,paisleys,and fine detailing covering entire hands." 
  />
  <ServiceCard 
    icon="/images/arab.jpg" 
    title="Arabic Mehendi" 
    text="Features bold floral patterns and flowing trials,mostly on hands and feet." 
  />
</div>


<div className="row justify-content-center text-center">
  <ServiceCard 
    icon="/images/mm.jpg" 
    title="Pakistani Mehendi" 
    text="Afusion of Arabic and Indian styles with elaborate and elegant motifs." 
  />
  <ServiceCard 
    icon="/images/image-110.png" 
    title="Rajasthani Mehendi" 
    text="Dense,detailed full-hand and full-leg designs with symbols of love and marriage." 
  />
  <ServiceCard 
    icon="/images/glit.jpg" 
    title="Glitter Mehendi" 
    text="Mehendi enhanced with glitter and stones for a festive,flashy appearance." 
  />
</div>

{/*Gallery */}
  <Gallery />

{/*  Testimonials Section */}
<section className="bg-white py-5">
<div className="container text-center">
<h2 className="mb-4">Our Customer Reviews</h2>
<div className="row">
<TestimonialCard  
  quote="Absolutely stunning work! The detail in the henna design was breathtaking. It stayed dark for over a week and made my Eid extra special. Highly recommend!"
  name="Zoya Khan"
  avatar="/Zoya.jpg"
  />
 <TestimonialCard
 quote="Got my bridal henna done and it turned out better than I imagined. The artist was so professional and patient. Everyone at the wedding kept complimenting the designs!"
 name="Huma"
 avatar="/Huma.jpg"
 />
<TestimonialCard
quote="I booked a last-minute appointment and they still gave me such intricate and beautiful designs. Super friendly service too!"
 name="Ayesha Begum"
 avatar="/Ayesha.jpg"
/>
<TestimonialCard
quote="The designs are always on-trend but still traditional. I love how long the stain lasts. I’ve been coming back for every festive season!"
 name="Salma"
 avatar="/salma.jpg"
  />
  <TestimonialCard
   quote="The artist customized the design exactly how I wanted. The cones are clearly high quality – the color was rich and deep. I’ll definitely be back."
  name="Ramya"
  avatar="/bhuv.jpg"
  />
  <TestimonialCard
  quote="Beautiful work, just wish the drying time was a bit quicker. Still, the final result was worth the wait!"
  name="Zara"
   avatar="/zara.jpg"
   />
  </div>
   </div>
      </section>



      {/*FAQ */}
<div className=" container text-center my-5 " >
 
<h2 className="mb-4" >Frequently Asked Questions</h2>
 <div className="accordion accordion-flush" id="questions">

<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionOne">
Do you offer free trials?
</button>
</h2>
  <div id="questionOne" className="accordion-collapse collapse" data-bs-parent="#questions">
 <div className="accordion-body">
   We currently do not offer full free trials,
    but we do provide a discounted mini trial design for bridal clients upon request.
     It's a great way to test our quality before your big day!
   </div>
   </div>
  </div>

<div className="accordion-item">
<h2 className="accordion-header">
 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionTwo">
  How dark will the henna stain be?
  </button>
  </h2>
  <div id="questionTwo" className="accordion-collapse collapse" data-bs-parent="#questions">
   <div className="accordion-body">
   The final color depends on your skin type, how long you leave the paste on, and aftercare.
    Our natural henna can stain from orange to deep reddish-brown.
    </div>
    </div>
 </div>

<div className="accordion-item">
<h2 className="accordion-header">
 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionThree">
 What should I do to make the henna last longer?
 </button>
  </h2>
  <div id="questionThree" className="accordion-collapse collapse" data-bs-parent="#questions">
<div className="accordion-body">
Avoid water for the first 24 hours, apply lemon-sugar sealant, and avoid scrubbing the area. Moisturizing regularly helps preserve the stain.
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionFour">
What kind of henna do you use?
</button>
</h2>
<div id="questionFour" className="accordion-collapse collapse" data-bs-parent="#questions">
<div className="accordion-body">
We use 100% natural henna with no added chemicals, ensuring safe and rich color results.
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionFive">
How much does it cost?
</button>
</h2>
<div id="questionFive" className="accordion-collapse collapse" data-bs-parent="#questions">
<div className="accordion-body">
  Pricing is usually based on design complexity, size, and location.
   </div>
    </div>
 </div>
</div>
  </div>
   


 {/* Footer section*/} 
 <footer className="bg-dark text-light pt-5 pb-4 mt-5">
 <div className="container">
 <div className="row">

 {/* Brand */}
  <div className="col-md-4 mb-4">
  <h5 className="text-uppercase fw-bold">Henna Elegance</h5>
 <p>
  Beautiful, Traditional, and Artistic Mehendi Designs.
  <br /> Bridal | Festive | Custom Events
  </p>
</div>

{/*  Links */}
<div className="col-md-4 mb-4">
  <h5 className="text-uppercase fw-bold"> Links</h5>
  <ul className="list-unstyled">
 <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
<li><a href="#gallery" className="text-light text-decoration-none">Gallery</a></li>
<li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
 <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
  </ul>
</div>

{/* Contact Info */}
 <div className="col-md-4 mb-4">
   <h5 className="text-uppercase fw-bold">Contact Us</h5>
  <p><i className="bi bi-telephone-fill me-2"></i> +91 8919742133</p>
<p><i className="bi bi-envelope-fill me-2"></i> hennaelegance@gmail.com</p>
 <p><i className="bi bi-geo-alt-fill me-2"></i> Telangana,India</p>

 {/* Social Media Icons */}
<div className="mt-3">
 <a href="#" className="text-light fs-5 me-3"><i className="bi bi-instagram"></i></a>
 <a href="#" className="text-light fs-5 me-3"><i className="bi bi-facebook"></i></a>
  <a href="#" className="text-light fs-5"><i className="bi bi-whatsapp"></i></a>
  </div>
  </div>
 

 <div className=" bg-dark text-light p-2  d-md-flex jusify-content-between align-items-center">
<h3 className="mb-3 mb-md-0">Sign up for our Latest Updates</h3>
<div className="input-group henna-input">
<input type="text" className="form-control " placeholder="Enter Email"/>
 <button type="submit"className="btn btn-lg px-4 text-white" style={{backgroundColor:"red",border:"none",borderRadius:"8px"}}>Submit</button>
 </div>
  

</div>

  <hr className="border-light" />
  <p className="text-center mb-0">&copy; {new Date().getFullYear()} Henna Elegance. All Rights Reserved.</p>
</div>
 </div>
    </footer>

    </>
  );
};

export default App;