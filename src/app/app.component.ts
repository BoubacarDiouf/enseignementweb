import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { CompteService } from './compte.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './alerte.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [CompteService, AlertService],
  imports: [CommonModule,HeaderComponent,ConnexionComponent,RouterOutlet,HttpClientModule,
  FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-sgbd';
}
