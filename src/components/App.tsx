import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import logo from '../logo.png';
import { getPatientRecord } from '../utils/fhirExtract';
import { FHIRClientProvider } from './FHIRClient';
import { PatientProvider } from './PatientProvider';
import PatientRecord from './PatientRecord/PatientRecord';

interface AppProps {
  client: any; // TODO: fhirclient.Client
  fhir: any;
}

const App: FC<AppProps> = ({ fhir }) => {
  const [patientRecords, setPatientRecords] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPatientRecord(fhir).then((records: Array<any>) => {
      setPatientRecords(records);
      setLoading(false);
    });
  }, [fhir]);

  return (
  <Router>
    <FHIRClientProvider fhir={fhir}>
      <PatientProvider>
        <div>
          <Header logo={logo} />
          <Navigation resourcesLength={patientRecords.length}/>
        </div>
        <div>
          <PatientRecord client={fhir} resources={patientRecords} loading={loading} />
        </div>
      </PatientProvider>
    </FHIRClientProvider>
  </Router>
  );
};

export default App;
