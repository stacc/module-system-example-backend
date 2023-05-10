import express from "express"
const { myName, password } = process.env
const app = express()

app.get('/', (req, res) => {
  res.send(`Hello, ${myName}! The password is ${password}`)
})

app.listen(3000)
console.log('Express started on port 3000');

