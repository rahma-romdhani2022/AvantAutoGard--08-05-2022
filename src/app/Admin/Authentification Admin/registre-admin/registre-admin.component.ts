import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registre-admin',
  templateUrl: './registre-admin.component.html',
  styleUrls: ['./registre-admin.component.css']
})
export class RegistreAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

}
