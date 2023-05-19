import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private readonly myClint: HttpClient) {}

  private readonly BASE_URL = '  http://localhost:3000/users';

  GetAllUsers() {
    return this.myClint.get(this.BASE_URL);
  }

  GetUserById(id: any) {
    return this.myClint.get(this.BASE_URL + '/' + id);
  }

  AddUser(newuser: any) {
    return this.myClint.post(this.BASE_URL, newuser);
  }

  UpdateData(myuser: any, id: any) {
    return this.myClint.put(this.BASE_URL + '/' + id, myuser);
  }
}
