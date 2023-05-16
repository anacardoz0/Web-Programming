const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, 'log.txt');
const message = "nacarulina \t 1256";

fs.appendFile(logFile, `${message}\n`, (err) =>{
    if(err) throw err;
    console.log(`Message "${message}" has been logged to ${logFile}`);
});