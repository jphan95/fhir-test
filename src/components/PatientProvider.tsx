import React, { FC, createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useFHIRClient } from './FHIRClient';

interface PatientProviderProps {
  children: ReactNode;
}

export const PatientContext = createContext<any | null>(null);

export const PatientProvider: FC<PatientProviderProps> = ({ children }) => {
  const client = useFHIRClient();
  const [patient, setPatient] = useState<fhir.Patient | null>(null);
  console.log(patient)

  useEffect(() => {
    client.patient.read().then((patient: fhir.Patient) => setPatient(patient));
  }, [client]);

  return patient == null ? (
    <div>Loading...</div>
  ) : (
    <PatientContext.Provider value={{patient,setPatient}}>{children}</PatientContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useCtx = (): any => useContext(PatientContext)!;