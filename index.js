require("dotenv/config");
require("./db");


const express = require("express");
//const routes = require("./routes");


const app = express();
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const routes = require("./routes");
app.use('/user',routes)
app.use('/', routes)
app.use('/consult',routes)

app.listen(process.env.PORT || 3000);