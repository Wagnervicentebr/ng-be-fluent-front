import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login).subscribe(
      data => {
        localStorage['token'] = data['token'];

        const dadosUsuario = JSON.parse(
          atob(data['token'].split('.')[1]));
          console.log(dadosUsuario);
        if (dadosUsuario.username && dadosUsuario.email) {
          localStorage['email'] = dadosUsuario.email;
          localStorage['username'] = dadosUsuario.username;
        } else {
          delete localStorage['token'];
          this.snackBar.open('JWT Inválid');
        }

        this.router.navigate(['/home']);
      },
      erro => {
        let msg = 'Sistema temporariamente indisponivel';

        //Retorna mensagem de email/senha incorreta
        if (erro['status'] === 401 || erro['status'] === 400) {
          msg = erro.error.error;
        }

        this.snackBar.open(msg, 'X', {duration: 5000});
      }
    )
  }
}
