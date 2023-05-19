import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: any;
  constructor(public myservice: MyServiceService) {
    myservice.GetAllUsers().subscribe({
      next: (data) => {
        // console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ShowUpdateModel(e: any) {
    // e.style.display = 'block';
    // document.body.style.backgroundColor = '#666';
  }
  onCancelClick(e: any) {
    e.style.display = 'none';
    document.body.style.backgroundColor = '';
  }
  Add(name: any, email: any, phone: any, city: any, suite: any, street: any) {
    let newuser = { name, email, phone, city, suite, street };
    this.myservice.AddUser(newuser).subscribe();
    window.location.reload();
  }
}
