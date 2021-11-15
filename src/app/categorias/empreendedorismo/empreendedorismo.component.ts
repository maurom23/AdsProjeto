import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empreendedorismo',
  templateUrl: './empreendedorismo.component.html',
  styleUrls: ['./empreendedorismo.component.css']
})
export class EmpreendedorismoComponent implements OnInit {

  livros: any = [

    {
      pathImage: 'assets/Empreendedorismo/A-Revolucao-da-Inovacao-Aberta-A-Chave-da-Nova-Competitividade-nos-Negocios-287196.jpg',
      name: 'A Revolucao da Inovacao Aberta A Chave da Nova Competitividade nos Negocios',
    },
    {
      pathImage: 'assets/Empreendedorismo/Empreendedorismo-Criativo-a-Nova-Dimensao-da-Empregabilidade-Geraldo-Ferreira-de-Araulo-Filho-143821.jpg',
      name: 'Empreendedorismo Criativo a Nova Dimensao da Empregabilidade Geraldo Ferreira de-Araulo Filho',
    },
    {
      pathImage: 'assets/Empreendedorismo/Empreendedorismo-Regional-e-Economia-do-Conhecimento-Pierre-Andre-Julien-134191.jpg',
      name: 'Empreendedorismo Regional e Economia do Conhecimento Pierre Andre Julien',
    },
    {
      pathImage: 'assets/Empreendedorismo/Empreendedorismo-uma-Visao-do-Processo-99783.jpg',
      name: 'Empreendedorismo uma Visao do-Processo',
    },

    {
      pathImage: 'assets/Empreendedorismo/Jovens-Falcoes-Eduardo-Lyra-1811210.jpg',
      name: 'Jovens Falcoes Eduardo Lyra',
    },

    {
      pathImage: 'assets/Empreendedorismo/Livro-Empreendedorismo-Construindo-Seu-Projeto-de-Vida-Luiz-Arnaldo-Biagio-466323.jpg',
      name: 'Livro Empreendedorismo Construindo Seu Projeto de Vida Luiz Arnaldo Biagio',

    },

    {
      pathImage: 'assets/Empreendedorismo/O-Jeito-Indiano-de-Fazer-Negocios-como-os-Mestres-da-Administracao-Moderna-na-India-estao-Revolucionando-o-Management-296485.jpg',
      name: 'O Jeito Indiano de Fazer Negocios comoos Mestres da AdministracaoModerna na India estao Revolucionando o Management',

    },

    {
      pathImage: 'assets/Empreendedorismo/O-Livro-Negro-do-Empreendedor-Depois-Nao-Diga-Que-Nao-Foi-Avisado-163533.jpg',
      name: 'O Livro Negro do Empreendedor Depois Nao Diga Que Nao Foi Avisado',

    },

    {
      pathImage: 'assets/Empreendedorismo/Gestao-de-Conflitos-Desafio-do-Mundo-Corporativo-Anna-Burbridge-e-Marc-Burbridge-1836159.jpg',
      name: 'Gestao de Conflitos Desafio do Mundo Corporativo Anna Burbridge e Marc Burbridge',
    },
    {
      pathImage: 'assets/Empreendedorismo/Ferramentas-para-Empreendedores-79905.jpg',
      name: 'Ferramentas para Empreendedores',
    },
    {
      pathImage: 'assets/Empreendedorismo/Ser-Empreendedor-Pensar-Criar-e-Moldar-a-Nova-Empresa-Manuel-Portugal-Ferreira-Joao-Carvalho-Santos-Fernando-Ribeiro-Serra-1343.jpg',
      name: 'Ser Empreendedor Pensar Criar e Moldar a Nova Empresa Manuel Portugal Ferreira Joao Carvalho Santos Fernando Ribeiro Serra',
    },

    {
      pathImage: 'assets/Empreendedorismo/Sobre-Solo-Fertil-Como-Identificar-Grandes-Oportunidades-para-Empreendimentos-em-Alta-Tecnologia-276432.jpg',
      name: 'Sobre Solo Fertil Como Identificar Grandes Oportunidades para Empreendimento em Alta-Tecnologia',

    },
  ]
    constructor() {}

  ngOnInit(): void {
    }

}
