import {Component, Input} from '@angular/core';
import {Player, Position} from '../player';
import {PlayerManagerService} from '../player-manager-service';

@Component({
  selector: 'pm-player-list',
  standalone: false,
  templateUrl: './player-list.html',
  styleUrl: './player-list.css'
})
export class PlayerList {
  @Input() players: Player[] = [];



}
