//o diretorio models, contem todos os models da aplicação. é bem os objetos que são feitos a persistencia
// ou seja, aqui vai ter por exemplo, o objeto usuário. lembrando que sempre tem que expotar as classes
// para serem visiveis nos components
//lebrando que aqui é sintaxe do TS para poo

export class Usuario{
  nome: string;
  email: string;
  dataNascimento: Date;
  senha: string;


  constructor(nome: string, email: string, dataNascimento: Date, senha: string) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.senha = senha;
  }

}

