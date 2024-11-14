import React from 'react';
import foto from '../components/asset/foto.jpg';
import foto2 from '../components/asset/foto2.jpg';
import foto3 from '../components/asset/foto3.jpeg';
import foto4 from '../components/asset/foto4.jpg';
import foto5 from '../components/asset/foto5.jpg';
import foto6 from '../components/asset/foto6.jpg';

import './foto.css'

const Foto = () => {
  return (
    <div className='image'>
      <div>
        <img src={foto} alt="1" />
        <h1>Risol Mayo</h1>
      </div>
      <div>
        <img src={foto2} alt="2" />
        <h1>Risol Sayur</h1>
      </div>
      <div>
        <img src={foto3} alt="3" />
        <h1>Sosis Solo</h1>
      </div>
      <div>
        <img src={foto4} alt="4" />
        <h1>Risol Ayam</h1>
      </div>
      <div>
        <img src={foto5} alt="5" />
        <h1>Donat Glaze</h1>
      </div>
      <div>
        <img src={foto6} alt="6" />
        <h1>Kue Kukus</h1>
      </div>
    </div>
  );
}

export default Foto;