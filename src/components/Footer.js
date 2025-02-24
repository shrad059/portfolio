import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-text padd-15">
        <p className="whitespace-nowrap" style={{ margin: '0' }}>
      •───────made with <span> </span>
      <span className="inline-block">
        <FontAwesomeIcon icon={faHeart} />
      </span>
      <span> </span>and chai<span> </span>
      <span className="inline-block">
        <FontAwesomeIcon icon={faMugHot} />
      </span>───────•
    </p>        </div>
      </div>
    </footer>
  );
};

export default Footer;
