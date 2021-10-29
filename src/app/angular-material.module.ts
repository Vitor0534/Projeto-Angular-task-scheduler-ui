import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule(
  {
    //imports: tudo que será utilizado internamente no modulo, não é visivel para outros modulos
    imports:[
      MatToolbarModule,
      MatButtonModule,
      MatIconModule
    ],
    //exports: tudo que será exportado para fora do modulo, o que está listado aqui pode ser visualizado
    //         por outros modulos que usam a material
    exports :[
      MatToolbarModule,
      MatButtonModule,
      MatIconModule
    ],
    //providers: são os provedores dos modulos
    providers:[

    ]
  }
)

// a classe que é esportada e da acesso ao modulo/objeto definido acima
export class AngularMaterialModule{}
