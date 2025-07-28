import { Request, Response } from "express"
import { getAllPlayerService, getFindPlayerById } from "../services/players-service";

export const getPlayer = async (req: Request, res: Response)=>{
    const httpResponse = await getAllPlayerService()
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById =  async(req: Request, res: Response)=>{
    const id = Number(req.params.id)
    const httpResponse = await getFindPlayerById(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}