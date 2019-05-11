import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../ma_liste_de_teams';
import { Team, TeamService } from '../team.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  teams: Team[];

  selectedTeam : Team;


  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  onSelect(team: Team): void{
    this.selectedTeam = team;
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => {
      teams.sort((a, b) => b.score - a.score);
      this.teams = teams;
    });
  }
}
