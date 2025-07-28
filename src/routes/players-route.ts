import { Router } from "express";
import { getPlayer } from "../controllers/player-controllers";

const playRoutes= Router();

playRoutes.get('/players', getPlayer)

export default playRoutes;