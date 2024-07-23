import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Usuario } from '../model/usuario';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'api/usuarios';
  ///assets/usuarios.json

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Usuario[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(usuarios => console.log(usuarios))
    );
  }

  save(record: Usuario) {
    console.log(record);
    return this.httpClient.post<Usuario[]>(this.API, record).pipe(first());
  }
}
