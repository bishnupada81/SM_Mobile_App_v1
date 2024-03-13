import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  @ViewChild('teams') teams!:ElementRef

  constructor(private _router: Router,private _dataService:DataServiceService) { }

  ngOnInit(): void {
  }


  public amountVerification = new FormGroup({
    amount: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.minLength(1)]
         ),
    account: new FormControl("917010013737890",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(15),
         Validators.minLength(15)]
         ),
  })

  public get amount() {
    return this.amountVerification.get('amount');
  }

  public get account() {
    return this.amountVerification.get('account');
  }

  public amountFormSubmit() : void{
    this._dataService.amount = this.amount?.value;
    console.log(this._dataService.amount);
    this._router.navigateByUrl('/pre-configuration');
  }

  accounts = [
    "917010013737890" + "-saving Account",
    "917010013737892" + "-current Account",
    "917010013737893" + "-saving Account"
  ];
  default = 917010013737800+"-saving Account"

  selectedAccount= 23 ;
  onSelected(): void{
    this.selectedAccount = this.teams.nativeElement.value;
    this._dataService.accountNumber = this.selectedAccount.toString();
    // this._router.navigateByUrl('/pre-configuration');
  }

}
