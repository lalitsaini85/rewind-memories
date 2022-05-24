import { Express } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';

const app =  express();
app.use(bodyParser.json({'limit':"30mb", extended:true}));
app.use(bodyParser.urlencoded({'limit':"30mb", extended:true}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://rewind-memories:rewind@123@cluster0.ovgypox.mongodb.net/?retryWrites=true&w=majority";
