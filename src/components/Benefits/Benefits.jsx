import React from 'react';
import { Truck, CircleFadingArrowUp, Gift, Headset } from 'lucide-react';
import './Benefits.css';

const benefits = [
  {
    title: 'Free Shiping',
    text: 'For All Orders Over $200',
    icon: Truck,
  },
  {
    title: '30 Days Returns',
    text: 'Money Back Guarantee',
    icon: CircleFadingArrowUp,
  },
  {
    title: 'Promotions',
    text: '10% Members Discount',
    icon: Gift,
  },
  {
    title: 'Online Suport',
    text: 'Free Support 24/7',
    icon: Headset,
  },
];

const Benefits = () => {
  return (
    <section className='flex-center benefits-section'>
      <article className='flex-center container'>
        {benefits.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className='flex-center benefit-item'>
              <div className='flex-center'>
                <IconComponent />
              </div>
              <div className='flex-column benefit-item__content'>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Benefits;
