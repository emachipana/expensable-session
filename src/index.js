import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { AuthProvider } from './context/auth-context';
import { reset, global } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Global styles={reset} />
        <Global styles={global} />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
