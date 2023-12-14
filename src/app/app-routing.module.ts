import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ProfileComponent } from './setting/profile/profile.component';


const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"home", canActivate:[authGuard],component:HomeComponent},
  {path:"movies",canActivate:[authGuard], component:MoviesComponent},
  {path:"tv",canActivate:[authGuard], component:TvComponent},
  {path:"people", canActivate:[authGuard],component:PeopleComponent},
  {path:"profile", canActivate:[authGuard],component:ProfileComponent},
  {path:"setting", loadChildren:()=>import('./setting/setting.module').then((x)=> x.SettingModule)},
  {path:"movieDetails/:id/:media_type", canActivate:[authGuard],component:MovieDetailsComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
