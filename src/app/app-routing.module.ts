import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { SetPinComponent } from './component/set-pin/set-pin.component';
import { CameraComponent } from './component/camera/camera.component';
import { AmountComponent } from './component/amount/amount.component';
import { AccountComponent } from './component/account/account.component';
import { PreConfigurationComponent } from './component/pre-configuration/pre-configuration.component';

const routes: Routes = [
  {path:'',                 component:LandingPageComponent},
  {path:'amount',           component:AmountComponent},
  {path:'account',          component:AccountComponent},
  {path:'pre-configuration',component:PreConfigurationComponent},
  {path:'set-pin',          component:SetPinComponent},
  {path:'camera',           component:CameraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
