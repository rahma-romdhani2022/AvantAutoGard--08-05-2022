import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserServiceService } from "./user-service.service";
import { AdminService } from "./admin.service";



@Injectable()
export class AuthGuardExpert implements CanActivate {
  constructor(private router: Router,
    private userService: UserServiceService , private adminService : AdminService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token') != null)
      return true;
    
      this.router.navigate([""])
    return false;
  }

}