import React from 'react'
import logo from './asset/Logo.png'
import './Header.css'

const header = () => {
    const Logo = {
        nama: "Dapur Rahayu",
        imageURL: "",
        imageSize: 200,
    };
  return (
    <header className='header'>
        <div className='headerlogo'>
            <img
                src={Logo.imageURL || logo}
                alt={`logo of ${Logo.nama}`}
                style={{width: Logo.imageSize, height: Logo.imageSize}} 
            />
            <h1>{Logo.nama}</h1>
        </div>
        <div className='tengah'>
            <h1>ANEKA JAJANAN</h1>
        </div>
    </header>
  )
}

export default header
