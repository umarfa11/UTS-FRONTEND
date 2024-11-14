import React from 'react'
import foto7 from '../components/asset/foto7.jpeg';
import foto8 from '../components/asset/foto8.jpeg';
import foto9 from '../components/asset/foto9.jpeg';
import foto10 from '../components/asset/foto10.jpeg';
import foto11 from '../components/asset/foto11.jpeg';
import foto12 from '../components/asset/foto12.jpeg';
import './fto.css'

const Foto = () => {
    return (
      <div className='image'>
        <div>
        <img src={foto7} alt="7" />
        <h1>Es Cincau</h1>
      </div>
      <div>
        <img src={foto8} alt="8" />
        <h1>Es Campur</h1>
      </div>
      <div>
        <img src={foto9} alt="9" />
        <h1>Es Coklat</h1>
      </div>
      <div>
        <img src={foto10} alt="10" />
        <h1>Es Buah</h1>
      </div>
      <div>
        <img src={foto11} alt="11" />
        <h1>Es Kuwut</h1>
      </div>
      <div>
        <img src={foto12} alt="12" />
        <h1>Es Teh</h1>
      </div>
      </div>
    );
}

export default Foto;