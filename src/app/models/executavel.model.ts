import {Parametro} from "./parametro.model";

export class Executavel{
  id:number;
  titulo:string;
  descricao:string;
  classeExecutavel:string;
  dataCriacao: Date;
  parametro: Parametro[];


  constructor(id: number, titulo: string, descricao: string, classeExecutavel: string, parametro: Parametro[]) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.classeExecutavel = classeExecutavel;
    this.parametro = parametro;
    this.dataCriacao = new Date();
  }
}
