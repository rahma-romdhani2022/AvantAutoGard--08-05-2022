import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
    
 
  constructor() {}

  ngOnInit() {
               //Toggle Click Function
               $('#sidebarCollapse').on('click', function() {
                $('#sidebar, #content').toggleClass('active');
              });
            }
  }
          
  


