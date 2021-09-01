import express, { Request, Response } from 'express';
import axios from 'axios';
const env = require("dotenv").config();
import * as config from './../config';



const PATH = 'http://server:4002/team';
// const PATH =  "http://localhost:"+config.server;

// Post new team
export const postTeam = async (req: Request, res: Response) => {
  try {
    const answer = await axios.post(PATH, req.body);
    

    res.send(answer.data);
  } catch (error) {
    res.send(error);
  }
};
// get all teams
export const getTeam = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(PATH);

    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get one Team
export const getOneTeam = async (req: Request, res: Response) => {
  try {
    const answer = await axios.get(
      `${PATH}/${req.params.teamId}`
    );

    res.send(answer.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete team
export const deleteTeam = async (req: Request, res: Response) => {
  try {
    const answer = await axios.delete(
      `${PATH}/${req.params.teamId}`
    );
    res.send(answer.data);
  } catch (error) {
    res.send(error);
  }
};

//update Player 
export const addPlayer = async (req:Request,res:Response)=>{
    try {
        const answer = await axios.put(`${PATH}/${req.params.teamId}`,req.body);
        res.send(answer.data);
    } catch (error) {
        res.send(error)
    }
}
export const getteamNumbers= async (req: Request, res: Response) => {
    try {
      const answer = await axios.get(
        `${PATH}/checkNum/${req.params.teamId}`
      );
  
      res.send(answer.data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
