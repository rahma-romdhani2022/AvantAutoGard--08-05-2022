import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditPatientComponent } from '../edit-patient/edit-patient.component';

@Component({
  selector: 'app-edit-patient-dialog',
  templateUrl: './edit-patient-dialog.component.html',
  styleUrls: ['./edit-patient-dialog.component.css']
})
export class EditPatientDialogComponent implements OnInit {

  constructor(private dialog: MatDialog , private dialogRef : MatDialogRef<EditPatientComponent> ) {}
  ngOnInit() {
  }
  onClear(){

    /*autre code */
   
       this.onClose();
    }
    onClose(){
      this.dialogRef.close();
    }
    
    
    
   }