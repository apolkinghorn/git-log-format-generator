import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { FormatDemonstrationComponent } from './format-demonstration/format-demonstration.component';
import { FormatBuilderComponent } from "./format-builder/format-builder.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, FormatDemonstrationComponent, FormatBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git-log-format-generator';
}
