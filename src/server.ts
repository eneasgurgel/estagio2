import express from 'express';
import path from 'path';
import app from './app';
import 'dotenv/config';

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('server running'));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/build/') });
});
app.get('/login', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/build/') });
});
app.get('/register', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/build/') });
});

app.get('/home', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/build/') });
});
