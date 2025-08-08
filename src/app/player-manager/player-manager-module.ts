import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerManager } from './player-manager/player-manager';
import { TeamFilter } from './team-filter/team-filter';
import { PositionFilter } from './position-filter/position-filter';
import { PlayerList } from './player-list/player-list';
import { PlayerForm } from './player-form/player-form';
import { PlayerCard } from './player-card/player-card';



@NgModule({
  declarations: [
    PlayerManager,
    TeamFilter,
    PositionFilter,
    PlayerList,
    PlayerForm,
    PlayerCard
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerManager
  ]
})
export class PlayerManagerModule { }
