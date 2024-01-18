import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../componenets/App.jsx'
import Modal from 'react-modal';

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement('#root');
root.render(
  <BrowserRouter>
		<App />
  </BrowserRouter>
);