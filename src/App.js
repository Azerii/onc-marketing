import React, { useEffect } from 'react';
import './App.css';

import Home from './pages/Home';
import ExitPopup from './components/ExitPopup'

function App() {

  const CookieService = {

    setCookie(name, value, days) {
        let expires = '';

        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }

        document.cookie = name + '=' + (value || '')  + expires + ';';
    },

    getCookie(name) {
        const cookies = document.cookie.split(';');

        for (const cookie of cookies) {
            if (cookie.indexOf(name + '=') > -1) {
                return cookie.split('=')[1];
            }
        }

        return null;
      }
    }

  const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('#exit-popup').classList.add('show');
        
        // Set the cookie when the popup is shown to the user
        CookieService.setCookie('exitIntentShown', true, 2);
    }
  };

  const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('exit-popup') || // user clicks on mask
        e.target.className === 'close' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('#exit-popup').classList.remove('show');
    }
  };

  useEffect(() => {

    if (!CookieService.getCookie('exitIntentShown')) {
      setTimeout(() => {
          document.addEventListener('mouseout', mouseEvent);
          document.addEventListener('keydown', exit);
      }, 10_000);
    }
  })
  return (
      <div className="App">
        <ExitPopup />
        <Home />
      </div>
  );
}

export default App;
