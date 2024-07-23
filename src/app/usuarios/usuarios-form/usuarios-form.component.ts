import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export class UsuariosFormComponent implements OnInit{

  hide = true;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: UsuariosService,
    private snackBar: MatSnackBar,
    private location: Location
  ){
    this.form = this.formBuilder.group({
      nome: [null],
      email: [null],
      cpf: [null],
      senha: [null]
    });
  }

  ngOnInit(): void {

  }

  toggleHide() {
    this.hide = !this.hide;
  }

  onSubmit(){
    console.log(this.form.value);
    this.service.save(this.form.value).subscribe(result =>
      this.onSuccess(),
      error => { this.onError() }
    );
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Usuário salvo com sucesso!', '' , {duration: 5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Error ao salvar usuário!', '' , {duration: 5000});
  }
}
