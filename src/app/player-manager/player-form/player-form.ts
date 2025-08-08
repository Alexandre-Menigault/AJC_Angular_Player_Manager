import {Component, output} from '@angular/core';
import {FormControl, FormGroup, isFormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Player} from '../player';
import {PlayerManagerEvents} from '../player-manager-events';

@Component({
  selector: 'pm-player-form',
  standalone: false,
  templateUrl: './player-form.html',
  styleUrl: './player-form.css',
})
export class PlayerForm {

  player: Player | null = null;

  playerAddedEvent = output<Player>()
  playerUpdatedEvent = output<Player>()

  playerForm: FormGroup =  new FormGroup({
    lastname: new FormControl(this.player?.lastname ?? '', [Validators.required, Validators.minLength(3)]),
    firstname: new FormControl(this.player?.firstname ?? '', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(this.player?.age ?? '', [Validators.required, Validators.min(0)]),
    teamid: new FormControl(this.player?.teamid ?? '', [Validators.required, Validators.min(0)]),
    position: new FormControl(this.player?.position ?? '', [Validators.required]),
  })

  constructor(
    private playerManagerEventService: PlayerManagerEvents,
  ) {

  }

  ngOnInit() {
    this.playerManagerEventService.event$.subscribe(event => {
      if(event.type === "updatePlayer") {
        this.player = event.player
        this.playerForm.patchValue(this.player)
      }
    })
  }

  newPlayer(){
    const player: Player = {
     lastname: this.playerForm.get('lastname')?.value,
      firstname: this.playerForm.get('firstname')?.value,
      age: this.playerForm.get('age')?.value,
      teamid: this.playerForm.get('teamid')?.value,
      position: this.playerForm.get('position')?.value,
    }
    console.log("Form Add player", player)

    this.playerAddedEvent.emit(player)
    this.player = null;
    this.playerForm.reset();


  }

  updatePlayer(){
    const player: Player = {
      id: this.player?.id,
      lastname: this.playerForm.get('lastname')?.value,
      firstname: this.playerForm.get('firstname')?.value,
      age: this.playerForm.get('age')?.value,
      teamid: this.playerForm.get('teamid')?.value,
      position: this.playerForm.get('position')?.value,
    }
    console.log("Form Update Player", player)


    this.playerUpdatedEvent.emit(player)
    this.player = null;
    this.playerForm.reset();
  }

}
