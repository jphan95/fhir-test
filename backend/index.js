const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const measurementRouter = require("./routes/measurement-router");
const userRouter = require("./routes/user-router");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/fhir-test", {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use("/api", [measurementRouter, userRouter]);

// router.route("/measurements").get(function(req, res) {
//   bpReading.find({}, function(err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});


