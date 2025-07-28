import { PlayerModel } from "../models/players-model";

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
  },
  {
    id: 2,
    name: "Stephen Curry",
    age: 36,
    team: "Golden State Warriors",
    position: "PG",
    height: "6'2\"",
    weight: "185 lbs",
    overall: 95,
    attributes: {
      shooting: 98,
      passing: 90,
      defense: 75,
      speed: 88,
      dunk: 50,
      threept: 99,
      midRange: 90,
      strength: 68
    },
    specialty: "Sharpshooter",
    nationality: "USA"
  },
  {
    id: 3,
    name: "Giannis Antetokounmpo",
    age: 29,
    team: "Milwaukee Bucks",
    position: "PF/C",
    height: "7'0\"",
    weight: "243 lbs",
    overall: 97,
    attributes: {
      shooting: 70,
      passing: 78,
      defense: 92,
      speed: 90,
      dunk: 97,
      threept: 65,
      midRange: 72,
      strength: 94
    },
    specialty: "Slasher",
    nationality: "Greece"
  },
  {
    id: 4,
    name: "Victor Wembanyama",
    age: 20,
    team: "San Antonio Spurs",
    position: "C/PF",
    height: "7'4\"",
    weight: "230 lbs",
    overall: 89,
    attributes: {
      shooting: 75,
      passing: 70,
      defense: 92,
      speed: 80,
      dunk: 85,
      threept: 77,
      midRange: 79,
      strength: 85
    },
    specialty: "Rim Protector",
    nationality: "France"
  },
  {
    id: 5,
    name: "Luka Dončić",
    age: 25,
    team: "Dallas Mavericks",
    position: "PG/SG",
    height: "6'7\"",
    weight: "230 lbs",
    overall: 95,
    attributes: {
      shooting: 89,
      passing: 95,
      defense: 78,
      speed: 80,
      dunk: 70,
      threept: 88,
      midRange: 90,
      strength: 82
    },
    specialty: "Offensive Maestro",
    nationality: "Slovenia"
  }
];
