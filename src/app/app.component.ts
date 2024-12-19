import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/ElioFrancis.pdf';  // Path relative to the 'src' folder
    link.download = 'ElioFrancis.pdf';
    link.click();
  }
}
