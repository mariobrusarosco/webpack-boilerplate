const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString

const Home = require('../../src/components/Home')

const app = express()
app.get('/', (res, req) => {
  const content = renderToString(<Home />)

  res.send(content)
})

app.listen(3000, () => {
  console.log('Listening at 3000')
})
