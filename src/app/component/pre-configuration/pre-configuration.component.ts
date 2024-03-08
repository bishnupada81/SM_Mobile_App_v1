import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-pre-configuration',
  templateUrl: './pre-configuration.component.html',
  styleUrls: ['./pre-configuration.component.css'],
  providers: [DatePipe]
})
export class PreConfigurationComponent implements OnInit {

  constructor(private datePipe: DatePipe,public dataService:DataServiceService,private _router: Router) {
   }

  ngOnInit(): void {
  }

  currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');

  public goToScanNowPage(): void{
    this._router.navigateByUrl('/camera');
  }

}
