const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'front-end/build')));
app.get('/api/users', async (req,res) => {
    const json = 'data.json'
    const exists = fs.existsSync(json)
    if (exists){
        const readFile = fs.readFileSync(json)
        const data = JSON.parse(readFile.toString())
        return res.send(data)
    }
})
app.post('/api/create', (req,res) => {
    const {name} = req.body
    console.log(name);
    fs.writeFileSync('data.json', JSON.stringify({name: `hello from the BACKEND, ${name}`}))
    res.send(name)
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'front-end/build/index.html'));
  });
const PORT = process.env.PORT || 5000
app.listen( PORT,() => console.log(`server run at http://localhost:${PORT}`))