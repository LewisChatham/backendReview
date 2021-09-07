const express = require("express")
const path = require("path")

const dbConnection = require("./config/connection")

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

dbConnection.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log("Server is now listening on port: " + PORT)
    })
})