import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login: Login = new Login();
  data: any;

  constructor(private authService: AuthService, private route: Router){ }


  ngOnInit(): void {
    this.authService.getData().subscribe(
      (      res: any) => {
        this.data = res;
      },
      (      error: any) => {
        console.error(error);
      }
    );
  }
  validaToken(){
    this.authService.validaToken(this.login);
  }

  goCountry(){
    this.route.navigate(['/country'])
  }
}
