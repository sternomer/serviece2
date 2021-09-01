import express from 'express';
import * as playerController from './player.manager';

const router = express.Router();

router.use(express.json());
router.post('/', playerController.postPlayer);
router.get('/', playerController.getPlayers);
router.delete('/:playerId', playerController.deletePlayer);
router.put('/:playerId', playerController.updatePlayer);
router.get('/:playerId', playerController.getonePlayer);