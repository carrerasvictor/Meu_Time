import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule { }
