import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.css']
})
export class DialogDetailsComponent implements OnInit {
  total : number ;
  constructor(private dialog: MatDialog , private dialogRef : MatDialogRef<DialogDetailsComponent> ) {}
  
  onClear(){

 /*autre code */

    this.onClose();
 }
 onClose(){
   this.dialogRef.close();
 }
 
 
 ngOnInit(){
  
 }

}