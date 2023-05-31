import { HtmlTagDefinition } from '@angular/compiler';
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
  name = '';
  email = '';
  phone = '';
  city = '';
  suite = '';
  street = '';
  updatedDataFromUser: any = '';
  constructor(public myservice: MyServiceService) {
    myservice.GetAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // For open popup
  AddUserBtn() {
    let add = document.getElementById('header') as HTMLElement;
    add.style.position = 'static';
    console.log(add);

    let pop = document.getElementById('popup1') as HTMLElement;
    pop.style.display = 'block';
  }

  // For Adding New User into Table ONLY
  Add() {
    let newUser = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      city: this.city,
      suite: this.suite,
      street: this.street,
    };
    if (
      newUser.name &&
      newUser.email &&
      newUser.phone &&
      newUser.city &&
      newUser.suite &&
      newUser.street
    ) {
      let tbody = document.getElementById('tbody') as HTMLElement;
      let tr = document.createElement('tr');
      let subTr = document.createElement('tr');
      let td1 = document.createElement('td');
      if (
        newUser.name.length >= 3 &&
        newUser.name.length <= 9 &&
        isNaN(+newUser.name)
      ) {
        td1.innerText = newUser.name;
      }

      let td2 = document.createElement('td');
      if (newUser.email.includes('@')) {
        td2.innerText = newUser.email;
      }

      let td3 = document.createElement('td');
      if (!isNaN(+newUser.phone)) {
        td3.innerText = newUser.phone;
      } else {
        window.alert('Invalid Phone Input!!!');
      }

      let td4 = document.createElement('td');
      td4.innerText = newUser.city;

      let td5 = document.createElement('td');
      td5.innerText = newUser.suite;

      let td6 = document.createElement('td');
      td6.innerText = newUser.street;

      subTr.appendChild(td4);
      subTr.appendChild(td5);
      subTr.appendChild(td6);
      let td7 = document.createElement('td');
      td7.appendChild(subTr);
      let td8 = document.createElement('td');
      td8.innerHTML = `<a class="btn btn-success" "
    >Update</a
  >`;

      let td9 = document.createElement('td');
      td9.innerHTML = `<button class="btn btn-danger btn-md me-5" >
    Delete
  </button>`;
      td9.addEventListener('click', () => {
        window.confirm('Are sure you want to delete this item ?');
        tbody.removeChild(tr);
      });

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td7);
      tr.appendChild(td8);
      tr.appendChild(td9);
      tbody.appendChild(tr);
      this.name = '';
      this.email = '';
      this.phone = '';
      this.city = '';
      this.suite = '';
      this.street = '';
    } else {
      window.alert('No Useres Added!!!');
    }

    let pop = document.getElementById('popup1') as HTMLElement;
    pop.style.display = 'none';
    var newUrl = '';
    window.history.pushState({ path: newUrl }, '', newUrl);
  }

  // For Deleting User From Table ONLY
  Delete(r: any) {
    let tbody = document.getElementById('tbody') as HTMLElement;
    if (window.confirm('Are sure you want to delete this item ?')) {
      tbody.removeChild(r);
    }
  }

  //for closing popup
  Close() {
    let pop = document.getElementById('popup1') as HTMLElement;
    pop.style.display = 'none';
    this.name = '';
    this.email = '';
    this.phone = '';
    this.city = '';
    this.suite = '';
    this.street = '';

    var newUrl = '';
    window.history.pushState({ path: newUrl }, '', newUrl);
  }
}
