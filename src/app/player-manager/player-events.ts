import {Player} from './player';

export type PlayerEvent = {
  type: "deletePlayer" | "updatePlayer",
  player: Player
}
