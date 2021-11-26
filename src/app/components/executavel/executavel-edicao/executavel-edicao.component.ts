import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ExecutavelService} from "../../../services/executavel.service";

@Component({
  selector: 'app-executavel-edicao',
  templateUrl: './executavel-edicao.component.html',
  styleUrls: ['./executavel-edicao.component.css']
})
export class ExecutavelEdicaoComponent implements OnInit {
  idExecutavelAtual: number;
  modoEdicao: boolean;
  formularioExecutavel: FormGroup;
  tituloFormControl: FormControl;
  claseExecutavelFormControl: FormControl;
  descricaoFormControl: FormControl;
  parametrosFormArray: FormArray;


  constructor(private router:Router,
              private activetedRoute: ActivatedRoute,
              private executavelService: ExecutavelService) {
    this.idExecutavelAtual=-1;
    this.modoEdicao=false;

    this.formularioExecutavel = new FormGroup({});
    this.tituloFormControl = new FormControl('',[]);
    this.claseExecutavelFormControl = new FormControl('',[]);
    this.descricaoFormControl = new FormControl('',[]);
    this.parametrosFormArray = new FormArray([]);
  }

  ngOnInit(): void {
    //Constroi um observable para verificar qual task esta e
    // se ela está sendo editada (modo edição) é usado direto no titulo da edição
    this.activetedRoute.params.subscribe(
      (params:Params) => {
        this.idExecutavelAtual = +params.id;
        this.modoEdicao = params.id != null;
        this.iniciarFormulario();
      }
    );
  }


  private iniciarFormulario(): void{
    let tituloExecutavel = '';
    let descricaoExecutavel ='';
    let classeExecutavel = '';

    this.parametrosFormArray = new FormArray([]);

    //se ele estiver no modo edição, os valores atuais serão mostrados nos campos
    if(this.modoEdicao){
      const executavel = this.executavelService.getExecutavelPorId(this.idExecutavelAtual);
      tituloExecutavel = executavel.titulo;
      descricaoExecutavel = executavel.descricao;
      classeExecutavel = executavel.classeExecutavel;

      if (executavel.parametros){
        for(const parametro of executavel.parametros){
          this.parametrosFormArray.push(
            new FormGroup({
              nome: new FormControl(parametro.nome,[Validators.required]),
              valor: new FormControl(parametro.valor, [Validators.required])
            })
          );
        }
      }
    }

    this.tituloFormControl = new FormControl(tituloExecutavel, [Validators.required]);
    this.claseExecutavelFormControl = new FormControl(classeExecutavel,[Validators.required]);
    this.descricaoFormControl = new FormControl(descricaoExecutavel,[]);

    this.formularioExecutavel = new FormGroup({
      titulo: this.tituloFormControl,
      classeExecutavel: this.claseExecutavelFormControl,
      descricao: this.descricaoFormControl,
      parametros: this.parametrosFormArray
    });
  }

  onSubimit():void{

  }

  onNovoParametro():void{
    this.parametrosFormArray.push(
      new FormGroup(
        {
          nome: new FormControl('', [Validators.required]),
          valor: new FormControl('', [Validators.required]),
        }
      )
    );
  }
  onExcluirParametro(indice:number):void{
    this.parametrosFormArray.removeAt(indice);
  }
  get parametrosControl(): AbstractControl[]{
    return this.parametrosFormArray.controls;
  }



}
