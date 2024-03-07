import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AmountComponent } from './component/amount/amount.component';
import { AccountComponent } from './component/account/account.component';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { PreConfigurationComponent } from './component/pre-configuration/pre-configuration.component';
import { CameraComponent } from './component/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AmountComponent,
    AccountComponent,
    SetPinComponent,
    PreConfigurationComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
