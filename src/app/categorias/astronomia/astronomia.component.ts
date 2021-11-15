import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astronomia',
  templateUrl: './astronomia.component.html',
  styleUrls: ['./astronomia.component.css']
})
export class AstronomiaComponent implements OnInit {
livros: any = [
    
     {
            pathImage: 'assets/Astronomia/A-Realidade-Oculta-Universos-Paralelos-e-as-Leis-Profundas-do-Cosmo-Brian-Greene-1641526.jpg',
           name: ' A Realidade Oculta Universos Paralelos e as Leis Profundas do Cosmo Brian Greene',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/Astronomia-Para-Leigos-298345.jpg',
           name: ' Astronomia Para Leigos',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/Colecao-Educacao-para-a-Ciencia-Educacao-em-Astronomia-Repensando-a-Formacao-dos-Professores-Volume-11-Rodolfo-LAnghi-Roberto-Nardi-.jpg',
           name: ' Colecao Educacao para a Ciencia Educacao em Astronomia Repensando a Formacao dos Professores Volume 11 Rodolfo LAnghi Roberto Nardi',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/Cosmologia-dos-Mitos-ao-Centenario-da-Relatividade-296953.jpg',
           name: ' Cosmologia dos Mitos ao Centenario da Relatividade',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/from-the-closed-world-to-the-infinite-universe-hideyo-noguchi-lecture-1503064224.jpg',
           name: 'from the closed world to the infinite universe hideyo noguchi lecture',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/livro-eram-os-deuses-astronautas-erich-von-daniken-1596927.jpg',
           name: ' livro eram os deuses astronautas erich von daniken',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/Livro-–-Origens-Catorze-Bilhoes-de-Anos-de-Evolucao-Cosmica-Neil-Degrasse-Tyson-e-Donald-Goldsmith-4996577.jpg',
           name: ' Livro Origens Catorze Bilhoes de Anos de Evolucao Cosmica Neil Degrasse Tyson e Donald Goldsmith',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/A-Danca-do-Universo-112900.jpg',
           name: ' A-Danca-do-Universo',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/O-Que-e-Ser-Astronomo-Memorias-Profissionais-de-Ronaldo-Mourao-81986.jpg',
           name: ' O Que e Ser Astronomo Memorias Profissionais de Ronaldo Mourao',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/Os-Cacadores-de-Venus-a-Corrida-Para-Medir-o-Ceu-Andrea-Wulf-1678464.jpg',
           name: ' Os Cacadores de Venus a Corrida Para Medir o Ceu Andrea Wulf',
           
     
     },
     
     {
            pathImage: 'assets/Astronomia/O-Universo-Elegante-Supercordas-Dimensoes-Ocultas-e-a-Busca-da-Teoria-Definitiva-Brian-Greene-114747.jpg',
           name: ' O Universo Elegante Supercordas Dimensoes Ocultas e a Busca da Teoria Definitiva Brian Greene',
           
     
     },
     
     
     {
            pathImage: 'assets/Astronomia/stem-cells-1508482992.jpg',
           name: ' stem cells',
           
     
     },

]
  constructor() { }

  ngOnInit(): void {
  }

}
