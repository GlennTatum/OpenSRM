import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from '@angular/fire/auth';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { R } from '../backend';
import { Router } from '@angular/router';

type AuthResponse = {
  token: string
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private auth = inject(Auth);
  private provider = new GoogleAuthProvider();
  private http = inject(HttpClient);
  private router = inject(Router);

  public handleLogIn() {
    signInWithPopup(this.auth, this.provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.

      const user = result.user.email;

      /**
       * login -> http to server -> store as session
       * <--- SESSION ID (STORE as cookie)
       * send back cookie on any other request to get user
       */
      this.http.post<AuthResponse>(R(`login/${user}`), null).subscribe((resp) => {
        document.cookie = `token=${resp['token']};`
      })
  
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  
}
