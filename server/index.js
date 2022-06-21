import express from 'express';
import connection from './db/connection.js';
import Routes from './routes/paths.js';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app=express();

app.listen(8000);

// ! Using BodyParser
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


// ! DOTENV is used to protect our password and username
dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


//Connection function to the database
connection(username,password);


//Cors is used for the connectivity between diff browser
app.use(cors());




app.use('/',Routes)


