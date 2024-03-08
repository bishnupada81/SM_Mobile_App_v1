import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  imageUrl: any;
  showSuccessMessage = false;

  public onFileSelected(event: any)
   {
    const file: File = event.target.files[0];
    if (file)
    {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;

      };
      reader.readAsDataURL(file);
    }
  }

  public verifyUser() : void {
    Swal.fire({
      title: "withdraw Successful! transaction Id:123456",
      confirmButtonText: "Okay",
    }).then((result) => {

      this.router.navigateByUrl('/');

    });
  }

}
