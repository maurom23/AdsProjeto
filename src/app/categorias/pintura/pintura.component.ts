import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {
  livros : any = [
    {
      pathImage: 'assets/Pintura/livro-oceano-perdido-livro-de-colorir-e-aventura-submarina-johanna-basford-4998333.jpg',
      name: 'Livro oceano perdido livro de colorir e aventura submarina johannabas ford',
},
{

      pathImage: 'assets/Pintura/Livro-Mandalas-de-Bolso-Volume-13-Nina-Carbi-2981977.jpg',
      name: 'Livro Mandalas de Bolso Volume 13 Nina Carbi',


    },
    {

      pathImage: 'assets/Pintura/Livro-Jardim-das-Mandalas-2-Edicao-2015-4912897.jpg',
          name: 'Livro Jardim das Mandalas 2 Edicao 2015',
 

        },
        {
      pathImage: 'assets/Pintura/Livro-–-O-Incrivel-Livro-de-Super-Herois-para-Colorir-Michael-O’mara-Books-4841590.jpg',
      name: 'Livro O Incrivel Livro de Super Herois para Colorir Michael O mara Books',

    },
    {
      pathImage: 'assets/Pintura/Livro-–-Eu-Comigo-Livro-Para-Colorir-Zibia-Gasparetto-5324919.jpg',
      name: 'Livro Eu Comigo Livro Para Colorir Zibia Gasparetto',

    },
    {
      pathImage: 'assets/Pintura/Livro-Cafe-em-Paris-Para-Colorir-Recortar-e-Relaxar-com-Paper-Dolls-Marilia-Cichini-4850799.jpg',
      name: 'Livro Cafe em Paris Para Colorir Recortar e Relaxar com Paper Dolls Marilia Cichini',

    },
    {
      pathImage: 'assets/Pintura/livro-artes-integradas-15166786.jpg',
      name: 'Livro artes integradas',


},
{
  pathImage: 'assets/Pintura/atena-a-deusa-de-olhos-cinza-4962573.jpg',
  name: 'Atena a deusa de olhos cinza',
},
    {
      pathImage: 'assets/Pintura/zeus-o-rei-dos-deuses-4962572.jpg',
      name: 'Zeus o rei dos deuses',


    },
    {
      pathImage: 'assets/Pintura/A-Pintura-Descricao-e-Interpretacao-Volume-8-102196.jpg',
      name: 'A Pintura Descricao e Interpretacao Volume 8',

    },
    {
      pathImage: 'assets/Pintura/curious-creatures-creative-haven-coloring-books-1505033925.jpg',
      name: 'curious creatures creative haven coloring books',
     
    },
    {
     pathImage: 'assets/Pintura/pintura-e-poesia-12908545.jpg',
      name: 'pintura e poesia',
    }, 


  ]


  constructor() { }

  ngOnInit(): void {
  }

}
