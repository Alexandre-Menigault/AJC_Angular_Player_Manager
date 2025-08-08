import {Component, Input, output} from '@angular/core';
import {Position} from '../player';

@Component({
  selector: 'pm-team-filter',
  standalone: false,
  templateUrl: './team-filter.html',
  styleUrl: './team-filter.css'
})
export class TeamFilter {

  @Input() teams: number[] = []
  teamsChangedEvent = output<number | null>()


  onTeamChange(event: Event) {
    const select : HTMLSelectElement = event.target as HTMLSelectElement;
    if(select.value === "") {
      this.teamsChangedEvent.emit(null)
    } else {
      this.teamsChangedEvent.emit(parseInt(select.value))
    }
  }

}
