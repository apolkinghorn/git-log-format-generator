import { Component } from '@angular/core';
import { FormatOptionSearchComponent } from '../format-option-search/format-option-search.component';

@Component({
  selector: 'app-format-builder',
  standalone: true,
  imports: [FormatOptionSearchComponent],
  templateUrl: './format-builder.component.html',
  styleUrl: './format-builder.component.css'
})
export class FormatBuilderComponent {

}
