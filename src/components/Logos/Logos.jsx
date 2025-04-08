import React from 'react';
import './Logos.css';

const logos = [
  {
    name: 'nike logo',
    img: './nike_logo.png',
  },
  {
    name: 'north face logo',
    img: './north_face.png',
  },
  {
    name: 'chanel logo',
    img: './chanel_logo.png',
  },
  {
    name: 'gucci-logo',
    img: './gucci_logo.png',
  },
];

const Logos = () => {
  return (
    <section className='flex-center logos-section'>
      <article className='flex-center container'>
        <div className='flex-center logos-section-content'>
          {logos.map((item, index) => (
            <div key={index} className='flex-center logos-section-container'>
              <img src={item.img} alt={item.name} className='logo' />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Logos;
