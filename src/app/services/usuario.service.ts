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
      new Usuario('Vitor de almeida', 'vitor@gmail.com',new Date(),'12345678')
  ];

  //cara que ta logado no momento
  private usuarioLogado: Usuario | undefined;

  constructor() {
    this.usuarioLogado = undefined;
  }

  //a sintaxe do TS para metodos é nomeFunção(parametroN:tipoN): tipoRetorno{codigo}
  adicionarUsuario(usuario: Usuario): void{
    console.log(usuario);
    this.usuarios.push(usuario);
  }

  realizarLogin(email:string,senha:string): boolean{
    const usuarioValido = this.usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if(usuarioValido) {
      this.usuarioLogado = usuarioValido;
    }
    return usuarioValido !== undefined;
  }

  existeUsuarioLogado():boolean{
    return this.usuarioLogado !== undefined;
  }

  getNomeUsuarioLogado():String{
    if(this.usuarioLogado !== undefined)
      return this.usuarioLogado.nome;
    return "";
  }

  realizarLogout():void{
   this.usuarioLogado = undefined;
  }
}
