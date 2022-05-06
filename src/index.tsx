import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { DAppProvider, Config } from '@usedapp/core'
import { NETWORK_ID, RPC_URL } from './config/config';

const config: Config = {
  readOnlyChainId: NETWORK_ID,
  readOnlyUrls: {
    [NETWORK_ID]: RPC_URL,
  },
  multicallAddresses: {
    [592]: "0x80aec401cFbbaB05d4FC8d2B8a358c48386D89Ad"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
