import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string = 'App Form';
  mainform = new FormGroup({
    firstname: new FormControl<string>('', Validators.required),
    lastname: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    age: new FormControl<string>('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }
  get firstname() {
    return this.mainform.get('firstname');
  }
  get lastname() {
    return this.mainform.get('lastname');
  }
  get email() {
    return this.mainform.get('email');
  }
  get age() {
    return this.mainform.get('age');
  }
  submit() {
    console.log(this.mainform.value);
  }

}
