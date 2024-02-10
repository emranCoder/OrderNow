const express = require('express');
var cors = require('cors')
const path = require('path');
const db = require('./config/db');
const dotenv = require('dotenv');



const app = express()
dotenv.config();

const options = {
    origin: `http://localhost:${process.env.PORT}`,
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: '*'
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(options))


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`);
    db();
});
