import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitologia',
  templateUrl: './mitologia.component.html',
  styleUrls: ['./mitologia.component.css']
})
export class MitologiaComponent implements OnInit {
  livros: any = [
{
      pathImage: 'assets/Mitologia/A-Genese-Africana-379410.jpg',
      name: 'A Genese Africana',
    },
{
        pathImage: 'assets/Mitologia/Contos-e-Lendas-os-Doze-Trabalhos-de-Hercules-112821.jpg',
      name: 'Contos e Lendas os Doze Trabalhos de Hercules',
    },
{
      pathImage: 'assets/Mitologia/Estorias-da-Mitologia-Os-Deuses-Menos-o-Pai-Volume-3-Domicio-Proenca-Filho-852149.jpg',
      name: 'Estorias da Mitologia Os Deuses Menos o Pai Volume 3 Domicio Proenca Filho',
    },
{
      pathImage: 'assets/Mitologia/Livro-O-Ciclo-dos-Deuses-Nos-os-Deuses-Volume-1-Bernard-Werber-2954331.jpg',
      name: 'Livro O Ciclo dos Deuses Nos os Deuses Volume 1 Bernard Werber',
    },
{
      pathImage: 'assets/Mitologia/Livro-Sagas-de-Herois-e-Cavaleiros-Volume-2-Martin-Beheim-Schwarzbach-1949060.jpg',
      name: 'Livro Sagas de Herois e Cavaleiros Volume 2 Martin Beheim Schwarzbach',
    },
{
      pathImage: 'assets/Mitologia/livro-sombra-do-abutre-a-2768023.jpg',
      name: 'Livro sombra do abutre a',
    },
{
     pathImage: 'assets/Mitologia/Livro-Tudo-o-Que-Precisamos-Saber-Mas-Nunca-Aprendemos-Sobre-Mitologia-Kenneth-C-Davis-4289787.jpg',
      name: 'Livro Tudo o Que Precisamos Saber Mas Nunca Aprendemos Sobre Mitologia Kenneth C Davis',
    }, 
{
      pathImage: 'assets/Mitologia/Mitologia-Grega-Pierre-Grimal-174166.jpg',
      name: 'Mitologia Grega Pierre Grimal',
    },
{
      pathImage: 'assets/Mitologia/O-12-Planeta-Livro-1-413570.jpg',
      name: 'O 12 Planeta Livro 1',
    },
{
     pathImage: 'assets/Mitologia/Ragnarok-o-Crepusculo-dos-Deuses-438744.jpg',
      name: 'Ragnarok o Crepusculo dos Deuses',
    },

{
      pathImage: 'assets/Mitologia/livro-101-super-herois-ed-1-1511905103.jpg',
      name: 'livro 101 super herois ed',
    },

{
     pathImage: 'assets/Mitologia/livro-game-of-thrones-terceira-e-quarta-temporada-1517360540.jpg',
      name: 'livro game of thrones terceira e quarta temporada',
},

]
constructor() { }

ngOnInit(): void {
}

}
