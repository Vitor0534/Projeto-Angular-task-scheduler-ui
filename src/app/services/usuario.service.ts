import { Injectable } from '@angular/core';
import {Usuario} from "../models/usuario.model";

//o root indica qual a classe que está fornecendo a instancia única da classe de serviço de user
// lembre-se que o angular trabalha com o pattern Singleton, ou seja, uma unica instancia
// por classe dentro do programa
@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  //como não existe backend, foi inserido um user padrão como parametro
  usuarios: Usuario[] = [
      new Usuario('Vitor de almeida', 'vitor@email.com',new Date(),'123456')
  ];

  constructor() { }

  //a sintaxe do TS para metodos é nomeFunção(parametroN:tipoN): tipoRetorno{codigo}
  adicionarUsuario(usuario: Usuario): void{
    console.log(usuario);
    this.usuarios.push(usuario);
  }
}
