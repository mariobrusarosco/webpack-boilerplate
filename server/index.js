const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'))

app.get('/test', (req, res) => res.send('ok'))
app.listen(PORT,  () => {
	console.log(`server listening at ${PORT}`)
})


