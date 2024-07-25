import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosFormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
