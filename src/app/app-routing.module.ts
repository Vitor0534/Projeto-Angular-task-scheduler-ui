import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroUsuarioComponent} from "./components/usuarios/cadastro-usuario/cadastro-usuario.component";
import {LoginComponent} from "./components/login/login/login.component";


const routes: Routes = [
  {path: 'cadastro', component: CadastroUsuarioComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
