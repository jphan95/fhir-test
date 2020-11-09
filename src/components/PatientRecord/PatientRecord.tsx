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
import { finished } from 'stream';

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
  console.log(getResourceByType(store.records, 'Encounter'))
  console.log(store.records)
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '60%'}}>
        <PatientVisualizer dispatch={dispatch} client={client} patient={store.patient} observations={getResourceByType(resources, 'Observation')}/>
        <ConditionsVisualizer rows={getResourceByType(resources, 'Condition')} />
        <ObservationsVisualizer rows={getResourceByType(store.observations, 'Observation')} />
        <ReportsVisualizer rows={getResourceByType(resources, 'DiagnosticReport')} />
        <MedicationsVisualizer rows={getResourceByType(resources, 'MedicationRequest')} />
        <AllergiesVisualizer rows={getResourceByType(resources, 'AllergyIntolerance')} />
        <CarePlansVisualizer rows={getResourceByType(resources, 'CarePlan')} />
        <ProceduresVisualizer rows={getResourceByType(resources, 'Procedure')} />
        <EncountersVisualizer rows={getResourceByType(resources, 'Encounter')} />
        <ImmunizationsVisualizer rows={getResourceByType(resources, 'Immunization')} />
      </div>
      <Measurement store={store} client={client} loading={loading} dispatch={dispatch} encounter={getResourceByType(store.records, 'Encounter').find(e => e.status === 'in-progress' || e.status === 'planned' || e.status === 'finished')}/>
    </div>
  );
};

export default PatientRecord;
