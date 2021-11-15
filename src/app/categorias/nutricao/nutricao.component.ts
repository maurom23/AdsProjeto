import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutricao',
  templateUrl: './nutricao.component.html',
  styleUrls: ['./nutricao.component.css']
})
export class NutricaoComponent implements OnInit {
  livros : any = [
    {
      pathImage: 'assets/Nutricao/Livro-Viva-em-Dieta-Viva-Melhor-Aplicacoes-Praticas-de-Nutricao-2-Edicao-2013-Rodolfo-Peres-2739773.jpg',
      name: 'Livro Viva em Dieta Viva Melhor Aplicacoes Praticas de Nutricao 2 Edicao 2013 Rodolfo Pereso',

},
{
      pathImage: 'assets/Nutricao/Tecnologia-de-Alimentos-269417.jpg',
      name: 'Tecnologia de Alimentos',


}

,{
     pathImage: 'assets/Nutricao/A-Solucao-Anabolica-Para-Fisiculturistas-Dieta-Metabolica-Definitiva-Mauro-Di-Pasquale-1776219.jpg',
      name: 'A Solucao Anabolica Para Fisiculturistas Dieta Metabolica Definitiva Mauro Di Pasquale',


}
,{
      pathImage: 'assets/Nutricao/Nutricao-Metabolismo-e-Suplementacao-na-Atividade-Julio-Tirapegui-867818.jpg',
      name: 'Nutricao Metabolismo e Suplementacao na Atividade Julio Tirapegui',


}
 ,{
      pathImage: 'assets/Nutricao/Livro-Tratado-de-Nutricao-e-Metabolismo-em-Cirurgia-Antonio-Carlos-L-Campos-3100417.jpg',
      name: 'Livro Tratado de Nutricao e Metabolismo em Cirurgia Antonio Carlos L Campos',
     

    }
,{
      pathImage: 'assets/Nutricao/Livro-Nutricao-e-Saude-na-Adolescencia-Silvia-Eloiza-Priore-3100484.jpg',
      name: 'Livro Nutricao e Saude na Adolescencia Silvia Eloiza Priore',


},{
      pathImage: 'assets/Nutricao/Livro-Manual-de-Orientacao-Nutricional-na-Alergia-Dalla-Costa-Carvalho-2723296.jpg',
      name: 'Livro Manual de Orientacao Nutricional na Alergia Dalla Costa Carvalho',



}
,{
      pathImage: 'assets/Nutricao/Livro-Guia-Ambulatorial-de-Nutricao-Materno-Infantil-Janine-Maciel-Barbosa-2441912.jpg',
      name: 'Livro Guia Ambulatorial de Nutricao Materno Infantil Janine Maciel Barbosa',



}
,{
      pathImage: 'assets/Nutricao/Livro-Manual-de-Condutas-em-Oncologia-2-Edicao-2013-Prof-Dr-Paulo-M-Hoff-2884849.jpg',
      name: 'Livro Manual de Condutas em Oncologia 2 Edicao 2013 Prof Dr Paulo M Hoff',



}
,{
      pathImage: 'assets/Nutricao/A-Cozinha-da-Saude-Habitos-e-Receitas-Para-uma-Vida-Saudavel-Ferran-Adria-Valentin-Fuster-e-Josep-Corbella-1717258.jpg',
      name: 'A Cozinha da Saude Habitos e Receitas Para uma Vida Saudavel Ferran Adria Valentin Fuster e Josep Corbella',


}
,{
      pathImage: 'assets/Nutricao/Aspectos-Nutricionais-no-Processo-no-Envelhecimento-264780.jpg',
      name: 'Aspectos Nutricionais no Processo no Envelhecimento',

  
    }
    ,{  pathImage: 'assets/Nutricao/Dieta-Metabolica-Dr-Mauro-Di-Pasquale-1685470.jpg',
      name: 'Dieta Metabolica Dr Mauro Di Pasquale',
  },
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
