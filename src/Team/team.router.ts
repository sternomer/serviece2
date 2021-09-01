import express from "express";
import  * as teamManager from './team.manager'
const router = express.Router();

router.post('/', teamManager.postTeam);
router.get('/', teamManager.getTeam);
router.get('/:teamId', teamManager.getOneTeam);
router.delete('/:teamId', teamManager.deleteTeam);
router.put('/:teamId', teamManager.addPlayer);
router.get('/checkNum/:teamId', teamManager.getteamNumbers);
// router.get('/checkvalid/:teamId', teamManager.checkIfTeamIsValidateCon);


export default router;
