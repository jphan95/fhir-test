import React, { FC, createContext, useContext, ReactNode } from 'react';

interface FHIRClientProviderProps {
  fhir: any; // TODO: fhirclient.Client
  children: ReactNode;
}

export const FHIRClientContext = createContext(null);

export const FHIRClientProvider: FC<FHIRClientProviderProps> = ({ fhir, children }) => (
  <FHIRClientContext.Provider value={fhir}>{children}</FHIRClientContext.Provider>
);

export const useFHIRClient = (): any => useContext(FHIRClientContext);
