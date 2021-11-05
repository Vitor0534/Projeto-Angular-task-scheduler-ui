import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  esconderSenha: boolean;
  mensagemErro: string;

  //FormGroup para controle dos campos do form de login
  formularioLogin: FormGroup;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  senhaFormControl = new FormControl('', [
    Validators.required
  ]);


  //injetando o serviço de user para que seja possivel utilizálo nesse modulo
  constructor(private usuarioService:UsuarioService) {
    this.esconderSenha=true;
    this.mensagemErro="";

    this.formularioLogin = new FormGroup(
      {
        email: this.emailFormControl,
        senha: this.senhaFormControl
      }
    );

  }

  onSubmit(): void{
    const emailInformado = this.formularioLogin.value.email;
    const senhaInformada = this.formularioLogin.value.senha;

    //uma vez coletada essas informações tem que criar a validação para ver
    //se o user está na lista de users cadastrados no sistema
    const logadoComSucesso = this.usuarioService.realizarLogin(emailInformado,senhaInformada);

    if(logadoComSucesso) {
      console.log("Login realizado com sucesso!");
      alert("Login realizado com sucesso!");
    }
    else {
      console.log("Credênciais incorretas");
      this.mensagemErro = "Credenciais incorretas!";
    }
  }

  onDigitarAlgo():void{
    this.mensagemErro="";
  }




  ngOnInit(): void {
    this.formularioLogin = new FormGroup(
      {
        email: this.emailFormControl,
        senha: this.senhaFormControl
      }
    );
  }

}
