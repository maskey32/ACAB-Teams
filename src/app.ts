import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import db from './config/database.config';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

db.sync().then(() => {
    console.log('database connected successfully');      
}).catch(err => {
    console.log(err);    
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
