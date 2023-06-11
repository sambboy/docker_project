import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
function CarouselB() {
    const data = [
        {
         image:"https://edenphone.fr/wp-content/uploads/2020/12/tendances_2020.jpg", 
         caption:"Caption",
         description:"Description Here"
        },
        {
          image:"https://static.vecteezy.com/ti/vecteur-libre/p1/100101-accessoires-de-telephone-gratuit-vectoriel.jpg", 
          caption:"Caption",
          description:"Description Here"
         }
      ]

 const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
  return (
    <div className=''>

    
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item className='h-50' key={i}> 

            {/* <img 
            className="d-block w-100 img-fluid"  
            src={slide.image}  
            alt="image"  
            style={{ width:'90vw',height:"60vh" }}
            /> */}
            <img
            className="d-block w-100 img-fluid"
            src={slide.image}
            alt="Slider"
            style={{ width: '90vw', height: '60vh' }}
          />

          
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
    </div>

  )
}

export default CarouselB;