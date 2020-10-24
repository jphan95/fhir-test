# SMART on FHIR React Template [![Build Status](https://travis-ci.com/standardhealth/smart-react-app-template.svg?branch=master)](https://travis-ci.com/standardhealth/smart-react-app-template)

This project is meant to be a template for a minimal SMART on FHIR React application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has installed the `fhirclient` library to facilitate the SMART authorization process and interactions with the EHR.

Uses fhirclient from this library http://docs.smarthealthit.org/client-js/

## Testing with a launcher

1. Run `npm install` within /fhir-test root folder to install the necessary packages.
2. cd to /backend and run `npm install` to install backend packages
3. run a local instance of a db with mongod, within seperate terminal run `npm seed` to seed measurements and users
4. run `npm run server` in a seperate terminal to start backend server
5. switch to /fhir-test and within seperate terminal run `npm start` to start local frontend
6. Launch the application from the SMART launcher.
    - Visit [SMART Launcher](http://launch.smarthealthit.org)
    - Launch `http://localhost:3000`
    - Select a practitioner and a patient (some patients will break, I use `Clara Martinez`) and select FHIR version R3 or R4
    - Page will load with name of selected patient and some measurements on the right hand side
    - Can currently edit the patient's first name, and send measurements to EHR. A hard refresh will show changes made as well as going back to the smart app launcher and viewing the patient data through there.
    
   
