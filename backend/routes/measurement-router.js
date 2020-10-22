const express = require('express')

const MeasurementCtrl = require('../controllers/measurement-ctrl')

const router = express.Router()

router.get('/measurements', MeasurementCtrl.getMeasurements)
router.post('/measurement', MeasurementCtrl.createMeasurement)

module.exports = router