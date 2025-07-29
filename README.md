# nba-api-players
Uma api para você que gosta de basquete e quer uma base de dados de fácil acesso para o seu projeto front-end ou melhorar a própria.

### Tecnologias usadas: 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
### Construção do projeto

#### Desenho da arquitetura
![Alt text](./docs/imgs/Nba-api-architecture.png "Optional Title")

- **Definição dos controllers**
- **Definação das services**
- **Definição do repositories functions**
- **Definição dos models**


#### Definição dos scripts

```ts
"scripts": {
    "start:dev": "tsx --env-file=.env src/server.ts",
    "start:watch": "tsx watch --env-file=.env src/server.ts",
    "dist": "tsup src",
    "start:dist": "npm run dist && node dist/src/server.js" 
  },
```

#### Criando o arquivo server e o app
```ts
import express, { json } from "express";

function createApp(){
    const app = express();

    app.use(json());
    
    return app;

}

export default createApp;
```

```ts
import createApp from "./app";

const server = createApp()

server.listen(process.env.PORT,()=>{
    console.log('Server is Activated')
})
```

#### Implementação do services, routes e controller

```ts
import { Router } from "express";
import { getPlayer } from "../controllers/player-controllers";

const playRoutes= Router();

playRoutes.get('/players', getPlayer)

export default playRoutes;
```

```ts
import { Request, Response } from "express"

export const getPlayer = (req: Request, res: Response)=>{
    res.status(200).json({player:'lebron'});
}
```

```ts
export const getPlayerService = async ()=>{
    return {player: 'Michael Jordan'}
}
```

#### Implementação do player repositories

```ts
interface PlayerModel{
    id:number,
    name: string
}

const database: PlayerModel[] =[
    {id: 1, name:"Michael Jordan"},
    {id:2, name: "Lebron James"}
] 


export const findAllPlayers = async ():Promise<PlayerModel[]> =>{
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> =>{
    return database.find((p)=> p.id === id)
}
```

#### Implementação do database
```ts
export const nbaPlayers: PlayerModel[] = [
  {
    id: 1,
    name: "LeBron James",
    age: 39,
    team: "Los Angeles Lakers",
    position: "SF/PF",
    height: "6'9\"",
    weight: "250 lbs",
    overall: 96,
    attributes: {
      shooting: 88,
      passing: 92,
      defense: 86,
      speed: 84,
      dunk: 90,
      threept: 83,
      midRange: 85,
      strength: 92
    },
    specialty: "Playmaker",
    nationality: "USA"
  }
} 
```
#### Implementação do Create player 
- Route
```ts
playRoutes.post('/players', controllers.playerCreate)
```
- Controller
```ts
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
```
- Service
```ts
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
```
- Repository
```ts
export const insertPlayer = async(player: PlayerModel)=>{
    nbaPlayers.push(player)
}
```

#### Implementação do Delete player

- Service
```ts
export const deletePlayerService = async (id:number)=>{
   let response = null
   const data = await PlayerRepository.deletePlayer(id)
   if(data != -1){
      response = await ok({message:'Deleted'})
   }else{
      response = await notFound()
   }

   return response
} 
```

#### Implementação do Update player
- Service
```ts
export const updatePlayerService = async (id: number, attributes:AtributesModel) =>{
   let response = null
   const data = await PlayerRepository.updatePlayer(id, attributes)

   if(data != -1){
      response = await ok({message:'Update sucessful'})
   }
   else{
      response = notFound()
   }

   return response
}
```