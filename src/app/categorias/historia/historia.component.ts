import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-historia',
      templateUrl: './historia.component.html',
      styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
      livros: any = [
            {
                  pathImage: 'assets/Historia/Ak-47-a-Arma-Que-Transformou-a-Guerra-297494.jpg',
                  name: 'Ak 47 a Arma Que Transformou a Guerra',

            },

            {
                  pathImage: 'assets/Historia/A-Obra-Prima-de-Cada-Autor-A-Oracao-da-Coroa-99029.jpg',
                  name: 'A  Obra Prima de Cada Autor A Oracao da Coroa',

            },

            {
                  pathImage: 'assets/Historia/As-100-Maiores-Invencoes-da-Historia-119247.jpg',
                  name: 'As 100 Maiores Invencoes da Historia',

            },

            {
                  pathImage: 'assets/Historia/Berlim-1945-a-Queda-80346.jpg',
                  name: 'Berlim 1945 a Queda',

            },

            {
                  pathImage: 'assets/Historia/Livro-As-Piores-Decisoes-da-Historia-E-as-Pessoas-Que-as-Tomaram-Stephen-Weir-3941063.jpg',
                  name: 'Livro As PioresDecisoes da Historia E as Pessoas Que as Tomaram Stephen Weir',

            },

            {
                  pathImage: 'assets/Historia/Livro-Cultura-e-Educacao-na-Idade-Media-Luiz-Jean-Lauand-2952645.jpg',
                  name: 'Livro Cultura e Educacao na Idade Media Luiz Jean Lauand',

            },

            {
                  pathImage: 'assets/Historia/Livro-Historia-do-Corpo-da-Revolucao-a-Grande-Guerra-Alain-Corbin-1925792.jpg',
                  name: 'Livro Historia do Corpo da Revolucao a Grande Guerra Alain Corbin',

            },

            {
                  pathImage: 'assets/Historia/Livro-Os-Espanhois-–-Josep-M-Buades-142201.jpg',
                  name: 'Livro Os Espanhois Josep M Buades',

            },

            {
                  pathImage: 'assets/Historia/Livro-Soldados-Sobre-Lutar-Matar-e-Morrer-Sonke-Neitzel-e-Harald-Welzer-2933363.jpg',
                  name: 'Livro Soldados Sobre Lutar Matar e Morrer Sonke Neitzel e Harald Welzer',

            },

            {
                  pathImage: 'assets/Historia/marcha-da-insensatez-a-8171146.jpg',
                  name: 'marcha da insensatez a',

            },

            {
                  pathImage: 'assets/Historia/O-Campo-da-Historia-Especialidades-e-Abordagens-394832.jpg',
                  name: 'O Campo da Historia Especialidades e Abordagens',

            },

            {
                  pathImage: 'assets/Historia/Projeto-de-Pesquisa-em-Historia-Da-Escolha-do-Tema-ao-Quadro-Teorico-394831.jpg',
                  name: 'Projeto de Pesquisa em Historia Da Escolha do Tema ao Quadro Teorico',

            },


      ]

      constructor() { }

      ngOnInit(): void {
      }

}
