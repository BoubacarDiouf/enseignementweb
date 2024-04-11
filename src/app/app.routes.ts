import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { HeaderComponent } from './header/header.component';
import { CoursComponent } from './cours/cours.component';
import { Home4Component } from './home4/home4.component';

export const routes: Routes = [
    {'path':'',component:ConnexionComponent},
    {'path':'cahierdetexte',component:HeaderComponent},
    {'path':'responsable',component:HomeComponent},
    {'path':'professeur',component:Home2Component},
    {'path':'cours',component:CoursComponent},
    {'path':'avisetudiant',component:Home4Component},
    {'path':'formulaire',component:Home3Component},



];
