const express = require('express')
const app = express()
const PORT = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('welcome in my blog')
})

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

app.listen(PORT, () => {
    console.log("hello")
})