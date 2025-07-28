import { PlayerModel } from "../models/players-model";
import * as PlayerRepository from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-help";

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


export const createPlayer= async (player:PlayerModel)=>{
   let response = null
   
   if(Object.keys(player).length !== 0){
      await PlayerRepository.insertPlayer(player)
      response = await created()
   }else{
      response = await badRequest()
   }

   return response
}

