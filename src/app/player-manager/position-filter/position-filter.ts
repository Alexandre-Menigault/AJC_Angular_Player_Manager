import {Component, Input, output} from '@angular/core';
import {Position} from '../player';

@Component({
  selector: 'pm-position-filter',
  standalone: false,
  templateUrl: './position-filter.html',
  styleUrl: './position-filter.css'
})
export class PositionFilter {
  @Input() positions: Position[] = []
  positionChangedEvent = output<Position | null>()


  onPositionChange(event: Event) {
    const select : HTMLSelectElement = event.target as HTMLSelectElement;
    if(select.value === "") {
      this.positionChangedEvent.emit(null)
    } else {
      this.positionChangedEvent.emit(select.value as Position)
    }
  }
}
