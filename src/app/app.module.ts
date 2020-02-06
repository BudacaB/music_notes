import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NotesComponent } from "./notes/notes.component";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormsModule } from "@angular/forms";

let appRoutes: Routes = [
  { path: " ", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "notes", component: NotesComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent, NotesComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
