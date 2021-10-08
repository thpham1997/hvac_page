import React from 'react';
import './_footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='footer__contactInfo'>
        <div className='footer__phone'>
          <div className='footer__phoneHeader'>
            <FontAwesomeIcon icon={faPhone} />
            <h1>CALL US</h1>
          </div>
          <div className='footer__phoneNumber'>
            <p>Maryland:</p>
            <p>(888)-888-8888</p>
          </div>
        </div>
        <div className='footer__email'>
          <div className='footer__emailHeader'>
            <FontAwesomeIcon icon={faMailBulk} />
            <h1>EMAIL US</h1>
          </div>
          <a href='mailto:bill@hvacgroupmd.com'>bill@hvacgroupmd.com</a>
        </div>
        <div className='footer__hour'>
          <div className='footer__hourHeader'>
            <FontAwesomeIcon icon={faClock} />
            <h1>WORKING HOUR</h1>
          </div>
          <p>Sun: 9am to 12pm</p>
        </div>
      </div>
      <div className='footer__workingInfo'>
        <div className='footer__address'>
          <h1>HVAC GROUP</h1>
          <p>14309 Wicklow Ln
            <span>Laurel, MD 20707</span>
          </p>
        </div>
        <div className='footer__service'>
          <h1>OUR SERVICES</h1>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
      </div>
      <div className='footer__designerInfo'>
        <a href='https://github.com/thpham1997' target='_blank'>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          <p>Thanh Pham</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
