// web site - gets the files in client system thn browser makes the interface happen
// webApp - gets answer directly from the server using Node.js

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

//urlencoded will parse data coming from html form to grab the info which get posted in server from html form will use urlencoded
//by bodyparse able to pass http request & by urlencoded can get access to form data 
app.use(bodyParser.urlencoded({extended: true}))

// app.get("/", function(req, res){
//     res.send("Hello, World!")
// })

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)

    var result = num1+num2
    res.send("Result is "+result)
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)

    var bmi = weight / (height*height)
    res.send("Bmi is "+bmi)
})


app.listen(3000,function(){
    console.log("Server started")
})