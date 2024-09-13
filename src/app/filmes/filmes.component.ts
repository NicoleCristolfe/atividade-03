import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent {
  caminho = ["assets/img/o-auto-da-compadecida.jpg",
    'assets/img/cidade-de-deus.jpg',
    "assets/img/estomago.jpg",
    "assets/img/a-hora-da-estrela.jpg",
    "assets/img/parasita.jpg",
    "assets/img/et.jpg",
    "assets/img/seven.jpg",
    "assets/img/o-profissional.jpg",
    "assets/img/pixote.jpg",
    "assets/img/donnie-darko.jpg",
    "assets/img/central-do-brasil.jpg",
    "assets/img/interestelar.jpg",
    "assets/img/bicho-cabeca.jpg",
    "assets/img/de-volta-pro-futuro.jpg"];
    
  filme = {
    infos: {
      filmes: ['O Auto da Compadecida' + '(2000)', 'Cidade de Deus' + '(2002)', 'Estômago' + '(2007)', 'A Hora da Estrela' + '(1985)', 'Parasita' + '(2019)', 'E.T. O Extraterrestre' + '(1982)', 'Seven' + '(1995)', 'O Profissional' + '(1994)', 'Pixote' + '(1980)', 'Donnie Darko' + '(2001)', 'Central do Brasil' + '(1998)', 'Interestelar' + '(2014)', 'Bicho de Sete Cabeças' + '(2001)', 'De Volta Para o Futuro' + '(1985)']
    }
  }
}
