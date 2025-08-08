import {Component, Input, output} from '@angular/core';
import {Player} from '../player';
import {PlayerManagerEvents} from '../player-manager-events';

@Component({
  selector: 'pm-player-card',
  standalone: false,
  templateUrl: './player-card.html',
  styleUrl: './player-card.css'
})
export class PlayerCard {
  @Input() player!: Player;

  playerDeletedEvent = output()

  constructor(private playerManagerService: PlayerManagerEvents) {

  }

  onDeleteButtonClick() {
    this.playerManagerService.emitDeleteEvent(this.player)
  }

  onEditButtonClick() {
    this.playerManagerService.emitUpdatePlayerFormEvent(this.player)
  }

}
