import {Component, Input, input} from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'pm-player-card',
  standalone: false,
  templateUrl: './player-card.html',
  styleUrl: './player-card.css'
})
export class PlayerCard {
  @Input() player!: Player;

}
