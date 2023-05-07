const mysql = require("mysql");
const util = require("util");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
	host: process.env.GCP_HOST,
	user: process.env.GCP_USERNAME,
	password: process.env.GCP_PASSWORD,
	database: process.env.GCP_NAME,
});

connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function (err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected");
});

module.exports = connection;
