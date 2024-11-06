import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormatOption } from '../format-builder/format-option';

@Component({
  selector: 'app-format-option-card',
  standalone: true,
  imports: [MatCardModule, MatSlideToggleModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './format-option-card.component.html',
  styleUrl: './format-option-card.component.css'
})
export class FormatOptionCardComponent {
  @Input() option!: FormatOption;
}
