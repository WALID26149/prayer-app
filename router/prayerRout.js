const express = require('express');
const prayerTimeData = require('../controller/prayerTime.js');

const router = express.Router();

router
  .route('/')
   .get(prayerTimeData.getPrayerTimes)

module.exports = router;
