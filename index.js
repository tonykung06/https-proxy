const httpProxy = require('http-proxy')
const fs = require('fs')

httpProxy.createServer({
  ssl: {
    key: fs.readFileSync(process.env.SSL_KEY_PATH, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH, 'utf8')
  },
  target: process.env.HTTPS_PROXY_TARGET,
  secure: false // true/false, if you want to verify the SSL Certs
}).listen(443)
