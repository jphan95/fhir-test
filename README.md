# SMART on FHIR React Template [![Build Status](https://travis-ci.com/standardhealth/smart-react-app-template.svg?branch=master)](https://travis-ci.com/standardhealth/smart-react-app-template)

This project is meant to be a template for a minimal SMART on FHIR React application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has installed the `fhirclient` library to facilitate the SMART authorization process and interactions with the EHR.

The rest of your application can be built out in `App.js` and beyond.  If additional FHIR resources are needed it can fetched in `index.js` by making a call using `client.request()` and passed down to `App.js`.

Uses fhirclient from this library http://docs.smarthealthit.org/client-js/

## Errors with R2 and R3 format, inside `node_modules/fhir-visualizers/build/index.js` change lines 115-130 to: 

`if (raceExt) {
      race =  Array.isArray(raceExt.extension) ? raceExt.extension[0].valueString || raceExt.extension[0].valueCoding.display 
      : raceExt.valueCodeableConcept.coding[0].display;
    } else {
      race = null;
    }
 `

    const ethExt = patient.extension.find(e => {
      return e.url === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity';
    });
    let ethnicity;

    if (ethExt) {
      ethnicity = Array.isArray(ethExt.extension) ? ethExt.extension[0].valueString || ethExt.extension[0].valueCoding.display : ethExt.valueCodeableConcept.coding[0].display;
    } else {
      ethnicity = null;
    }

## Testing with a launcher

1. Run `yarn install` to install the necessary packages.
2. Run `yarn start` to start the application.
3. Launch the application from the SMART launcher.
    - Visit [SMART Launcher](http://launch.smarthealthit.org)
    - Launch `http://localhost:3000`
    - Select a practitioner and a patient
    - Page will load with name of selected patient displayed.
    
## Running tests

Tests can be run by executing:
```shell script
yarn test
```

## Running the code linter

Code liniting can be run by executing:

```shell script
yarn lint
```

Some issues can be automatically corrected with:

```shell script
yarn lint-fix
```
