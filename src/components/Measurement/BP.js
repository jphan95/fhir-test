export const makeBP = (data, ehr_id) => {
  return {
    "resourceType": "Observation",
    "meta": {
        "versionId": "2",
        "lastUpdated": "2019-06-05T03:00:05.835-04:00",
        "tag": [
            {
                "system": "https://smarthealthit.org/tags",
                "code": "synthea-5-2019"
            }
        ]
    },
    "status": "final",
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "vital-signs",
                    "display": "vital-signs"
                }
            ]
        }
    ],
    "code": {
        "coding": [
            {
                "system": "http://loinc.org",
                "code": "55284-4",
                "display": "Blood Pressure"
            }
        ],
        "text": "Blood Pressure"
    },
    "subject": {
        "reference": `Patient/${ehr_id}`
    },
    "effectiveDateTime": data.date,
    "issued": data.date,
    "component": [
        {
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8462-4",
                        "display": "Diastolic Blood Pressure"
                    }
                ],
                "text": "Diastolic Blood Pressure"
            },
            "valueQuantity": {
                "value": data.reading.diastolic.value,
                "unit": "mm[Hg]",
                "system": "http://unitsofmeasure.org",
                "code": "mm[Hg]"
            }
        },
        {
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8480-6",
                        "display": "Systolic Blood Pressure"
                    }
                ],
                "text": "Systolic Blood Pressure"
            },
            "valueQuantity": {
                "value": data.reading.systolic.value,
                "unit": "mm[Hg]",
                "system": "http://unitsofmeasure.org",
                "code": "mm[Hg]"
            }
        }
    ]
}
}