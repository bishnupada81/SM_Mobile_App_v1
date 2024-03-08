import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  constructor(private _router: Router,private _dataService:DataServiceService) { }

  ngOnInit(): void {
  }


  public amountVerification = new FormGroup({
    amount: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.minLength(1)]
         ),
  })

  public get amount() {
    return this.amountVerification.get('amount');
  }

  public amountFormSubmit() : void{
    this._dataService.amount = this.amount?.value;
    console.log(this._dataService.amount);
    this._router.navigateByUrl('/account');
  }

}
