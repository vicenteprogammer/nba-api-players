import { PlayerModel } from "../models/players-model";
import { nbaPlayers } from "../database/nba-players-data";

export const findAllPlayers = async ():Promise<PlayerModel[]> =>{
    return nbaPlayers;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> =>{
    return nbaPlayers.find((p)=> p.id === id)
}