import React from "react";
import { VscSend } from "react-icons/vsc";
import QrCode from "../../assets/Qr Code.png";
import play from "../../assets/play.png";
import appStore from "../../assets/appstore.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
    
const { t, i18n } = useTranslation();
  return (
    <div className="w-full bg-black p-8 sm:p-12 mt-20">
      <Container maxWidth="lg" sx={{ p: "0px" }}>
        <div className="flex flex-wrap items-start justify-between space-y-8 sm:space-y-0">
          <div className="w-full sm:w-auto">
            <h3 className="text-white text-2xl">Exclusive</h3>
            <h4 className="text-white text-xl mt-4">{t('Subscribe')} </h4>
            <p className="text-white mt-4">{t('Get 10% off your first order')} </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-white bg-black border-2 p-2 w-48"
              />
              <button
                className="p-2 rounded-r focus:outline-none"
                style={{ marginLeft: "-40px" }}
              >
                <VscSend className="text-gray-600" style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <h4 className="text-white text-2xl">{t('Support')} </h4>
            <p className="text-white mt-4">
            111 Bijoy Sarani, Dhaka, <br /> DH 1515, Bangladesh.  
            </p>
            <p className="text-white mt-1"> exclusive@gmail.com</p>
            <p className="text-white mt-1"> +88015-88888-9999</p>
          </div>

          <div className="w-full sm:w-auto">
            <h4 className="text-white text-2xl">Account</h4>
            <NavLink to="/profile" className="text-white block mt-4">
             {t('My Account')}  
            </NavLink>
            <NavLink to="/login" className="text-white block">
             {t('Login / Register')}  
            </NavLink>
            <NavLink to="/cart" className="text-white block">
            {t('Cart')}   
            </NavLink>
            <NavLink to="/favorite" className="text-white block">
            {t(' Wishlist')}  
            </NavLink>
            <NavLink to="/" className="text-white block">
           {t(' Shop')}   
            </NavLink>
          </div>

          <div className="w-full sm:w-auto">
            <h4 className="text-white text-2xl">Quick Link</h4>
            <a href="#" className="text-white block mt-4">
           {t('Privacy Policy')}    
            </a>
            <a href="#" className="text-white block">
            {t(' Terms Of Use')}  
            </a>
            <a href="#" className="text-white block">
            {t('FAQ')}   
            </a>
            <NavLink to="/contact" className="text-white block">
            {t('Contact')}   
            </NavLink>
          </div>

          <div className="w-full sm:w-auto">
            <h4 className="text-white text-2xl">Download App</h4>
            <p className="text-white mt-4">Save $3 with App New User Only</p>
            <div className="flex mt-2">
              <img src={QrCode} alt="QR Code" className="w-16 h-16" />
              <div className="ml-5">
                <button
                  onClick={() =>
                    (window.location.href = "https://play.google.com/store")
                  }
                  className="block"
                >
                  <img src={play} alt="Play Store" />
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "https://www.apple.com/app-store/")
                  }
                  className="block mt-4"
                >
                  <img src={appStore} alt="App Store" />
                </button>
              </div>
            </div>
            <div className="flex text-2xl text-white mt-4 justify-between w-40">
              <FaFacebookF />
              <FiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <hr className="mt-20 border-gray-700" />
        <p className="text-white text-center mt-4">
         {t('Copyright Rimel 2022. All rights reserved.')}  
        </p>
      </Container>
    </div>
  );
};

export default Footer;
