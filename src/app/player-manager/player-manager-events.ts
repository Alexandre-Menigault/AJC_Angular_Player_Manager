import { Injectable } from '@angular/core';
import {PlayerEvent} from './player-events';
import {Subject} from 'rxjs';
import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerManagerEvents {
  event$ = new Subject<PlayerEvent>()

  emitDeleteEvent(player: Player) {
    this.event$.next({type: "deletePlayer", player: player})
  }

  emitUpdatePlayerFormEvent(player: Player) {
    this.event$.next({type: "updatePlayer", player: player})
  }

}
