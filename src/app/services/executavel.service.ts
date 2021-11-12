import {Injectable} from "@angular/core";
import {Executavel} from "../models/executavel.model";
import {Parametro} from "../models/parametro.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ExecutavelService{
  private executaveis: Executavel[] =
    [
      new Executavel(this.getRandonId(), 'Gerar relatorio de vendas da semana',
                    "Gerar relatorio em formato XLSX de vendas da semana e salva na pasta -> Meus Documentos",
                    'TaskGerarRelatorioSemanalVendas',
                    [
                       new Parametro('Relatorio 1','Relatorio Vendas Semanal'),
                       new Parametro('dataInicio','28/09/2021'),
                     ]),
      new Executavel(this.getRandonId(), 'Atualizar os dados do painel de BI',
        'Atualize o painel de BI com os ultimos dados produzidos pelo sistema',
        'TaskAtualizarDadosBI',
        [
          new Parametro('Relatorio 2','Painel Analitivo de Gastos'),
        ]),
      new Executavel(this.getRandonId(), 'Enviar e-mail parabenizando os aniversariantes do mês',
        'Enviar e-mail de felicitação aos aniversariantes do mês da sua equipe',
        'TaskEnviarEmailAniversariantesMes',
        [
          new Parametro('mes','novembro'),
        ])

    ];
    //parametro que para utilizar o padrão observable e recarregar componentes dinamicamente
    //essa é a lista de interessados no evento
    listaExecutaveisSubject = new Subject<Executavel[]>();
  getRandonId(): number{
    return Math.floor(Math.random()*100);
  }

  getEcecutaveis(): Executavel[]{
    //o método slice indica que sera retornado uma copia do array
    return this.executaveis.slice();
  }

  adicionarExecutavel(executavel: Executavel): void{
    this.executaveis.push(executavel);

    this.disparaEventoAtualizacaoListaExecutaveis();
  }

  removerExecutavel(id:number):void{
    //o metodo map cria um array de objetos, vai mapeando, nesse caso
    // todos os objetos são atribuidos em posicaoNaLista, e depois índexOf(id)
    // retorna o objeto na posição id indicada
    const posicaoNaLista = this.executaveis.map((executavel: Executavel)=> {
      return executavel.id;
    }).indexOf(id);

    //o splice retorna um pedaço do array, aqui ele esta sendo utililizado para deletar o
    //objeto indicado
    this.executaveis.splice(posicaoNaLista,1);

    this.disparaEventoAtualizacaoListaExecutaveis();
  }

  atualizarExecutavel(id:number, executavelAtualizado: Executavel):void{
    //o metodo map cria um array de objetos, vai mapeando, nesse caso
    // todos os objetos são atribuidos em posicaoNaLista, e depois índexOf(id)
    // retorna o objeto na posição id indicada
    const posicaoNaLista = this.executaveis.map((executavel: Executavel)=> {
      return executavel.id;
    }).indexOf(id);
    //sobrescreve o executavel antigo com o novo atualizado
    this.executaveis[posicaoNaLista] = executavelAtualizado;

    this.disparaEventoAtualizacaoListaExecutaveis();
  }

  private disparaEventoAtualizacaoListaExecutaveis(): void{
    //lança um evento atualizando o estado da lista, indica que algo mudou na lista
    this.listaExecutaveisSubject.next(this.executaveis.slice());
  }

  getExecutavelPorId(id: number): Executavel{
    const executavel = this.executaveis.find(
      (executavelAtual: Executavel) => {
        return executavelAtual.id === id;
      }
    );
    return <Executavel>executavel;


  }

}
