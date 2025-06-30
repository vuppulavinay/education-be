

require('dotenv').config({ path: '.env.development' });
const express = require('express');
const app = express();

const jwt =require('jsonwebtoken')
const PORT = process.env.PORT || 3000
// console.log(jwt, "zzz")


const path = require('path');
const fs = require('fs');

app.get("/", (req, res, next) => {
    res.send("Hello Users");
    res.end();
})


app.listen(PORT, () => {
    console.log("listening on port" + PORT)
})

