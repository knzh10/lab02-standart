import React, { useState } from 'react';
import "./CookiePopup.css";

export default function CookiePopup() {
  const [showModal, setShowModal] = useState( false );
  const [acceptedCookies, setAcceptedCookies] = useState( false );

  const toggleModal = () => {
    setShowModal( !showModal );
  };
  if ( showModal ) {
    document.body.classList.add( 'active-modal' )
  } else {
    document.body.classList.remove( 'active-modal' )
  }
  const handleAcceptCookies = () => {
    setAcceptedCookies( acceptedCookies );
    localStorage.setItem( 'cookieAccepted', 'true' );
    setShowModal( false );
  };

  const handleDeclineCookies = () => {
    setAcceptedCookies( acceptedCookies );
    localStorage.setItem( 'cookieAccepted', 'false' );
    setShowModal( false );
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Cookies
      </button>

      {showModal && <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <div>
            <h2>Використання cookies</h2>
            <p>
              Файли cookie допомагають нам забезпечити найкращий досвід роботи на нашому веб-сайті.
              Користуючись нашим веб-сайтом, ви погоджуєтеся на використання файлів cookie.
              <a href="https://privacy-policy"> Політика конфіденційності</a>
            </p>
            <div className="button-wrap">
              <button className="button button-accept" type="button" onClick={handleAcceptCookies}>Прийняти</button>
              <button className="button button-decline" type="button" onClick={handleDeclineCookies}>Відхилити</button>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}
