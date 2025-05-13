import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


var heroData = [
  {
    id: 1,
    image: require('../assets/images/bg-img1.jpg'), 
    title: 'Bine ai venit la Școala Șoferi de Vis',
    description: 'Cu instructori profesioniști și mașini moderne, te pregătim pentru un drum sigur și încrezător spre permis!',
    link: '#about'
  },
  {
    id: 2,
    image: require('../assets/images/bg-img2.jpeg'), 
    title: 'Obține permisul fără stres',
    description: 'Alege pachetul potrivit pentru tine și începe cursurile cu program flexibil și pregătire practică de calitate.',
    link: '#preturi'
  }
 
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {
          heroData.map(hero => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                
                <Carousel.Caption>
                  <h2>{hero.title}</h2>
                  <p>{hero.description}</p>
                  <a className="btn btn-primary" href={hero.link}>
                    Află mai mult <i className="fas fa-chevron-right ms-1"></i> 
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </section>
  );
}

export default AppHero;