
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var config = require('./src/config/config');
var app = express();
var path = require('path')
var router = require('./src/routes/userRoutes');
var mongoose = require('./src/config/connection');

//rest API requirements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', router);

app.use(express.static(path.join(__dirname, '/uploads')))

app.listen(config.PORT, () => {
	console.log("server listing on port " + config.PORT);
	console.log("Swagger run on http://localhost:3000/api-docs/");
});

module.exports = app;