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
}
@NgModule({
  declarations: [],

  imports: [AppComponent,NgFor, FilmesComponent, RecomendacaoComponent],
})

export class AppModule { }