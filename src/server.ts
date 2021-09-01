import * as config from './config';

import express from 'express';
// import playerRouter from './Player/player.router';
import teamRouter from './Team/team.router'
import morgan from 'morgan';
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use('/api/service2/team', teamRouter);

app.listen(config.PORT, () => {   
  console.log('listening to port 3500');
  console.log(config.server)
});
