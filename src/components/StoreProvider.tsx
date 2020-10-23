import React, { FC, createContext, useContext, useEffect, useState, useMemo, ReactNode, useReducer } from 'react';
import { useFHIRClient } from './FHIRClient';

interface PatientProviderProps {
  children: ReactNode;
  reducer: any;
  store: any;
}

export const StoreContext = createContext<any | null>(null);

export const StoreProvider: FC<PatientProviderProps> = ({ store, reducer, children }) => {
  // const client = useFHIRClient();
  // const [patient, setPatient] = useState<fhir.Patient | null>(null);
  // useEffect(() => {
    // client.patient.read().then((patient: fhir.Patient) => setPatient(patient));
    // client.patient.read().then((patient: fhir.Patient) => dispatch({type: 'updatePatient', patient}))
  // }, [client]);

  return store.patient == null ? (
    <div>Loading...</div>
  ) : (
    <StoreContext.Provider value={{store: store, reducer}}>{children}</StoreContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useStore = (): any => useContext(StoreContext)!;