import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  constructor(private dialog: MatDialog , private dialogRef : MatDialogRef<EditPatientComponent> ) {}
  ngOnInit() {
    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(event) {
              $('#imagePreview').css('background-image', 'url('+(<FileReader>event.target).result+')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]); } }
  $("#imageUpload").change(function() {
      readURL(this);
  });
  }
  onClear(){

    /*autre code */
   
       this.onClose();
    }
    onClose(){
      this.dialogRef.close();
    }
    
    
    
   }


