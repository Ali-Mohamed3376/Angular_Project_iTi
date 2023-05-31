import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Demo';
  dataFromUser = '';
  GetDataFromUserDetails(data: any) {
    // this.dataFromUser = data;
    console.log(`Data From User = ${data}`);
  }
}
