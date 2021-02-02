import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alertService: { onAction: (arg0: any) => void; };

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.alertService = data.alertService;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(
      result => {
        if (this.alertService) {
          this.alertService.onAction(result);
        }
      }
    );
  }

}
