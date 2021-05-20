import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  cars = [
    'https://blog.nakata.com.br/wp-content/uploads/2019/04/266883-persona-agenor-mecanico-veja-como-a-tecnologia-pode-ajudar-o-seu-dia-a-dia-na-oficina.jpg',
    'https://www.mundosenai.com.br/media/images/tecnico-em-mecanica.jpg',
    'https://www.trt4.jus.br/portais/media-noticia/328711/decisao%20-%20mecanico.jpg',
    'https://www.docttorcar.com.br/imagens/onde-encontrar-auto-eletrico-automotivo.jpg'
  ];

  constructor() { }

  ngOnInit(): void { }
}
