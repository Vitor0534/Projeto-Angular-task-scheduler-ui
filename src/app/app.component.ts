import { Component } from '@angular/core';
import {UsuarioService} from "./services/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-scheduler-ui';

  constructor(private usuarioService: UsuarioService) {
  }

  existeUsuarioLogado():boolean{
    return this.usuarioService.existeUsuarioLogado();
  }
  nomeUsuarioLogado():string{
    return this.usuarioService.getNomeUsuarioLogado().toString();
  }

  realizarLogout():void{
    this.usuarioService.realizarLogout();
  }


}
