import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/Guard/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Authservice:AuthServiceService, private router: Router) {}  
  canActivate(): boolean {  
    if (!this.Authservice.gettoken()) {  
        this.router.navigateByUrl("/log-in");  
    }  
    return this.Authservice.gettoken();  
}  
 
}
