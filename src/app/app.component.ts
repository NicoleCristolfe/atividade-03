import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { RecomendacaoComponent } from './recomendacao/recomendacao.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FilmesComponent,NgFor, RecomendacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atividade-1';
  
  caminho = ["",
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
 
    public filmes: any[] = [{
      name: 'O Auto da Compadecida (2000)',
      image: 'assets/img/o-auto-da-compadecida.jpg'
    },
  
    {
      name: 'Cidade de Deus (2002)',
        image: 'assets/img/cidade-de-deus.jpg'
    },
  
    {
      name: 'Estômago (2007)',
        image:"assets/img/estomago.jpg"
  
    },
  
    {
      name: 'A Hora da Estrela (1985)',
        image:"assets/img/a-hora-da-estrela.jpg"
    },
  
    {
      name: 'Parasita (2019)',
        image:"assets/img/parasita.jpg"
    },
  
    {
      name: 'E.T. O Extraterrestre (1982)',
        image:"assets/img/et.jpg"
    },
  
    {
      name: 'Seven (1995)',
        image:"assets/img/seven.jpg"
    },
  
    {
      name: 'O Profissional (1994)',
        image:"assets/img/o-profissional.jpg"
    },
  
    {
      name: 'Pixote (1980)',
        image:"assets/img/pixote.jpg"
    },
  
    {
      name: 'Donnie Darko (2001)',
        image:"assets/img/donnie-darko.jpg"
    },
  
    {
      name: 'Central do Brasil (1998)',
        image:"assets/img/central-do-brasil.jpg"
    },
  
    {
      name: 'Interestelar (2014)',
        image:"assets/img/interestelar.jpg"
    },
  
    {
      name: 'Bicho de Sete Cabeças (2001)',
        image:"assets/img/bicho-cabeca.jpg"
    },
  
    {
      name: 'De Volta Para o Futuro (1985)',
        image:"assets/img/de-volta-pro-futuro.jpg"
  
     }]
  
  }
@NgModule({
  declarations: [],

  imports: [AppComponent,NgFor, FilmesComponent, RecomendacaoComponent],
})

export class AppModule { }