import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-poesia',
    templateUrl: './poesia.component.html',
    styleUrls: ['./poesia.component.css']
})
export class PoesiaComponent implements OnInit {
    livros: any = [
        {
            pathImage: 'assets/Poesia/Antologia-Poetica-Cecilia-Meireles-1940462.jpg',
            name: 'Antologia Poetica Cecilia Meireles',
      },
      {
            pathImage: 'assets/Poesia/A-Obra-Prima-de-Cada-Autor-Os-Escravos-98923.jpg',
            name: 'A Obra Prima de Cada Autor Os Escravos',
      },{
            pathImage: 'assets/Poesia/Fernando-Pessoa-Poesia-Completa-de-Alberto-Caeiro-Edicao-de-Bolso-61195.jpg',
            name: 'Fernando Pessoa Poesia Completa de Alberto Caeiro Edicao de Bolso',
      },{
            pathImage: 'assets/Poesia/Livro-dos-Poemas-Sergio-Faraco-174123.jpg',
            name: 'Livro dos Poemas Sergio Faraco',
      },{
            pathImage: 'assets/Poesia/Livro-Porta-Giratoria-Mario-Quintana-3076175.jpg',
            name: 'Livro Porta Giratoria Mario Quintana',
      },{
            pathImage: 'assets/Poesia/Livro-Romanceiro-da-Inconfidencia-Edicao-Comemorativa-60-Anos-Cecilia-Meireles-2756026.jpg',
            name: 'Livro Romanceiro da Inconfidencia Edicao Comemorativa 60 Anos Cecilia Meireles',
      },{
            pathImage: 'assets/Poesia/Melhores-Poemas-Murilo-Mendes-120651.jpg',
            name: 'Melhores Poemas Murilo Mendes',
      },{
            pathImage: 'assets/Poesia/O-Sexo-Vegetal-302043.jpg',
            name: 'lO Sexo Vegetal',
      },{
            pathImage: 'assets/Poesia/Poemas-Esparsos-Vinicius-de-Moraes-114299.jpg',
            name: 'Poemas Esparsos Vinicius de Moraes',
      },{
            pathImage: 'assets/Poesia/Roteiro-da-Poesia-Brasileira-Anos-40-121005.jpg',
            name: 'Roteiro da Poesia Brasileira Anos',
      
      },{
            pathImage: 'assets/Poesia/Livro-O-Livro-Vermelho-de-Maria-Vasco-Maria-Vasco-2992611.jpg',
            name: 'Livro O Livro Vermelho de Maria Vasco Maria Vasco',
      
      },{
            pathImage: 'assets/Poesia/Livro-Minima-Lirica-Paulo-Henriques-Britto-2336007.jpg',
            name: 'Livro Minima Lirica Paulo Henriques Britto',
      },

]
    constructor() { }

    ngOnInit(): void {
    }

}
