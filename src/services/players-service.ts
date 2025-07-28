import * as PlayerRepository from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-help";

export const getAllPlayerService = async ()=>{
 const data = await PlayerRepository.findAllPlayers()
 let response = null;

 if(data){
    response = await ok(data)
 }else{
    response = await noContent()
 }

 return response
}

export const getFindPlayerById = async(id:number)=>{
   const data = await PlayerRepository.findPlayerById(id)
   let response = null

   if(data){
      response = await ok(data)
   }else{
      response = await noContent()
   }

   return response;
}

