import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCbAV-F30KxPUYWy3J8s97BCN_0G7AK1sY",

      authDomain: "brickhack-13d36.firebaseapp.com",
    
      projectId: "brickhack-13d36",
    
      storageBucket: "brickhack-13d36.firebasestorage.app",
    
      messagingSenderId: "901063629086",
    
      appId: "1:901063629086:web:39f6e63159123e4025d10f",
    
      measurementId: "G-YEH1C3NW2F"
    
    })),
    provideAuth(() => getAuth()),
  ]
};
