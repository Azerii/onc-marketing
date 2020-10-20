import React from 'react';
import './App.css';
import Brands from './components/Brands';
import Services from './components/Services';
import OurWorks from './components/OurWorks';
import Sectors from './components/Sectors';
import Process from './components/Process';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import TopCaption from './components/TopCaption';
import Carousel from './components/Carousel';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Modal />
      <TopCaption />
      <Brands />
      <Services />
      <OurWorks />
      <Sectors />
      {/* <Carousel /> */}
      <Process />
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default App;
