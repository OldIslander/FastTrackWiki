import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  newProj: Project = {
    id: 9999, // This should be ignored by the backend
    name: "Team name not provided",
    description: "Team desc not provided",
    active: false,
    team: null
  };
  name: string = "";
  description: string = "";

  currentUserName: string = "pinky"; // This should be updated by a global app variable on init
  currentCompanyId: number = 6; // This should be updated by a global app variable on init
  teamId: string = ""; // Updated from params on init

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamId = params['teamId']
      console.log("TEAM ID: " + this.teamId);
    });
  }

  onSubmit() {
    console.log("SUBMIT");
    this.newProj.name = this.name;
    this.newProj.description = this.description;
    this.projectService.createProject(parseInt(this.teamId), this.newProj);
  }

}