import { Router } from "express";
import { getPlayer, getPlayerById } from "../controllers/player-controllers";


const playRoutes= Router();

playRoutes.get('/players/list', getPlayer)
playRoutes.get('/players/:id', getPlayerById)

export default playRoutes;