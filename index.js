require("dotenv/config");
require("./db");
const express = require("express");

import swaggerUi from "swagger-ui-express";
//const  swaggerUi = require('swagger-ui-express')
import swaggerDocs from "./swagger.json";
//const swaggerDocs = require('./swagger.json')
const app = express();
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


const routes = require("./routes");
app.use('/user',routes)
app.use('/', routes)
app.use('/consult', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(process.env.PORT || 3000);