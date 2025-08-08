import { Component } from '@angular/core';
import {Player, Position} from '../player';
import {PlayerManagerService} from '../player-manager-service';
import {PlayerManagerEvents} from '../player-manager-events';

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

  constructor(
    private playerManagerService: PlayerManagerService,
    private playerManagerEvents: PlayerManagerEvents) {
  }

  ngOnInit() {
    this.updatePlayers()

    this.playerManagerEvents.event$.subscribe(event => {
      if(event.type === "deletePlayer") {
        this.deletePlayer(event.player)
      }
    })

  }

  onPositionChanged(position: Position | null) {
    this.position = position;
    this.updatePlayers()
  }

  onTeamChangedEvent(teamid: number | null) {
    this.teamid = teamid;
    this.updatePlayers()
  }

  onAddedPlayer(player: Player) {
    this.playerManagerService.addPlayer(player).subscribe({
      next: (player) => {
        console.log("Player added", player)
        this.players.push(player)
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("complete");
      }
    })
  }

  onUpdatedPlayer(player: Player) {
    this.playerManagerService.updatePlayer(player).subscribe({
      next: (player) => {
        console.log("Player updated", player)
        this.updatePlayers()
      },
      error: (error) => {
        console.error(error);
      },
    })
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

  private deletePlayer(player: Player) {
    this.playerManagerService.deletePlayer(player).subscribe({
      next: (player) => {
        console.log("Player deleted", player)
        this.updatePlayers()
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {}
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
