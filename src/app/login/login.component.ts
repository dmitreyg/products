import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = 'jamesd';
  password: string = 'jamesdpass';
  apiResp: string = '';
  welcome: string = '';

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.getToken()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(response => {

      this.apiResp = JSON.stringify(response);

      if (response.accessToken) {
        // Store the token if needed
        this.authService.setToken(response.accessToken);
        this.welcome = 'Hello, ' + response.firstName + ' ' + response.lastName;
        //this.router.navigate(['/']);
      } else {
        alert('Login failed');
      }
    });
  }
}


