import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// El ResizeObserver de react-slideshow-image dispara este aviso del navegador al rotar la
// pantalla. Es inofensivo, pero el overlay de webpack-dev-server lo muestra como error fatal.
if (process.env.NODE_ENV === 'development') {
  const resizeObserverMessages = [
    'ResizeObserver loop completed with undelivered notifications.',
    'ResizeObserver loop limit exceeded'
  ];

  window.addEventListener('error', (event) => {
    if (resizeObserverMessages.indexOf(event.message) >= 0) {
      event.stopImmediatePropagation();

      const overlay = document.getElementById('webpack-dev-server-client-overlay');

      if (overlay != null) {
        overlay.remove();
      }
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
