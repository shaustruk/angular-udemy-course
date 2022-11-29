import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { CourseDialogComponent } from "../../course-dialog/course-dialog.component";
import { Course } from "../../model/course";

@Component({
  selector: "home-view",
  templateUrl: "./home-view.component.html",
  styleUrls: ["./home-view.component.scss"],
  standalone: true,
  imports: [MatTabsModule, CommonModule, MatCardModule],
})
export class HomeViewComponent implements OnInit, OnChanges {
  @Input() courses: Course[];

  constructor(private dialog: MatDialog) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log(changes);
    }
  }

  ngOnInit(): void {
    console.log(this.courses);
  }

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
