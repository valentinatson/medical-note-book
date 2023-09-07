const express = require("express");
const patientRoute = require("./routes/patientRoute")
const hospitalRoute = require("./routes/hospitalRoute")
const cors = require("cors")
const app = express()




app.use(cors())
app.use(express.json())



app.use("/patient" , patientRoute)
app.use("/hospital" , hospitalRoute)


app.listen(5000 || process.env.PORT)