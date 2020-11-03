import React, { FC } from 'react';
import { StoreProvider, StoreContext, useStore } from '../StoreProvider';

import {
  AllergiesVisualizer,
  CarePlansVisualizer,
  ConditionsVisualizer,
  EncountersVisualizer,
  ImmunizationsVisualizer,
  MedicationsVisualizer,
  ObservationsVisualizer,
  PatientVisualizer,
  ProceduresVisualizer,
  ReportsVisualizer
} from './fhir-visualizer';
import Measurement from 'components/Measurement/Measurement';

type PatientRecordProps = {
  client: any
  resources: ReadonlyArray<Record<string, any>>;
  loading: Boolean
};

const getResourceByType = (patientRecord: ReadonlyArray<any>, resourceType: string) => {
  return patientRecord.filter(resource => resource.resourceType === resourceType);
};

const PatientRecord: FC<PatientRecordProps> = ({ resources, loading, client }) => {
  const { store, dispatch } = useStore();
  // const { patient } = store;
  console.log(resources)
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '60%'}}>
        <PatientVisualizer dispatch={dispatch} client={client} patient={store.patient} observations={getResourceByType(resources, 'Observation')}/>
        <ConditionsVisualizer rows={getResourceByType(resources, 'Condition')} />
        <ObservationsVisualizer rows={getResourceByType(resources, 'Observation')} />
        <ReportsVisualizer rows={getResourceByType(resources, 'DiagnosticReport')} />
        <MedicationsVisualizer rows={getResourceByType(resources, 'MedicationRequest')} />
        <AllergiesVisualizer rows={getResourceByType(resources, 'AllergyIntolerance')} />
        <CarePlansVisualizer rows={getResourceByType(resources, 'CarePlan')} />
        <ProceduresVisualizer rows={getResourceByType(resources, 'Procedure')} />
        <EncountersVisualizer rows={getResourceByType(resources, 'Encounter')} />
        <ImmunizationsVisualizer rows={getResourceByType(resources, 'Immunization')} />
      </div>
      <Measurement patient={store.patient} client={client} loading={loading} dispatch={dispatch}/>
    </div>
  );
};

export default PatientRecord;
