import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  Id = 0;
  userPhotos: any = '';
  dataofUsarFromAlbums: any = '';
  constructor(public rout: ActivatedRoute, public service: MyServiceService) {
    this.Id = rout.snapshot.params['id'];
    this.dataofUsarFromAlbums = this.service.getData();
  }
  ngOnInit(): void {
    this.service.GetUserPhotos(this.Id).subscribe({
      next: (data) => {
        this.userPhotos = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
