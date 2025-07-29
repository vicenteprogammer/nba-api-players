import { Request, Response } from "express"
import { createPlayer, deletePlayerService, getAllPlayerService, getFindPlayerById, updatePlayerService } from "../services/players-service";
import { badRequest } from "../utils/http-help";

export const getPlayer = async (req: Request, res: Response)=>{
    const httpResponse = await getAllPlayerService()
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById =  async(req: Request, res: Response)=>{
    const id = Number(req.params.id)
    const httpResponse = await getFindPlayerById(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const playerCreate= async (req: Request, res: Response ) =>{
    const player = req.body;
    if(player){
        let httpResponse = await createPlayer(player)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
      const response =   await badRequest()
      res.status(response.statusCode).json(response.body)
    }
    
    
} 

export const playerDelete = async(req:Request, res: Response)=>{
    const id = Number(req.params.id)
    const httpResponse = await deletePlayerService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const playerUpdate = async (req: Request, res:Response)=>{
    const id = Number(req.params.id)
    const bodyValue = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}
