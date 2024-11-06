import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatOptionCardComponent } from "../format-option-card/format-option-card.component";
import { FormatOptionSearchComponent } from '../format-option-search/format-option-search.component';
import { FormatOption } from './format-option';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-format-builder',
  standalone: true,
  imports: [CommonModule, FormatOptionSearchComponent, FormatOptionCardComponent, MatGridListModule],
  templateUrl: './format-builder.component.html',
  styleUrl: './format-builder.component.css'
})
export class FormatBuilderComponent {
  formatOptions: FormatOption[] = [{
    title: "TEST 1", description: "DESCR-1"
  },{
    title: "TEST 2", description: "DESCR-2"
  }
];
}
