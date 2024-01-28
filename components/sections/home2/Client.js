
import ClientSlider1 from '@/components/slider/ClientSlider1'

import React from 'react';

export default function client() {
  return (
     <section className="clients-section pt_70 pb_70">
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
      <div className="auto-container">
      <div className="content-box">
        {/*Theme Carousel*/}
          <ClientSlider1 />                        
        </div>
      </div>
    </section>
  );
};
