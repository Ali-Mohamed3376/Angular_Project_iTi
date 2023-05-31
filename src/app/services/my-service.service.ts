import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private data: any;
  private data2: any;

  setData(data: any) {
    this.data = data;
  }

  setData2(data: any) {
    this.data2 = data;
  }

  getData() {
    return this.data;
  }
  getData2() {
    return this.data2;
  }
  /* */
  constructor(private readonly myClint: HttpClient) {}

  private readonly BASE_URL = '  https://jsonplaceholder.typicode.com';

  // Get All Useres
  GetAllUsers() {
    return this.myClint.get(this.BASE_URL + '/users');
  }

  // Get User by Id
  GetUserById(id: any) {
    return this.myClint.get(this.BASE_URL + '/users/' + id);
  }

  // Get User Albums
  GetUserAlbums(id: any) {
    return this.myClint.get(this.BASE_URL + '/users/' + id + '/albums');
  }

  // Get User Photos
  GetUserPhotos(id: any) {
    return this.myClint.get(this.BASE_URL + '/albums/' + id + '/photos');
  }
}
