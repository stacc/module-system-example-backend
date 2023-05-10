import express from "express"
const { myName, secret } = process.env
const app = express()

app.get('/', (req, res) => {
  res.send(`Hello, ${myName}! The password is ${secret}`)
})

app.listen(3000)
console.log('Express started on port 3000');

