import React, { FC, ReactNode } from 'react';
import { StoreContext } from 'components/StoreProvider';

interface PatientProviderProps {
  children: ReactNode;
  patient: any; // fhir.Patient | null;
}

export const mockedPatient = {
  name: [{ given: ['Jane'], family: 'Doe' }],
  birthDate: '1960-04-01',
  gender: 'female',
  address: 'Anycity, Anystate'
};

const MockedPatientProvider: FC<PatientProviderProps> = ({ patient = null, children }) => (
  <StoreContext.Provider value={patient || mockedPatient}>{children}</StoreContext.Provider>
);

export default MockedPatientProvider;
