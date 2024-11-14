import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./home.css";
const home = () => {
  return (
    <div>
      <div className="tengah">
        <h1>Selamat datang di Dapur Rahayu!</h1>
        <p>
          Kami adalah tempat yang bergerak di bidang pemasaran dan penjualan
          makanan dan minuman.
        </p>
        <p>
          Silahkan kunjungi kami di <a href="dapurrahayu.com">dapurrahayu.com</a> untuk
          informasi lebih lanjut.
        </p>
        <p>
          Jika anda ingin melakukan pemesanan, silahkan hubungi kami melalui{" "}
          <a href="wa.me/+6285232971811" className="icon">
            <FaWhatsapp />
            Whatsapp
          </a>
          .
        </p>
        <p>
          Silahkan melakukan order dan pelunasan pembayaran sebelum hari H!!!
        </p>
        <p>Selamat berkunjung</p>
        <p>Terima kasih atas kepercayaan anda.</p>
        <div>
          <h1>temui kami di:</h1>
          <div>
            <iframe title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306.1593484262254!2d114.33352139615742!3d-8.257824532187486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1517a6d4dab4b%3A0x4b83e8306e327be6!2sTOKO%20BAMBANG!5e0!3m2!1sid!2sid!4v1731569294212!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
