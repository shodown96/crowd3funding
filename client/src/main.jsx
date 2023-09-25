import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const activeChain =  "goerli"; //"ethereum";

root.render(
  <ThirdwebProvider
    desiredChainId={ChainId.Goerli}
    activeChain={activeChain}
    clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)