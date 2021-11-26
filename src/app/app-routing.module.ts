import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroUsuarioComponent} from "./components/usuarios/cadastro-usuario/cadastro-usuario.component";
import {LoginComponent} from "./components/login/login/login.component";
import {ExecutavelComponent} from "./components/executavel/executavel.component";
import {ExecutavelInicioComponent} from "./components/executavel/executavel-inicio/executavel-inicio.component";
import {ExecutavelEdicaoComponent} from "./components/executavel/executavel-edicao/executavel-edicao.component";


const routes: Routes = [
  //redirectTo, redireciona a rota do path para outra indicada, o pathMatch indica que a comparação
  // a ser feita é um equals, para ver se o path está vázio
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroUsuarioComponent},
  {path: 'login', component: LoginComponent},
  //define rotas alternativas que podem ser selecionadas a partir desta
  // quando se coloca ':' antes de uma variavel na url, quer dizer que ela altera dinamicamente
  //ERRO: por alguma razão o path do executavel faz os outros paths não carregarem - resolvido era q full estava escrito errado
  {
    path: 'executaveis', component: ExecutavelComponent,
    children:[
      {path:'', component: ExecutavelInicioComponent, pathMatch: 'full'},
      {path:'nova', component: ExecutavelEdicaoComponent},
      {path:':id/edicao', component: ExecutavelEdicaoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
