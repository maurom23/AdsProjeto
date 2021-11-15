import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.component.html',
  styleUrls: ['./medicina.component.css']
})
export class MedicinaComponent implements OnInit {
  livros: any = [
    {
      pathImage: 'assets/Medicina/Current-Essencia-da-Medicina-437943.jpg',
      name: 'Current Essencia da Medicina',
    },
    {
      pathImage: 'assets/Medicina/Fundamentos-de-Anatomia-Clinica-Keith-Moore-1876829.jpg',
      name: 'Fundamentos de Anatomia Clinica Keith Moore',
    },
    {
      pathImage: 'assets/Medicina/Livro-–-Bioquimica-de-Laguna-6-Edicao-2012-Jose-Laguna-4288013.jpg',
      name: 'Livro Bioquimica de Laguna 6 Edicao 2012 Jose Laguna'
    },
    {
      pathImage: 'assets/Medicina/Livro-CID-10-Classificacao-Estatistica-Internacional-de-Doencas-e-Problemas-Relacionados-a-Saude-Volume-2-8ª-Edicao-2008-88081.jpg',
      name: 'Livro CID 10 Classificacao Estatistica Internacional de Doencas e Problemas Relacionados a Saude Volume 2 8ª Edicao 2008',
    },
    {
      pathImage: 'assets/Medicina/Livro-Manual-Academico-de-Cirurgia-Cardiovascular-1-Edicao-2014-Gabriel-R-Liguori-Leila-Nogueira-Barros-e-Davi-Freitas-Tenorio-3085369.jpg',
      name: 'Livro Manual Academico de Cirurgia Cardiovascular 1 Edicao 2014 Gabriel R Liguori Leila Nogueira Barros e Davi Freitas Tenorio',
    },
    {
      pathImage: 'assets/Medicina/Livro-Manual-de-Terapeutica-Nao-Farmacologica-em-Geriatria-e-Gerontologia-1-Edicao-Wilson-Jacob-Filho-3384681.jpg',
      name: 'Livro Manual de Terapeutica Nao Farmacologica em Geriatria e Gerontologia 1 Edicao Wilson Jacob Filho',
    },
    {
      pathImage: 'assets/Medicina/Livro-Netter-Bases-da-Histologia-2-Edicao-2014-William-K-Ovalle-e-Patrick-C-Nahirney-3491116.jpg',
      name: 'Livro Netter Bases da Histologia 2 Edicao 2014 William K Ovalle e Patrick C Nahirney',
    },
    {
      pathImage: 'assets/Medicina/Livro-Compreendendo-o-Edificio-de-Saude-Volume-2-2013-Joao-Carlos-Bross-2273268.jpg',
      name: 'Livro Compreendendo o Edificio de Saude Volume 2 2013 Joao Carlos Bross',
    },
    {
      pathImage: 'assets/Medicina/Livro-Protocolos-de-Condutas-em-Terapia-Intensiva-–-Volume-1-e-2-1-Edicao-2013-Desanka-Dragosavac-e-Sebastiao-Araujo-2720592.jpg',
      name: 'Livro Protocolos de Condutas em Terapia Intensiva Desanka Dragosavac e Sebastiao Araujo',
    },
    {
      pathImage: 'assets/Medicina/manual-de-eletrocardiografia-cardiopapers-11722287.jpg',
      name: 'manual-de eletrocardiografia cardiopapers',
    },
    {
      pathImage: 'assets/Medicina/Rotinas-em-Emergencias-Clinicas-Cynthia-Valerio-e-Rubia-Americano-1657399.jpg',
      name: 'Rotinas em Emergencias Clinicas Cynthia Valerio e Rubia Americano',
    },
    {
      pathImage: 'assets/Medicina/Terapia-Manual-Guia-de-Anatomia-de-Superficie-e-Tecnicas-de-Palpacao-David-Byfield-e-Stuart-Kinsinger-1685341.jpg',
      name: 'Terapia-Manual Guia de Anatomia de Superficie e Tecnicas de Palpacao David Byfield e Stuart Kinsinger',
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
