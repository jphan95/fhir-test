const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

// router.get('/measurement/:id', UserCtrl.getUser)
router.get('/user/:ehr_id', UserCtrl.getUser)
router.post('/user', UserCtrl.createUser)

module.exports = router