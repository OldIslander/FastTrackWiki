import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent},
  { path: "home/:id", component: HomeComponent},
  { path: 'user-registry/:companyId', component: UserRegistryComponent},
  { path: "teams", component: TeamsComponent},
  { path: "create-announcement", component: CreateAnnouncementComponent},
  { path: "create-team", component: CreateTeamComponent},
  { path: 'login', component: LoginComponent },
  { path: 'select-company', component: SelectCompanyComponent },
  { path: 'projects/:teamId', component: ProjectsComponent },
  { path: 'create-project/:teamId', component: CreateProjectComponent },
  { path: 'edit-project/:teamId/:projId', component: EditProjectComponent },
  { path: 'user-registry', component: UserRegistryComponent },
  { path: 'user-registry/:companyId', component: UserRegistryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
