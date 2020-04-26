import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.home();
  }

  home() {
    this.homeService.home().subscribe(
      data => {
        this.snackBar.open('Sucesso autenticação', 'X', {duration: 5000});
      },
      err => {
        let msg = 'Sistema indisponivel temporariamente';

        if (err['status'] === 401 || err['status'] === 401) {
          msg = err.error.error;
        }

        this.snackBar.open(msg, 'X', {duration: 5000});
        this.router.navigate(['/login'])
      }
    )
  }

  deslogar() {
   localStorage.clear();
   this.router.navigate(['/login']);
  }
}
