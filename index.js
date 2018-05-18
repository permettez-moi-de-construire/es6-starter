const config = require('./config')
process.env = config(process.env)

const express = require('express')
const nunjucks = require('nunjucks')

// server.js
// load the things we need
const app = express()
const njkLoader = new nunjucks.FileSystemLoader('views')

const njk = new nunjucks.Environment(njkLoader, {autoescape: false})
njk.express(app)

njk.addGlobal('process', process)
app.set('view engine', 'njk')

// statics
app.use(express.static('dist'))

app.use('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT)
console.log(`Magic port ${process.env.PORT}`)
