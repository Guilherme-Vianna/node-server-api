const mysql = require('mysql2/promise'); 

const connection = mysql.createPool({
  host: 'containers-us-west-158.railway.app',
  user: 'root',
  password: 'ZcqqozD1vqNPulKl0PG1',
  database: 'railway',
  port: '5922'
}); 

module.exports = connection;