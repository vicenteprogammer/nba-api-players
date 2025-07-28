import { Router } from "express";
import * as controllers from "../controllers/player-controllers";


const playRoutes= Router();

playRoutes.get('/players/list', controllers.getPlayer)
playRoutes.post('/players', controllers.playerCreate)
playRoutes.get('/players/:id', controllers.getPlayerById)
playRoutes.delete('/players/:id', controllers.playerDelete)

export default playRoutes;