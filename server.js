const fs = require("fs");
const https = require("https");
const server = require('./src/App');

const privateKey = fs.readFileSync('./secrets/server.key').toString();
const certificate = fs.readFileSync('./secrets/server.crt').toString();

const credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, server);

httpsServer.listen(8004, () => {
  console.log('Server running at https://localhost:8004!');
});
