import { Component, Input } from '@angular/core';
import { FilmesComponent } from '../filmes/filmes.component';

@Component({
  selector: 'app-recomendacao',
  standalone: true,
  imports: [FilmesComponent],
  templateUrl: './recomendacao.component.html',
  styleUrl: './recomendacao.component.scss'
})
export class RecomendacaoComponent {
  @Input()
  public filmes: any[] = [];

  listaDeRecomendados: any [] = [];
  filmeAleatorio(): string {
    return (this.filmes[Math.floor(Math.random() * this.filmes.length)].toString());
  }

  shuffle(array: String[]) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  listaAleatoria() {
    const tempLista: String[] = [...this.filmes];

    this.shuffle(tempLista)

    this.listaDeRecomendados = tempLista.slice(0, 7);
  }

}
