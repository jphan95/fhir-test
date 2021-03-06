const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const measurement = new Schema({
  type: String,
  reading: Object,
  date: String
});

module.exports = mongoose.model("measurements", measurement);

// bg 
// {
//   type: "Blood Glucose",
//   reading: {
//     value: 2.1,
//     unit: "mmol/L"
//   },
//   date: "2019-10-19"
// },
// {
//   type: "Blood Glucose",
//   reading: {
//     value: 2.3,
//     unit: "mmol/L"
//   },
//   date: "2019-11-19"
// },
// {
//   type: "Blood Glucose",
//   reading: {
//     value: 2.4,
//     unit: "mmol/L"
//   },
//   date: "2019-12-19"
// },
// {
//   type: "Blood Glucose",
//   reading: {
//     value: 2.3,
//     unit: "mmol/L"
//   },
//   date: "2019-12-21"
// },
// {
//   type: "Blood Glucose",
//   reading: {
//     value: 2.5,
//     unit: "mmol/L"
//   },
//   date: "2019-12-25"
// }

// bp 
// {
//   type: "Blood Pressure",
//   reading: {
//     diastolic: {
//       value: 74.0,
//       unit: "mmHg"
//     },
//     systolic: {
//       value: 118.5,
//       unit: "mmHg"
//     }
//   },
//   date: "2019-10-19"
// },
// {
//   type: "Blood Pressure",
//   reading: {
//     diastolic: {
//       value: 73.0,
//       unit: "mmHg"
//     },
//     systolic: {
//       value: 117.3,
//       unit: "mmHg"
//     }
//   },
//   date: "2019-11-19"
// },
// {
//   type: "Blood Pressure",
//   reading: {
//     diastolic: {
//       value: 73.5,
//       unit: "mmHg"
//     },
//     systolic: {
//       value: 119.2,
//       unit: "mmHg"
//     }
//   },
//   date: "2019-12-19"
// },
// {
//   type: "Blood Pressure",
//   reading: {
//     diastolic: {
//       value: 72.1,
//       unit: "mmHg"
//     },
//     systolic: {
//       value: 116,
//       unit: "mmHg"
//     }
//   },
//   date: "2019-12-21"
// },
// {
//   type: "Blood Pressure",
//   reading: {
//     diastolic: {
//       value: 72.3,
//       unit: "mmHg"
//     },
//     systolic: {
//       value: 116.6,
//       unit: "mmHg"
//     }
//   },
//   date: "2019-12-25"
// }