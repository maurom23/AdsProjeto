import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juvenil',
  templateUrl: './juvenil.component.html',
  styleUrls: ['./juvenil.component.css']
})
export class JuvenilComponent implements OnInit {
  livros: any = [

    {
      pathImage: 'assets/Juvenil/harry-potter-e-a-camara-secreta-capa-dura-11791728.jpg',
      name: 'Harry Potter e a camara secreta capa dura',
    },


    {
      pathImage: 'assets/Juvenil/harry-potter-guia-cinematografico-1500669956.jpg',
      name: 'Harry Potter guia cinematografico',
    },


    {
      pathImage: 'assets/Juvenil/Livro-–-A-Lamina-da-Assassina-Historias-de-Trono-de-Vidro-Sarah-J-Maas-4418527.jpg',
      name: 'Livro A Lamina assassina - Histórias de trono de vidro Sarah J Maas',
    },
    {
      pathImage: 'assets/Juvenil/Livro-A-Garota-Dragao-A-Clepsidra-de-Aldibah-Volume-III-Licia-Troisi-6938394.jpg',
      name: 'Livro A Garota Dragao A Clepsidra de Aldibah Volume III Licia Troisi',
    },
    {
      pathImage: 'assets/Juvenil/livro-a-rainha-vermelha-a-espada-de-vidro-volume-2-victoria-aveyard-7144331.jpg',
      name: 'livro a rainha vermelha a espada de vidro volume 2 victoria aveyard',
    },
    {
      pathImage: 'assets/Juvenil/Livro-Diarios-do-Vampiro-Diarios-de-Stefan-Desejo-Volume-3-L-J-Smith-2735159.jpg',
      name: 'Livro Diarios do Vampiro Diarios de Stefan Desejo Volume 3 L J Smith',
    },
    {
      pathImage: 'assets/Juvenil/Livro-Divergente-Guia-Oficial-do-Filme-2986407.jpg',
      name: 'Livro Divergente Guia Oficial do Filme',
    },
    {
      pathImage: 'assets/Juvenil/Livro-Endgame-O-Chamado-Volume-1-James-Frey-e-Nils-Johnson-Shelton-3726116.jpg',
      name: 'Livro Endgame O Chamado Volume 1 James Frey e Nils Johnson Shelton',
    },
    {
      pathImage: 'assets/Juvenil/Livro-Eva-Uma-Vez-Volume-2-Anna-Carey-4213372.jpg',
      name: 'Livro Eva Uma Vez Volume 2 Anna Carey',
    },
    {
      pathImage: 'assets/Juvenil/Livro-Lua-de-Larvas-Sally-Gardner-2952665.jpg',
      name: 'Livro Lua-de Larvas Sally Gardner',
    },
    {
      pathImage: 'assets/Juvenil/Livro-Sonho-Perigoso-Margaret-Stohl-e-Kami-Garcia-3076847.jpg',
      name: 'Livro Sonho Perigoso Margaret Stohl',
    },  
    {
      pathImage: 'assets/Juvenil/livros-caca-ao-lobisomem-brandao-13805532.jpg',
      name: 'livros caca ao lobisomem brandao',
    },

  ]
    constructor() {}

  ngOnInit(): void {
    }

}
