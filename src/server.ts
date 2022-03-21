import express from 'express';
import path from 'path';
import app from './app';
import 'dotenv/config';

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('server running'));

app.use(express.static(path.resolve(__dirname, '../client/build')));
