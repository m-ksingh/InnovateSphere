
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cl1 from "../Component/Clintile/Png-01.png"
import cl2 from "../Component/Clintile/Png-02.png"
import cl3 from "../Component/Clintile/Png-03.png"
import cl4 from "../Component/Clintile/Png-04.png"
import cl5 from "../Component/Clintile/Png-05.png"
import cl6 from "../Component/Clintile/Png-06.png"
import cl7 from "../Component/Clintile/Png-07.png"
import cl8 from "../Component/Clintile/Png-08.png"
import cl9 from "../Component/Clintile/Png-09.png"
import cl10 from "../Component/Clintile/Png-10.png"
import cl11 from "../Component/Clintile/Png-11.png"

import cl12 from "../Component/Clintile/Png-12.png"
import cl13 from "../Component/Clintile/Png-13.png"

import cl14 from "../Component/Clintile/Png-14.png"
import cl15 from "../Component/Clintile/Png-15.png"
import cl16 from "../Component/Clintile/Png-16.png"
import cl17 from "../Component/Clintile/Png-17.png"
import cl18 from "../Component/Clintile/Png-18.png"
import cl19 from "../Component/Clintile/Png-19.png"
import cl20 from "../Component/Clintile/Png-20.png"
import cl21 from "../Component/Clintile/Png-21.png"

const ClientsCarousel = () => {
  const images = [
    { id: 1, src: cl1, alt: 'Client Logo 1' },
    { id: 2, src: cl2, alt: 'Client Logo 2' },
    { id: 3, src: cl3, alt: 'Client Logo 3' },
    { id: 4, src: cl4, alt: 'Client Logo 4' },
    { id: 5, src: cl5, alt: 'Client Logo 5' },
    { id: 6, src: cl6, alt: 'Client Logo 6' },
    { id: 7, src: cl7, alt: 'Client Logo 7' },
    { id: 8, src: cl8, alt: 'Client Logo 4' },
    { id: 9, src: cl9, alt: 'Client Logo 5' },
    { id: 10, src: cl10, alt: 'Client Logo 6' },
    { id: 11, src: cl11, alt: 'Client Logo 7' },

    { id: 12, src: cl12, alt: 'Client Logo 2' },
    { id: 13, src: cl13, alt: 'Client Logo 3' },
    { id: 14, src: cl14, alt: 'Client Logo 4' },
    { id: 15, src: cl15, alt: 'Client Logo 5' },
    { id: 16, src: cl16, alt: 'Client Logo 6' },
    { id: 17, src: cl17, alt: 'Client Logo 7' },
    { id: 18, src: cl18, alt: 'Client Logo 4' },
    { id: 19, src: cl19, alt: 'Client Logo 5' },
    { id: 20, src: cl20, alt: 'Client Logo 6' },
    { id: 21, src: cl21, alt: 'Client Logo 7' },
  
  ];

  const renderThumbs = () =>
    images.map((image) => (
      <div key={image.id}>
        <img src={image.src} alt={image.alt} />
      </div>
    ));

  return (
    <div className="clients mt-100" >
      <div className="container">
        <div className="section-header">
          <h2>Our Clients</h2>
          <p>We don't just build software, we build your business.</p>
        </div>
        <Carousel
          className="clients-carousel"
          showThumbs={false}
          renderThumbs={renderThumbs}
          infiniteLoop={true}
          autoPlay={true}
          emulateTouch={true}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
         
          slidesToShow={5}
          centerMode={true}
          centerSlidePercentage={25}
        
        
        >
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientsCarousel;

