import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PlayerManagerModule} from './player-manager/player-manager-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayerManagerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
