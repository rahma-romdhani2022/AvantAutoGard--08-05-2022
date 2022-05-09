import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-infos-patient',
  templateUrl: './infos-patient.component.html',
  styleUrls: ['./infos-patient.component.css']
})
export class InfosPatientComponent implements OnInit {

  constructor(private router : Router, private service : UserServiceService) { }

  ngOnInit() {
    $( "#menu" ).on( "click", function()
    {
      $( "#menu23" ).fadeToggle( "fast" );
    });
      }
      logout() {
        localStorage.removeItem('name');
        this.service.islogin = false;
      this.router.navigate(['']);
          ///location.reload();
      }
}
