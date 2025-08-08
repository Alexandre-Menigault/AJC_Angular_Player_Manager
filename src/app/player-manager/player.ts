export type Player = {
  id : string,
  firstname: string,
  lastname: string,
  teamid: number,
  position: Position,
  age: number,
}

export type Position = "attaquant" | "defenseur" | "milieu"
