import React, { FC, useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import logo from '../logo.png';
import { getPatientRecord } from '../utils/fhirExtract';
import { FHIRClientProvider } from './FHIRClient';
import { StoreProvider } from './StoreProvider';
import PatientRecord from './PatientRecord/PatientRecord';
import Home from './Home';

import Launcher from './Launcher';

// interface AppProps {
//   client: any; // TODO: fhirclient.Client
//   fhir: any;
// }

// const reducer = (state:any, action:any) => {
//   switch (action.type) {
//     case 'updatePatient':
//       return {...state, patient: action.patient};
//     case 'updateUser': 
//       return {...state, user: action.user};
//     default: 
//       return state
//   }
// }

const App: FC = () => {
//   const [patientRecords, setPatientRecords] = useState<Array<any>>([]);
//   const [loading, setLoading] = useState(true);
//   console.log(fhir)
//   const initState = {};
//   const [state, dispatch] = useReducer(reducer, initState)
//   useEffect(() => {
//     getPatientRecord(fhir).then((records: Array<any>) => {
//       setPatientRecords(records);
//       setLoading(false);
//     });
    // fhir.patient.read().then((patient:fhir.Patient) => dispatch({type: "updatePatient", patient}))
    // fhir.user.read().then((user:any) => dispatch({type: 'updateUser', user}))
    
  // }, [fhir]);

  return (
  <Router>
    <Route path="/app" component={Home} />
    <Route path="/" component={Launcher} exact />
  </Router>
  );
};

export default App;
