import { PlayerModel } from "../models/players-model";
import { nbaPlayers } from "../database/nba-players-data";
import { AtributesModel } from "../models/attributes-model";

export const findAllPlayers = async ():Promise<PlayerModel[]> =>{
    return nbaPlayers;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> =>{
    return nbaPlayers.find((p)=> p.id === id)
}

export const insertPlayer = async(player: PlayerModel)=>{
    nbaPlayers.push(player)
}


export const deletePlayer = async(id: number) =>{
    const index = nbaPlayers.findIndex((p)=> p.id === id)

    if(index !== -1){
        nbaPlayers.splice(index, 1)
    }
    
    return index
}

export const updatePlayer = async (id:number, attributes: AtributesModel)=>{
    const index = nbaPlayers.findIndex((p)=> p.id === id);

    if(index != -1){
        nbaPlayers[index].attributes = attributes
    }

    return index
}