import { Component, OnInit } from "@angular/core";
import { notes } from "../../assets/notes";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  notesForm;
  tabNotes = [];
  tempo;
  noteValues = [];

  constructor(private formBuilder: FormBuilder) {
    this.notesForm = this.formBuilder.group({
      tabNotes: [],
      tempo: ""
    });
  }

  ngOnInit() {}

  onSubmit(data) {
    this.tabNotes = data.tabNotes.split(" ");
    this.tempo = data.tempo;

    this.tabNotes.forEach(item => {
      setInterval(() => {
        this.noteValues.push(notes[item]);
      }, this.tempo * 1000);
    });

    // this.tabNotes.forEach(item => {
    //   let noteItem = setInterval(() => item, this.tempo * 1000);
    //   this.noteValues.push(noteItem);
    // });

    this.notesForm.reset();
  }

  // onStop() {
  //   clearInterval(noteItem)
  // }
}
