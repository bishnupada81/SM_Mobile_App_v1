import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  amount!: string | null | undefined;
  accountNumber!: string | null | undefined;

  constructor() { }
}
