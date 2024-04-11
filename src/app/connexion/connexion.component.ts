import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alerte.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [HttpClient],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private compteService: CompteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit(): void {
    console.log('initiliasitation page connexion');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    this.compteService.verificationUser({
      "login": this.loginForm.value.username,
      "mot_de_passe": this.loginForm.value.password
    }).subscribe({
      next: (response: HttpResponse<any>) => {

        console.log('reponse = ', response)

        if(response.body.roles == 'responsable_classe'){
          this.router.navigateByUrl('responsable');
        }
        else  if(response.body.roles == 'Etudiant'){
          this.router.navigateByUrl('avisetudiant');
        }
        else  if(response.body.roles == 'enseignant'){
          this.router.navigateByUrl('professeur');
        }

        localStorage.setItem('user', JSON.stringify(response.body));
      },
      error: (err) => {
        if (err.status == 401) {
          this.alertService.openSnackBar('Utilisateur non authentifié.', );
        }
      }
    });
  }
}
