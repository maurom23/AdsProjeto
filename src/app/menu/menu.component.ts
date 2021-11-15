import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus:string[]= ["Livros",
"História e Geografia",
'História',
'Geografia',
'História do Brasil',
'Mitologia',
'Geografia do Brasil',
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
