import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  Id = 0;
  updatedData: any = '';
  constructor(myRout: ActivatedRoute, public myservice: MyServiceService) {
    this.Id = myRout.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myservice.GetUserById(this.Id).subscribe({
      next: (data) => {
        // console.log(data);
        this.updatedData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  Update(
    name: any,
    email: any,
    phone: any,
    city: any,
    street: any,
    suite: any
  ) {
    let obj = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      street: street,
      suite: street,
    };
    this.myservice.UpdateData(obj, this.Id).subscribe();
  }
}
