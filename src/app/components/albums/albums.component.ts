import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent {
  Id = 0;
  userData: any = '';
  userAlbums: any = '';
  constructor(public rout: ActivatedRoute, public service: MyServiceService) {
    this.Id = rout.snapshot.params['id'];
    console.log(this.Id);
  }
  ngOnInit(): void {
    this.service.GetUserById(this.Id).subscribe({
      next: (data) => {
        this.userData = data;
        this.service.setData(data);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.service.GetUserAlbums(this.Id).subscribe({
      next: (albums) => {
        this.userAlbums = albums;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
