import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Usuario} from "../../../models/usuario.model";
import {UsuarioService} from "../../../services/usuario.service";


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  //os presentes parâmetro são estão ligados ao html por um two-way data binding {{XXX}}
  esconderSenha: boolean;
  esconderConfirmarSenha: boolean;
  private usuarioService: any;

  //controle do fomrulário
  //todos esse controle é feito pelo uso do objeto FormGroupe
  //esse objeto contem alguns parametros que podem ser acessados e configuraos
  //de forma direta, repare também que todos tem um binding la no html
  // o que significa que essas convensões fazem efeito em seus respectivos
  //elemento do html
  formularioCadastro: FormGroup;

  //todas as variáveis de controle recebem objetos da Form para criar esse controle
  // os validators estabelecem as regras de negocio de inserção dos dados ex.obrigatorio ou não
  nomeFormControl = new FormControl('',[
    Validators.required
  ]);

  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email
  ])

  dataNascimentoFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(8)
  ])

  dataInicio = new Date(1992,1,1);
  dataMinima = new Date(1921,1,1);
  dataMaxima = new Date(); //por padrão o date é inicializado com a data atual

  senhaFormControl =new FormControl('',[
    Validators.required,
    Validators.minLength(8)
  ])

  confirmeSenhaFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(8)
  ])


  //aqui o UsuarioService é injetado como parametro no construtor
  constructor(UsuarioService: UsuarioService) {
    this.esconderSenha=true;
    this.esconderConfirmarSenha=true;
    //this.formularioCadastro = new FormGroup("sdfsd",'');
    this.usuarioService = UsuarioService;
    //inicializando o formulário cadastro
    this.formularioCadastro = new FormGroup({
      nome: this.nomeFormControl,
      email: this.emailFormControl,
      dataNascimento: this.dataNascimentoFormControl,
      senha: this.senhaFormControl,
      confirmeSenhaFormControl: this.confirmeSenhaFormControl
    },{validators: passwordMatchValidator})
  }

  // esse bloco de código é iniciado uma vez no início de toda execução do Angular
  // é a mesma teoria do setup do processing, aqui podem ser feito as configurações e outras coisas
  ngOnInit(): void {
    this.formularioCadastro = new FormGroup({
      nome: this.nomeFormControl,
      email: this.emailFormControl,
      dataNascimento: this.dataNascimentoFormControl,
      senha: this.senhaFormControl,
      confirmeSenhaFormControl: this.confirmeSenhaFormControl
    },{validators: passwordMatchValidator}
    )
  }

  onDigitarSenha():void{
    if(this.formularioCadastro.hasError('senhasNaoConferem')){
      this.confirmeSenhaFormControl.setErrors([{senhasNaoConferem: true}]);
    }else{
      this.confirmeSenhaFormControl.setErrors(null);
    }
  }

  onSubmit():void{
    const nome = this.formularioCadastro.value.nome;
    const email = this.formularioCadastro.value.email;
    const dataNascimento = this.formularioCadastro.value.dataNascimento;
    const senha = this.formularioCadastro.value.senha;

    const usuario = new Usuario(nome,email,dataNascimento,senha);

    this.usuarioService.adicionarUsuario(usuario);

    this.formularioCadastro.reset();
    console.log(this.usuarioService.usuarios.length)
  }
}

//o objeto formControl, permite que o dev desenvolva os proprio validators e os add na lista dele
//é o caso da seguinte função de validação de senha, que vê se o campo de senha e o validaSenha
//são iguais.
//repare que aqui está sendo criado uma variável passwordMatchValidator que recebe um valor de uma
// função

//export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {

//Erro: AbstractCrontol é uma ganbiarra que eu fiz para funcionar  FormGroup, mas não ta validando o match das senhas
//      segunda o doc do angular (ver relatorio escrito), AbstractControl é a classe base para FormControl e FormGroup
export const passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
  //console.log("confirma senha:" + formGroup.value.confirmeSenhaFormControl);
  //console.log("senha:" + formGroup.get('senha')?.value);
  if(formGroup.get('senha')?.value === formGroup.get('confirmeSenhaFormControl')?.value){
    return null;
  }else{
    return {senhasNaoConferem: true};
  }
};
