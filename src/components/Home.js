import React, { useState, useEffect, useReducer } from "react";
import logo from '../logo.png';
import FHIR from 'fhirclient';
import { getPatientRecord } from '../utils/fhirExtract';
import { FHIRClientProvider } from './FHIRClient';
import { StoreProvider } from './StoreProvider';
import PatientRecord from './PatientRecord/PatientRecord';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

/**
 * Wraps everything into `FhirClientProvider` so that any component
 * can have access to the fhir client through the context.
 */

const reducer = (state, action) => {
  switch (action.type) {
    case 'updatePatient':
      console.log(action)
      return {...state, patient: action.patient};
    case 'updateUser': 
      console.log(action)
      return {...state, user: action.user};
    default: 
      return state
  }
}

export default function Home() {
  const [patientRecords, setPatientRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fhir, setFhir] = useState(null);
  const initState = {};
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    FHIR.oauth2.ready().then((client) => {
      window.FHIR = client;
      setFhir(client);
      getPatientRecord(client).then((records) => {
        console.log(records)
        setPatientRecords(records);
        setLoading(false)
        client.patient.read().then((patient) => dispatch({type: "updatePatient", patient}))
        client.user.read().then((user) => dispatch({type: 'updateUser', user}))
    })
  })
  }, [])


  return (
    <FHIRClientProvider fhir={fhir}>
      <StoreProvider store={state} reducer={{dispatch}}>
        <div>
          <Header logo={logo} />
          <Navigation resourcesLength={patientRecords && patientRecords.length}/>
        </div>
        <div>
          <PatientRecord client={fhir} resources={patientRecords} loading={loading} />
        </div>
    </StoreProvider>
  </FHIRClientProvider>
  // <div>
  //   HELLO
  // </div>
  );
}
