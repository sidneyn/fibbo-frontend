import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Usuario } from '../model/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  usuarios$: Observable<Usuario[]>;
  displayedColumns = ['nome', 'email', 'cpf', 'senha', 'dataCadastro', 'actions'];

  //usuariosService: UsuariosService;

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.usuariosService = new UsuariosService();
    this.usuarios$ = this.usuariosService.list().pipe(
      catchError(error => {
        this.onError('Error ao carregar os usuários!')
        return of([])
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg
    });
  }

  ngOnInit(): void {}

  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }

}
