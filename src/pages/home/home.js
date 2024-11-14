import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import './home.css'
const home = () => {
  return (
    <div>
        <div className='tengah'>
            <h1>Selamat datang di Dapur Rahayu!</h1>
            <p>Kami adalah tempat yang bergerak di bidang pemasaran dan penjualan makanan dan minuman.</p>
            <p>Silahkan kunjungi kami di <a href="">dapurrahayu.com</a> untuk informasi lebih lanjut.</p>
            <p>Jika anda ingin melakukan pemesanan, silahkan hubungi kami melalui <a href="wa.me/+6285232971811" className='icon'><FaWhatsapp/>Whatsapp</a>.</p>
            <p>Silahkan melakukan order dan pelunasan pembayaran sebelum hari H!!!</p>
            <p>Selamat berkunjung</p>
            <p>Terima kasih atas kepercayaan anda.</p>
        </div>
    </div>
  )
}

export default home