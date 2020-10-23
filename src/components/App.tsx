import React, { FC, useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import logo from '../logo.png';
import { getPatientRecord } from '../utils/fhirExtract';
import { FHIRClientProvider } from './FHIRClient';
import { StoreProvider } from './StoreProvider';
import PatientRecord from './PatientRecord/PatientRecord';

interface AppProps {
  client: any; // TODO: fhirclient.Client
  fhir: any;
}

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case 'updatePatient':
      console.log(state,action);
      state.patient = action.patient;
      return state
    default: 
      return state
  }
}

const App: FC<AppProps> = ({ fhir }) => {
  const [patientRecords, setPatientRecords] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  const initState = {};
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    getPatientRecord(fhir).then((records: Array<any>) => {
      setPatientRecords(records);
      setLoading(false);
    });
    fhir.patient.read().then((patient:fhir.Patient) => dispatch({type: "updatePatient", patient}))
  }, [fhir]);

  return (
  <Router>
    <FHIRClientProvider fhir={fhir}>
      <StoreProvider store={state} reducer={{dispatch}}>
        <div>
          <Header logo={logo} />
          <Navigation resourcesLength={patientRecords.length}/>
        </div>
        <div>
          <PatientRecord client={fhir} resources={patientRecords} loading={loading} />
        </div>
      </StoreProvider>
    </FHIRClientProvider>
  </Router>
  );
};

export default App;
