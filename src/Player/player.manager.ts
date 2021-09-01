import express, { Request, Response } from 'express';
import axios from 'axios';
const env = require("dotenv").config();

const PATH = 'http://server:4002/player';

//Post new Player
export const postPlayer = async (req:Request,res:Response)=>{
    try {
        const answer = await axios.post(PATH,req.body);
        res.send(answer.data)
    } catch (error) {
        res.send(error)
    }
}
// Get all Players 
export const getPlayers = async (req:Request,res:Response)=>{
    try {
        const answer = await axios.get(PATH);
        res.send(answer.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get One Player
export const getOnePlayer = async (req:Request,res:Response)=>{
    try {
        const answer = await axios.get(PATH);
        res.send(answer.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}