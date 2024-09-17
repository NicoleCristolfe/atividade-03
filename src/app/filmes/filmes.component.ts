import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent {
  @Input()
  public filmes: any []=[];
  }

