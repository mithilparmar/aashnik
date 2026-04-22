import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <footer className="sitemap">
      <div className="sitemap__container">
        {/* Company Column */}
        <div className="sitemap__column">
          <h3 className="sitemap__heading">COMPANY</h3>
          <ul className="sitemap__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products Column */}
        <div className="sitemap__column">
          <h3 className="sitemap__heading">PRODUCTS</h3>
          <ul className="sitemap__links">
            <li><Link to="/products#barcode-scanners">Barcode Scanners</Link></li>
            <li><Link to="/products#touch-pos">Touch POS System</Link></li>
            <li><Link to="/products#receipt-printers">Thermal Receipt Printers</Link></li>
            <li><Link to="/products#printers">Printers</Link></li>
            <li><Link to="/products#label-printers">Label Printers</Link></li>
            <li><Link to="/products#keyboards-mice">Keyboards and Mice</Link></li>
            <li><Link to="/products#currency-counter">Currency Counter</Link></li>
            <li><Link to="/products#cash-registers">E-Cash Registers</Link></li>
            <li><Link to="/products#mobile-printers">Mobile Printers</Link></li>
            <li><Link to="/products#cash-drawers">Cash Drawers</Link></li>
            <li><Link to="/products#spares">Genuine Spares</Link></li>
            <li><Link to="/products#laptops-desktops">Laptops and Desktops</Link></li>
          </ul>
        </div>

        {/* Social and Contact Column */}
        <div className="sitemap__column">
          <h3 className="sitemap__heading">SOCIAL</h3>
          <div className="sitemap__social">
            <a href='https://www.linkedin.com/in/aashishparmaraashnik/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} color='#a39274' />
            </a>
            <a href='mailto:info@aashnik.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faEnvelope} color='#a39274' />
            </a>
            <a href='https://www.instagram.com/aashnik_inc/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} color='#a39274' />
            </a>
          </div>
          <br />
          <h3 className="sitemap__heading">ADDRESS</h3>
          <div className='sitemap__address'>
            <a href='https://maps.app.goo.gl/ioeBBxLYzEkbfqGf9' target='_blank' rel='noreferrer'>
              {"F-52, National Plaza"}
              <br />
              {"R.C.Dutt Road, Alkapuri"}
              <br />
              {"Vadodara, Gujarat"}
              <br />
              {"India - 390007"}
            </a>
          </div>
          <br />
          <h3 className="sitemap__heading">PHONE</h3>
          <div className='sitemap__phone'>
            <a href='tel:+919725001256' target='_blank' rel='noreferrer'>
              {"+91 97250 01256"}
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="sitemap__info">
        <p>
          {"Copyright © 2024 AASH'NIK Incorporated."}
          <br />
          <br />
          {"Designed by: "}
          <a href="https://www.mithilparmar.com/" target='_blank' rel='noreferrer'>
            Mithil Ashish Parmar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Sitemap;
