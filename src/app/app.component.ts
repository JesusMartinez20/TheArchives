import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheArchives';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AcercaDeComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
}
