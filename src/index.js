import express from "express"
const { MY_NAME } = process.env
const app = express()

app.get('/', (req, res) => {
  res.send(`Hello, ${MY_NAME}!`)
})

app.listen(3000)
console.log('Express started on port 3000');

