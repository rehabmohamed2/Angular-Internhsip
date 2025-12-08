import { Component, Input } from '@angular/core';
import { CardDetails } from '../../feature/home/home.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: CardDetails[] = [];
}
