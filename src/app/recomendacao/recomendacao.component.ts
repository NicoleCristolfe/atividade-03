import { Component } from '@angular/core';
import { FilmesComponent } from '../filmes/filmes.component';

@Component({
  selector: 'app-recomendacao',
  standalone: true,
  imports: [FilmesComponent],
  templateUrl: './recomendacao.component.html',
  styleUrl: './recomendacao.component.scss'
})
export class RecomendacaoComponent extends FilmesComponent {
  catalogo: String[] = [...this.filme.infos.filmes];
  listaDeRecomendados: String[] = [];

  filmeAleatorio(): string {
    return (this.catalogo[Math.floor(Math.random() * this.catalogo.length)].toString());
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
    const tempLista: String[] = [...this.catalogo];
    
    this.shuffle(tempLista)

    this.listaDeRecomendados = tempLista.slice(0, 7);
  }

}
