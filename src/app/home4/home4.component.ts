import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home4',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home4.component.html',
  styleUrl: './home4.component.css'
})
export class Home4Component {
  constructor(private router: Router,) {
  }
}
