import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroService } from '../services/cadastro.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  sexoList: any;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.sexoList = [
      {'name': 'Masculino'},
      {'name': 'Feminino'}
    ]
  }

  /**
   * @name gerarForm
   * @descricao Metodo responsavel por criar uma instancia do formulario no component
   * 
   */
  gerarForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      sexo: [null, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  cadastrar() {
    if (this.form.invalid) {
      return;
    }

    const usuario: Usuario = this.form.value;
    this.cadastroService.cadastrar(usuario)
        .subscribe(
          data => {
            console.log(data['token']);
            this.snackBar.open('Cadastro realizado com sucesso, efetue o login', 
              'X', {duration: 5000,  panelClass: ['blue-snackbar']} )
            this.router.navigate(['/login']);
          },
          erro => {
            console.log(erro)
            let msg = 'Sistema temporariamente indisponível';
            if (erro['status'] === 400) {
              msg = erro.error.error;
            }
            this.snackBar.open(msg, 'X', {duration: 5000})
          }
        )

  }

  

}
