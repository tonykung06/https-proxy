const httpProxy = require('http-proxy')
httpProxy.createServer({
  ssl: {
    key: fs.readFileSync(process.env.SSL_KEY_PATH, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH, 'utf8')
  },
  target: process.env.HTTPS_PROXY_TARGET,
  secure: true // Depends on your needs, could be false.
}).listen(443)
