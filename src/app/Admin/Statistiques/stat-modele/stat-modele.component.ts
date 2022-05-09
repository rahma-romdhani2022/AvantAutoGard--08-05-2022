import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-stat-modele',
  templateUrl: './stat-modele.component.html',
  styleUrls: ['./stat-modele.component.css']
})
export class StatModeleComponent implements OnInit {

  constructor(private service : AdminService , private router : Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('name');
    this.service.islogin = false;
    this.router.navigate(['']);
    window.localStorage.clear();
      //location.reload();
  }
}
