import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './player';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerManagerService {

  private readonly BASE_URL = "http://localhost:3000/players";
  constructor(private http: HttpClient) { }

  getAllPlayers(teamid: number | null, position: string | null): Observable<Player[]> {
    const url = new URL(this.BASE_URL);
    if(teamid) {
      url.searchParams.append("teamid", teamid.toString());
    }
    if(position) {
      url.searchParams.append("position", position);
    }
    return this.http.get<Player[]>(url.toString())
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.BASE_URL.toString(), player)
  }

  deletePlayer(player: Player): Observable<Player> {
    return this.http.delete<Player>(`${this.BASE_URL}/${player.id}`)
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.BASE_URL}/${player.id}`, player)
  }

}
