import express from 'express';
import filePath from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/home', (req, res) => {
    res.render("home.ejs");
});

app.get('/about', (req, res) => {
    res.render("home.ejs");
});

app.get('/latest', (req, res) => {
    res.render("home.ejs");
});

app.get('/tech-news', (req, res) => {
    res.render("home.ejs");
});

app.get('/contact', (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);    
});