import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {
  livros : any = [
    {
      pathImage: 'assets/Romance/dna-da-cocriacao-sintonize-seu-novo-eu-1505357774.jpg',
      name: 'dna da cocriacao sintonize seu novo eu',
},

{
      pathImage: 'assets/Romance/livro-a-sombra-do-vento-11654396.jpg',
      name: 'livro a sombra do vento',
}
,{
      pathImage: 'assets/Romance/Livro-A-Vizinha-120022.jpg',
      name: 'Livro A Vizinha',
}
,{
      pathImage: 'assets/Romance/Livro-Breakable-Contornos-do-Coracao-Volume-2-Tammara-Webber-3693421.jpg',
      name: 'Livro Breakable Contornos do Coracao Volume 2 Tammara Webber',
}
,{
      pathImage: 'assets/Romance/Livro-Corte-de-Espinhos-e-Rosas-Corte-de-Nevoa-e-Furia-Volume-2-Sarah-J-Maas-9637836.jpg',
      name: 'Livro Corte de Espinhos e Rosas Corte de Nevoa e Furia Volume 2 Sarah J Maas',
}
,{
      pathImage: 'assets/Romance/livro-corte-de-espinhos-e-rosas-sarah-j-maas-6336518.jpg',
      name: 'livro corte de espinhos e rosas sarah j maas',
}
,{
      pathImage: 'assets/Romance/Livro-Primeiro-e-Unico-Emily-Giffin-4689013.jpg',
      name: 'Livro Primeiro e Unico Emily Giffin',
}
,{
      pathImage: 'assets/Romance/Livro-Seres-Incriveis-Tracy-Chevalier-3005564.jpg',
      name: 'Livro Seres Incriveis Tracy Chevalier',
}
,{
      pathImage: 'assets/Romance/Livro-Trono-de-Vidro-Rainha-das-Sombras-Volume-4-Sarah-J-Maas-7462222.jpg',
      name: 'Livro Trono de Vidro Rainha das Sombras Volume 4 Sarah-J Maas',
}
,{
      pathImage: 'assets/Romance/Os-Delirios-de-Consumo-de-Becky-Bloom-82080.jpg',
      name: 'Os Delirios de Consumo de Becky Bloom',
}
,{
      pathImage: 'assets/Romance/A-Promessa-Richard-Paul-Evans-427153.jpg',
      name: 'A Promessa Richard Paul Evans',
}

,{    pathImage: 'assets/Romance/Livro-Red-Hill-Jamie-McGuire-4724073.jpg',
      name: 'Livro Red Hill Jamie McGuire',
},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
