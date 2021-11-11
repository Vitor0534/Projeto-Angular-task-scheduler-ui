import {Component, OnDestroy, OnInit} from '@angular/core';
import {Executavel} from "../../../models/executavel.model";
import {ExecutavelService} from "../../../services/executavel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-executavel-lista',
  templateUrl: './executavel-lista.component.html',
  styleUrls: ['./executavel-lista.component.css']
})
export class ExecutavelListaComponent implements OnInit, OnDestroy {
  executaveis: Executavel[];
  subscricao: Subscription;

  //As dependencias de rota, possibilitam que sejam feitos redirecionamentos para componentes
  //listados no route.module, de dentro desta class, isso é usado para cessar as rotas childrens
  // que dão acesso aos menus de edição/novas tasks
  constructor(private executavelService: ExecutavelService,
              private activateRoute: ActivatedRoute,
              private router: Router
  ) {
    this.executaveis = this.executavelService.getEcecutaveis();

    //Esse é o interessado que é executado dinamicamente de acordo com o lançamento do evento
    this.subscricao = this.executavelService.listaExecutaveisSubject.subscribe(
      (executaveis: Executavel[]) => {
        this.executaveis = executaveis;
      }
    );
  }

  ngOnInit(): void {

    //Esse é o interessado que é executado dinamicamente de acordo com o lançamento do evento
    this.subscricao = this.executavelService.listaExecutaveisSubject.subscribe(
      (executaveis: Executavel[]) => {
        this.executaveis = executaveis;
      }
    );
    this.executaveis = this.executavelService.getEcecutaveis();
  }

  //metodo que garante a exclusão do observable para não ficar inscrito
  ngOnDestroy():void {
    this.subscricao.unsubscribe();
  }

  onNovoExecutavel(): void{

    //Esse comando indica para carregar o componente da rota 'nova' e manter a rota atual
    //ou seja, carregar o novo componente sem redirecionar a página, mantendo o menu de taks
    this.router.navigate(['nova'], {relativeTo:this.activateRoute});
  }
  onSelecionarExecutavel(executavel: Executavel):void{

  }

  onRemoveExecutavel(executavel: Executavel): void {
    if(confirm('Deseja realmente remover o executavel (' + executavel.titulo + ')?')) {
      this.executavelService.removerExecutavel(executavel.id);
      this.router.navigate(['executaveis']);
      console.log("Remoção: executavel (" + executavel.titulo + ')');
    }
  }

}
