import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenAutenticado: boolean = false;
  getData: any;

  constructor(private router: Router) { }

  validaToken(login: Login){
    if(login.token === '8560b1001dcbe1637bb52bd25334d63f'){
      this.tokenAutenticado = true
      this.router.navigate(['home'])
    } else{
      this.tokenAutenticado = false;
      alert('Chave incorreta!')
    }
    console.log("entrou")
  }

  userAutenticado(){
    return this.tokenAutenticado
  }
}


