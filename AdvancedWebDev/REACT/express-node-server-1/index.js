// FOUNDATION
const express = require("express") // Import in Node is to require
const app = express() // Creating instance of application
// console.log(process) // Look in .env for PORT variable when live to find port number
const port = process.env.PORT || 3000 // If using hosting site, will pull PORT from .env, else use port 3000 (will not work if something else running on 3000)

// ROUTE HANDLERS
app.get("/", (req, res) => { // Root route (no "/" at end of url)
    // console.log(req)
    // res.end("I am from the backend!!!") // If someone goes to root route, this string gets sent
    res.redirect("/home")
})

app.get("/home", (req, res) => {
    res.send("I am from the redirect")
})

// LISTENERS
app.listen(port, console.log(`Basic Server App Running on Port ${port}`)) // This only works on computer, not once deployed
