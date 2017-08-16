import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

window.copyToClipboard = (function() {
  var _dataString = null;
  document.addEventListener("copy", function(e){
    if (_dataString !== null) {
      try {
        e.clipboardData.setData("text/plain", _dataString);
        e.preventDefault();
      } finally {
        _dataString = null;
      }
    }
  });
  return function(data) {
    _dataString = data;
    document.execCommand("copy");
  };
})();

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  );
});
