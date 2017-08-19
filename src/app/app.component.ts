import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  technology: string;
  bio: string;

  teamMembers = [{name: 'Surendra', technology: 'Ruby', bio: 'Senior dev....'},                 
                  { name: 'Anirudh', technology: 'Rails', bio: 'Developer....'},
                  { name: 'Narendra', technology: 'Android', bio: 'All in all....' }
                ]

addMemberToTeam() {
  this.teamMembers[0].name = 'Something';
  console.log(this.teamMembers);
}       

  deleteDev(developerIndex: number) {
    this.teamMembers.splice(developerIndex, 1);
  }
}
