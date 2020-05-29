import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(public authServices: AuthService, private alertyfi: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authServices.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login(){
    this.authServices.login(this.model).subscribe(next => {
      this.alertyfi.success('Logeado con exito');
    }, error => {
      this.alertyfi.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    return this.authServices.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authServices.decodedToken = null;
    this.authServices.currentUser = null;
    this.alertyfi.message('Sesion cerrada');
    this.router.navigate(['']);
  }

}
