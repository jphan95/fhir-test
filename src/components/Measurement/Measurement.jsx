import React, { FC, useEffect, useState, useContext } from 'react';
import api from '../../api';
import {makeBP} from './BP';

const Measurement = ({ patient, loading, client }) => {
  const [measurements, setMeasurements] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.getAllMeasurements().then((res) => {  
      setMeasurements(res.data.data)
    }).then(() => {
      getSetUser(patient);
    })
  }, [])

  const getSetUser = async (patient) => {
    const ehr_id = patient.id;

    if (patient) {
      api.getUser(ehr_id).then((res) => {
        const user = res.data.data[0];
        setUser(user)
      })
      .catch((err) => {
        console.log(err);
        console.log(patient)
        const user = {
          firstName: patient.name[0].given[0],
          lastName: patient.name[0].family,
          ehr_id,
          birthDate: patient.birthDate
        }
        api.createUser(user).then((res) => {
          console.log(res)
          setUser(res.data.user);
          console.log(res.user);
        })
      })
    }
  }

  const migrate = async (bp) => {
    const ehr_id = user.ehr_id;
    const ret = makeBP(bp, ehr_id);
    console.log(ret)
    client.create(ret).then((ret) => console.log(ret))
  }
  
  return loading ? <div>loading</div> : (
    <div style={{width: '40%'}}>
      <div>
        <div style={style.sectionHeader}>Blood Glucose Summary</div>

        {measurements.filter((m) => m.type === 'Blood Glucose').map((bg, i) => 
          <li key={i} style={{listStyle: 'none'}}>
            BG Level: {bg.reading.value + " " + bg.reading.unit} {bg.date}
          </li>
        )}
          
          {/* Average Fasting
          Average Pre-Meal
          Average Post-Meal
          Hypoglycemia Count	#0
          Bedtime Count	#0
          Overnight Count	#0
          Critical High Count	#0
          Critical Low Count	#0
          Low Count	#0
          Normal Count	#0
          High Count */}

        <div style={style.sectionHeader}>Blood Pressure Summary</div>

        {measurements.filter((m) => m.type === 'Blood Pressure').map((bp, i) => 
          <li key={i} style={{listStyle: 'none'}}>
            Diastolic: {bp.reading.diastolic.value} {bp.reading.diastolic.unit} Systolic: {bp.reading.systolic.value} {bp.reading.systolic.unit} {bp.date} 
            <div style={{border: "1px solid lightblue", borderRadius: "5px", width: "6em" }} onClick={() => migrate(bp)}>Send to EHR</div>
          </li>
        )}
    
          {/* Average BP
          Normal Count
          Elevated Count
          Stage 1 Hypertension
          Stage 2 Hypertension
          Critical High 
          Arrhythmia Count  */}
      </div>
    </div>
  );
};

const style = {
  sectionHeader: {
    'fontFamily': 'Open Sans, sans-serif',
    'color': '#6b8eb6',
    'fontSize': '1em',
    'fontWeight': 'bold',
    'textTransform': 'uppercase',
    'margin': '40px 0'
  }
}

export default Measurement;
