const axios = require('axios');
const catchAsync = require('../utils/catchAsync.js');
const AppError = require('../utils/appError.js');

exports.getPrayerTimes = catchAsync(async (req, res) => {
    const response = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity?city=alger&country=your_country_code&method=1`
    );

    // Extract prayer times from the API response
    const prayerTimes = response.data.data.timings;

    // App error
    if (!response) {
      return next(new AppError('No response found', 404));
    }
    // res the prayer times
    res.render('base')
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //       response
    //     }
    // });
});
