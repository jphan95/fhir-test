const measurement = require('../models/measurement')

createMeasurement = (req, res) => {
  const body = req.body;

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a measurement',
      })
  }

  const ms = new measurement(body)
  console.log(ms)

  if (!ms) {
      return res.status(400).json({ success: false, error: err })
  }

  ms
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: measurement._id,
              message: 'measurement created!',
          })
      })
      .catch(error => {
        console.log(error)
          return res.status(400).json({
              error,
              message: 'measurement not created!',
          })
      })
}

getMeasurements = async (req, res) => {
    await measurement.find({}, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!data.length) {
          console.log(data)
            return res
                .status(404)
                .json({ success: false, error: `Measurements not found` })
        }
        return res.status(200).json({ success: true, data })
    }).catch(err => console.log(err))
}

module.exports = {
    createMeasurement,
    getMeasurements
}