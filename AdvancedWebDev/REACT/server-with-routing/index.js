// FOUNDATION
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

// ROUTE HANDLERS
app.get("/", (req, res) => { // Root route (no "/" at end of url)
    res.redirect("/home")
})

app.get("/home", (req, res) => {
    res.send("I am from the home route")
})

app.get("/about", (req, res) => {
    res.send("I am from the About")
})

app.get("/contact", (req, res) => {
    res.send("I am from the contact")
})

app.get("/fruit/:d", (req, res) => {
    console.log(req.params.d)
    res.end(`I am the ${req.params.d} page`)
})

app.get("/name/:myName/bank/:money", (req, res) => {
    const myName = req.params.myName;
    const money = Number(req.params.money);

    res.send(isNaN(money)
        ? "Danger fool, need a number"
        : `My name is ${myName} and I have ${Intl.NumberFormat('en-US', { 
            style: "currency", 
            currency: "USD" 
        }).format(money)}`
    );
})

// Catch all for paths not defined above
app.get("*", (req, res) => {
    res.send("No mathing route")
})

// LISTENERS
app.listen(port, console.log(`Basic Server App Running on Port ${port}`)) // This only works on computer, not once deployed

// Fruits and veggies letter D