export interface PlayerModel {
    id: number,
    name: string,
    age: number,
    team: string,
    position: string,
    height: string,
    weight: string,
    overall: number,
    attributes:{
        shooting: number,
        passing: number,
        defense: number,
        speed: number,
        dunk: number,
        threept: number,
        midRange: number,
        strength: number
    },
    specialty: string,
    nationality: string
}