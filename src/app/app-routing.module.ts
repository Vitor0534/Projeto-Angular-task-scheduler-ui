import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroUsuarioComponent} from "./components/usuarios/cadastro-usuario/cadastro-usuario.component";


const routes: Routes = [
  {path: 'cadastro', component: CadastroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
