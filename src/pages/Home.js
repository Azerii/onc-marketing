import React from 'react';

import Brands from '../components/Brands';
import Services from '../components/Services';
import OurWorks from '../components/OurWorks';
import Sectors from '../components/Sectors';
import Process from '../components/Process';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import TopCaption from '../components/TopCaption';
import Modal from '../components/Modal';
import Header from '../components/Header';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <TopCaption />
      <Brands />
      <Services />
      <OurWorks />
      <Sectors />
      <Process />
      <Testimonial />
      <ContactForm />
      <Modal />
    </React.Fragment>
  );
}
