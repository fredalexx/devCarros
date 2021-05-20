import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  cars = [
    'https://blog.nakata.com.br/wp-content/uploads/2019/04/266883-persona-agenor-mecanico-veja-como-a-tecnologia-pode-ajudar-o-seu-dia-a-dia-na-oficina.jpg',
    'https://www.mundosenai.com.br/media/images/tecnico-em-mecanica.jpg',
  ];

  constructor() { }

  ngOnInit(): void { }
}
