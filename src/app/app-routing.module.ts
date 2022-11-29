import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CourseComponent } from "./course/course.component";
import { LoginComponent } from "./login/login.component";
import { SearchLessonsComponent } from "./search-lessons/search-lessons.component";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./home/home.component").then((m) => m.HomeComponent),
    title: "Lessons",
  },
  {
    path: "search-lessons",
    component: SearchLessonsComponent,
    title: "Search page",
  },
  {
    path: "about",
    component: AboutComponent,
    title: "About",
  },
  {
    path: "courses/:courseId",
    component: CourseComponent,
    title: "Current Course",
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Registation",
  },
  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
