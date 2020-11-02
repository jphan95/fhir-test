import React from 'react';
import ReactDOM from 'react-dom';
import FHIR from 'fhirclient';

import App from './components/App.tsx';
import './styles/index.scss';
import './utils/fontawesomeLibrary';

const rootElement = document.getElementById('root');

const smartLaunch = () => {
  // Authorize application
  // FHIR.oauth2
  //   .init({
  //     clientId: "aac145fa-a1b3-4730-b5ac-c072b383394a",
  //     scope: 'launch/patient openid profile'
  //   })
  //   .then(fhir => {
  //     console.log(fhir)
      ReactDOM.render(
          <App />
        ,rootElement
      );
    // });
};

smartLaunch();
