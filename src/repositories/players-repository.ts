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