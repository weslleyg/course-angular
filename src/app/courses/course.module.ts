import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/components/star/star.module";
import { AppPipeModule } from "../shared/pipes/app-pipe.module";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { CourseListComponent } from "./course-list/course-list.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: "courses",
        component: CourseListComponent
      },
      {
        path: "courses/info/:id", component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule { }
