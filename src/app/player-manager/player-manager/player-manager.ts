import { Component } from '@angular/core';
import {Player, Position} from '../player';
import {PlayerManagerService} from '../player-manager-service';

@Component({
  selector: 'pm-player-manager',
  standalone: false,
  templateUrl: './player-manager.html',
  styleUrl: './player-manager.css'
})
export class PlayerManager {

  players: Player[] = [];
  private position: Position | null = null;
  private teamid: number | null = null;

  teams: number[] = []
  positions: Position[] = []

  constructor(private playerManagerService: PlayerManagerService) {
  }

  ngOnInit() {
    this.updatePlayers()
  }

  onPositionChanged(position: Position | null) {
    this.position = position;
    this.updatePlayers()
  }

  onTeamChangedEvent(teamid: number | null) {
    this.teamid = teamid;
    this.updatePlayers()
  }

  private updatePlayers() {
    this.playerManagerService.getAllPlayers(this.teamid, this.position).subscribe({
      next: (players) => {
        this.players = players;
        this.teams = this.getAllTeams()
        this.positions = this.getAllPositions()

      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("complete");
      }
    })
  }

  private getAllTeams(): number[] {
    return Array.from(new Set(this.players.map(
      player => player.teamid
    )))
  }
  private getAllPositions(): Position[] {
    return Array.from(new Set(this.players.map(
      player => player.position
    )))
  }

}
